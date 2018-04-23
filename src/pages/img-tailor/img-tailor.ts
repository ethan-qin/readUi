import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Gesture } from 'ionic-angular';
/**
 * Generated class for the ImgTailorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-img-tailor',
  templateUrl: 'img-tailor.html',
})
export class ImgTailorPage {
  @ViewChild('tailorContainer') tailorContainer: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('mask') mask: ElementRef;
  @ViewChild(Content) content: Content;
  private _CANVAS;                      // 图片层
  private _MASK;                        // 遮罩层
  private _CONTEXT;                     // 图片绘制区域
  private COVER_BOX_CONTENT;            // 遮罩绘制区域
  private width: number;            // 遮罩绘制区域
  private height: number;            // 遮罩绘制区域
  private _imgs = new Image();          // 待裁剪的图片
  private stepClear = 1;                // 别忘记这一步 
  private gesture: Gesture;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this._imgs.src = "assets/imgs/underwater1.jpg";
  }

  ionViewDidLoad() {
    this.gesture = new Gesture(this.tailorContainer.nativeElement);
    this.gesture.listen();

    this.width = this.tailorContainer.nativeElement.offsetWidth;
    this.height = this.tailorContainer.nativeElement.offsetHeight;
    this.gesture.on('pinch', e => this.pinch(e));
    this.initCanvas(this.width, this.height)
    this.clearArc(this.width / 2, this.width / 2 + 50, (this.width / 2) - 30);
    this.drawImage(this._imgs)
  }

  /**
   * 初始化 canvas
   * 
   * @author qin
   * @param {number} width 
   * @param {number} height 
   * @memberof ImgTailorPage
   */
  initCanvas(width: number, height: number): void {
    this._CANVAS = this.canvas.nativeElement;
    this._MASK = this.mask.nativeElement;
    this._CONTEXT = this._CANVAS.getContext('2d');
    this.COVER_BOX_CONTENT = this._MASK.getContext('2d');
    this._CANVAS.width = width;
    this._CANVAS.height = height;
    this._MASK.width = width;
    this._MASK.height = height;
    this.COVER_BOX_CONTENT.fillStyle = "rgba(0,0,0,.5)";
    this.COVER_BOX_CONTENT.fillRect(0, 0, width, height);
  }

  /**
   * 绘制图片
   * 
   * @author qin
   * @param {*} img 
   * @memberof ImgTailorPage
   */
  drawImage(img: any): void {
    this._imgs.onload = () => {
      this._CONTEXT.drawImage(img, 0, 0);
      // setTimeout(() => {
      //   this.canvaScale(0.5, this._imgs)
      // }, 5000);
    }
  }


  /**
   * 再遮罩层掏出选择区域
   * 
   * @author qin
   * @param {any} x 
   * @param {any} y 
   * @param {any} radius 
   * @memberof ImgTailorPage
   */
  clearArc(x, y, radius): void {//圆心(x,y)，半径radius     
    var calcWidth = radius - this.stepClear;
    var calcHeight = Math.sqrt(radius * radius - calcWidth * calcWidth);
    var posX = x - calcWidth;
    var posY = y - calcHeight;

    var widthX = 2 * calcWidth;
    var heightY = 2 * calcHeight;

    if (this.stepClear <= radius) {
      this.COVER_BOX_CONTENT.clearRect(posX, posY, widthX, heightY);
      this.stepClear += 1;
      this.clearArc(x, y, radius);
    }
  }


  /**
   * 图片缩放
   * 
   * @author qin
   * @param {number} scale 
   * @param {*} img 
   * @memberof ImgTailorPage
   */
  canvaScale(scale: number, img: any): void {
    let rectCenterPoint = { x: this.width / 2, y: this.height / 2 };// 矩形中心点
    this._CONTEXT.clearRect(0, 0, 1000, 1000)
    this._CONTEXT.beginPath();
    this._CONTEXT.translate(rectCenterPoint.x * (1 - scale), rectCenterPoint.y * (1 - scale));
    this._CONTEXT.scale(scale, scale);
    this._CONTEXT.drawImage(img, 0, 0);
  }

  test(): void {
    // console.log(scale);
    let scale = parseFloat(Math.random() + 0.1.toFixed());
    console.log(scale);
    if (scale > 1) {
      scale = 1 + (scale - 1) / 50;
    } else {
      scale = 1 - (1 - scale) / 50;
    }
    this.canvaScale(scale, this._imgs)
  }
  pinch(e): void {
    let scale = e.scale;
    if (scale > 1) {
      scale = 1 + (scale - 1) / 50
    } else {
      scale = 1 - (1 - scale) / 50
    }
    this.canvaScale(scale, this._imgs)

  }
  pan(e): void {
    console.log("pan" + e)
  }

  back(): void {
    this.navCtrl.pop();
  }
}
