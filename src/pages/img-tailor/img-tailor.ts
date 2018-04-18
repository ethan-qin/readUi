import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  @ViewChild('image') element: any;
  @ViewChild('canvas') canvas: ElementRef;
  private _CANVAS: any;
  private _CONTEXT: any;
  private gesture: Gesture;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {

  }

  ionViewDidLoad() {
    this._CANVAS = this.canvas.nativeElement;
    this._CANVAS.width = 412;
    this._CANVAS.height = 700;
    this.initialiseCanvas();
    this.drawCircle();
    this.gesture = new Gesture(this.element.nativeElement);
    console.log('ionViewDidLoad ImgTailorPage');
    this.gesture.listen();

    //监听缩放
    this.gesture.on('pinch', e => this.pinch(e));
  }
  pinch(e): void {
    console.log(e.scale)
  }
  pan(e): void {
    console.log("pan" + e)
  }

  back(): void {
    this.navCtrl.pop();
  }

  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }
  setupCanvas() {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "rgba(0,0,0,0.5)";
    this._CONTEXT.fillRect(0, 0, this._CANVAS.width, this._CANVAS.height);
  }
  clearCanvas() {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.width);
    this.setupCanvas();
  }

  drawCircle() {
    this.clearCanvas();
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.width / 1.8,  this._CANVAS.width/2.2, 0, 2 * Math.PI);
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }
}
