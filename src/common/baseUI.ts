import { LoadingController } from "ionic-angular/components/loading/loading-controller";
import { ToastController } from "ionic-angular/components/toast/toast-controller";



export abstract class BaseUI {
  constructor(
  ) { }


  /**
   * loading窗
   *
   * @author qin
   * @protected
   * @param {LoadingController} loadingCtrl
   * @param {string} [message]
   * @returns
   * @memberof BaseUI
   */
  protected showLoading(loadingCtrl: LoadingController, message?: string) {
    let loader = loadingCtrl.create({
      content: message,
      duration: 15000,
      dismissOnPageChange: true
    });
    loader.present();
    return loader;
  };


  /**
   * toast弹窗
   *
   * @author qin
   * @protected
   * @param {ToastController} toastCtrl
   * @param {string} site
   * @param {string} [message]
   * @returns
   * @memberof BaseUI
   */
  protected showToast(toastCtrl: ToastController, site: string, message?: string) {
    let toast = toastCtrl.create({
      message: message,
      duration: 2500,
      dismissOnPageChange: true,
      position: site
    });
    toast.present();
    return toast;
  }



}
