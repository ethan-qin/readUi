import { Alipay, AlipayOrder } from '@ionic-native/alipay';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { BatteryStatus } from "@ionic-native/battery-status";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { CodePush } from "@ionic-native/code-push";
import { Dialogs } from '@ionic-native/dialogs';
import { Injectable } from "@angular/core";
import { ImagePicker } from '@ionic-native/image-picker';
import { NativePageTransitions, NativeTransitionOptions } from "@ionic-native/native-page-transitions";
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Platform, NavController } from "ionic-angular";
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { Storage } from "@ionic/storage";
import { Toast } from "@ionic-native/toast";
import { Vibration } from "@ionic-native/vibration";
import { BaseUI } from "../../common/baseUI";
import { IS_DEBUG, CODE_PUSH_key } from "./../api/api";
import { batteryStu } from "../../model/model";
import { Observer, Observable } from 'rxjs';
/*
  Generated class for the NativeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvider extends BaseUI {
  constructor(
    private androidPermissions: AndroidPermissions,
    private codePush: CodePush,
    private dialogs: Dialogs,
    private loadingCtrl: LoadingController,
    private nativePageTransition: NativePageTransitions,
    private platform: Platform,
    private photoLibrary: PhotoLibrary,
    private storage: Storage,
    private toastCtrl: ToastController,
    private vibration: Vibration,
    private toast: Toast,
    private batteryStatus: BatteryStatus,
    private spinnerDialog: SpinnerDialog,
    private imgPicker: ImagePicker,
    private alipay: Alipay
  ) {
    super();
    console.log("加载native模块");
  }

  showNativeToast(message?) {
    if (!message) {
      message = "再按一次退出";
    }
    this.toast.show(`${message}`, "5000", "bottom").subscribe(toast => {
      console.log(toast);
    });
  }
  showDialog(): void {
    this.dialogs.alert('Hello world')
      .then(() => console.log('Dialog dismissed'))
      .catch(e => console.log('Error displaying dialog', e));
  }
  showSpinnerDialog(): void {
    this.spinnerDialog.show('你好啊', '这是一条微调设置消息', () => {
      this.toastCtrl.create({
        message: '取消了',
        duration: 2000,
        showCloseButton: true,
        closeButtonText: 'i know',
        position: 'top'
      }).present()
    })
  }

  /**
   * 电池状态
   * -*
   * @author qin
   * @returns {Promise<batteryStu>} 
   * @memberof NativeProvider
   */
  getBatteryStatus(): Promise<batteryStu> {
    if (!this.isMobile()) {
      return new Promise(resolve => {
        resolve({
          level: 100,
          isPlugged: false
        });
      });
    } else {
      return new Promise(resolve => {
        const subscription = this.batteryStatus.onChange().subscribe(status => {
          subscription.unsubscribe();
          resolve({
            level: status.level,
            isPlugged: status.isPlugged
          });
        });
      });
    }
  }

  /**
   * 获取本地存储
   *
   * @author qin
   * @param {any} readUser
   * @returns {Promise<any>}
   * @memberof NativeProvider
   */
  getStorage(name: string): Promise<any> {
    return new Promise(resolve => {
      this.storage.get(name).then(
        f => {
          resolve({
            stu: true,
            data: f
          });
        },
        err => {
          resolve({
            stu: false,
            data: err
          });
        }
      );
    });
  }

  /**
   * 保存数据到本地存储
   *
   * @author qin
   * @param {string} name
   * @param {*} data
   * @returns {Promise<any>}
   * @memberof NativeProvider
   */
  public setStorage(name: string, data: any): Promise<any> {
    return new Promise(resolve => {
      this.storage.set(name, data).then(
        f => {
          resolve({
            stu: true,
            message: "setStorage：数据写入完成",
            data: ''
          });
        },
        err => {
          resolve({
            stu: false,
            message: "setStorage：数据写入失败",
            data: ''
          });
        }
      );
    });
  }

  /**
   * 设备震动
   *
   * @author qin
   * @memberof NativeProvider
   */
  public shake(): void {
    this.vibration.vibrate([50, 100]);
  }

  /**
   * 是否为真机
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  public isMobile(): boolean {
    return this.platform.is("mobile") && !this.platform.is("mobileweb");
  }

  /**
   * 平台是否是安卓
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  public isAndroid(): boolean {
    return this.isMobile && this.platform.is("android");
  }

  /**
   * 平台是否是ios
   *
   * @author qin
   * @returns {boolean}
   * @memberof NativeProvider
   */
  public isIos(): boolean {
    return this.isMobile && this.platform.is("ios");
  }

  /**
   * 热更新
   *
   * @author qin
   * @memberof NativeProvider
   */
  public sync() {
    if (this.isMobile()) {
      let deploymentKey = "";
      if (this.isAndroid() && IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.android.Staging;
      }
      if (this.isAndroid() && !IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.android.Production;
      }
      if (this.isIos() && IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.ios.Staging;
      }
      if (this.isIos() && !IS_DEBUG) {
        deploymentKey = CODE_PUSH_key.ios.Production;
      }

      this.codePush.sync({ deploymentKey: deploymentKey }).subscribe(f => {
        let loader = super.showLoading(this.loadingCtrl, "更新中");
        if (f == 0) {
          loader.dismissAll();
          let toast = super.showToast(this.toastCtrl, "top", "已是最新版本");
          toast.dismissAll();
        } else if (f == 3) {
          loader.dismissAll();
          let toast = super.showToast(this.toastCtrl, "top", "更新出错");
          toast.dismissAll();
        } else if (f == 5) {
          console.log("[CodePush]:检查是否有更新;syncStatus:" + f);
        } else if (f == 7) {
          console.log("[CodePush]:准备下载安装包;syncStatus:" + f);
        } else if (f == 8) {
          console.log("[CodePush]:下载完成准备安装;syncStatus:" + f);
        } else {
          console.log("[CodePush]:其他状态;syncStatus:" + f);
          this.codePush.restartApplication();
        }
      });
    }
  }



  /**
   * 选择图片
   * 
   * @author qin
   * @returns {Promise<any>} 
   * @memberof NativeProvider
   */
  public chooseImg(): Observable<any> {
    return new Observable((observable) => {
      this.imgPicker.getPictures({
        maximumImagesCount: 1,
        outputType: 1          //1为base64， 0为本地url
      }).then(f => {
        console.log('选择图片的返回值是', f);
        if (f == 'Ok') {
          this.chooseImg()
        }
        if (f.length == 0) {
          observable.next({ stu: false, avatar: '' })
          return;
        } else {
          observable.next({ stu: true, avatar: f });
        }
      }, err => {
        observable.next({ stu: false, avatar: '', message: err })
        console.log('选择图片的错误返回值是', err);
      }).catch(error => {
        console.log('选择图片的错误catch返回值是', error);
        observable.next({ stu: false, avatar: '', message: error })
      })
    })
  }


  public Alipay(): void {

  }


  public permission(): void {
    if (!this.isMobile) {
      return;
    }
    let permission = [
      this.androidPermissions.PERMISSION.FLASHLIGHT,
      this.androidPermissions.PERMISSION.CLEAR_APP_CACHE,
      this.androidPermissions.PERMISSION.CHANGE_WIFI_STATE,
      this.androidPermissions.PERMISSION.CHANGE_NETWORK_STATE,
      this.androidPermissions.PERMISSION.CAMERA,
      this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
    ]
    // this.androidPermissions.requestPermissions(permission).then(f => {
    //   console.log('请求权限列表正确回掉是', f);
    // }, err => {
    //   console.log('请求权限列表错误回掉是', err);
    // }).catch(error => {
    //   console.log('请求权限程序错误回掉是', error);

    // })
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
  }

  /**
   * 获取全部图片，按相册分类
   * 
   * @author qin
   * @returns {Observable<any>} 
   * @memberof NativeProvider
   */
  public getPhotoLibrary(): Observable<any> {
    let option = {
      thumbnailWidth: 400,
      thumbnailHeight: 400,
      quality: 0.3,
      useOriginalFileNames: false,
      includeAlbumData: true
    }
    return new Observable(observable => {
      this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary(option).subscribe({
          next: library => {
            let imgUrl = [];
            let tempArr = [];
            let sortedArr = [];
            library.forEach((libraryItem) => {
              // console.log(libraryItem.id);          // ID of the photo
              // console.log(libraryItem.photoURL);    // Cross-platform access to photo
              // console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
              // console.log(libraryItem.fileName);
              // console.log(libraryItem.width);
              // console.log(libraryItem.height);
              // console.log(libraryItem.creationDate);
              // console.log(libraryItem.latitude);
              // console.log(libraryItem.longitude);
              // console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
              imgUrl.push(libraryItem)
            });
            imgUrl.sort(this.sortNumber('albumIds'))
            for (let i = 0, j = imgUrl.length; i < j; i++) {
              if (imgUrl[i + 1] && imgUrl[i].albumIds.toString() == imgUrl[i + 1].albumIds.toString()) {
                tempArr.push(imgUrl[i]);
              } else {
                tempArr.push(imgUrl[i]);
                sortedArr.push({
                  albumIds: imgUrl[i].albumIds.toString(),
                  imgList: tempArr.slice(0)
                });
                tempArr.length = 0;
              }
            }
            this.getPhotosList().subscribe(f => {
              sortedArr.forEach((element) => {
                f.forEach(elements => {
                  if (element.albumIds == elements.id) {
                    element.title = elements.title
                  }
                });
              })
            })
            observable.next(sortedArr)
          },
          error: err => { console.log('could not get photos'); },
          complete: () => { console.log('done getting photos'); }
        });
      }).catch(err => console.log('permissions weren\'t granted'));
    })
  }

  /**
   * 相册排序
   * 
   * @author qin
   * @param {any} albumIds 
   * @returns 
   * @memberof NativeProvider
   */
  sortNumber(albumIds) {
    return function (a: any, b: any) {
      return a.albumIds - b.albumIds
    }
  }

  /**
   * 获取相册
   * 
   * @author qin
   * @returns {Observable<any>} 
   * @memberof NativeProvider
   */
  public getPhotosList(): Observable<any> {
    return new Observable(observable => {
      this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getAlbums().then(f => {
          observable.next(f)
        }).catch(error => {
          console.log(error);
        });
      })
    })
  }

  /**
   * 转换成base64
   * 
   * @author qin
   * @param {any} libraryItem 
   * @returns {Observable<string>} base64字符串
   * @memberof NativeProvider
   */
  public getPhotoBase64(libraryItem): Observable<string> {
    return new Observable(observable => {
      this.photoLibrary.getPhoto(libraryItem, {
        quality: 0.1
      }).then(f => {
        let reader = new FileReader();
        reader.readAsDataURL(f);
        reader.onloadend = function () {
          observable.next(reader.result)
        }
      })
    })
  }
}
