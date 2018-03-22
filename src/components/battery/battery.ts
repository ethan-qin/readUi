import { Component, Input } from "@angular/core";

/**
 * Generated class for the BatteryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "battery",
  templateUrl: "battery.html"
})
export class BatteryComponent {
  @Input("battery") battery: number = 0;
  constructor() {
    console.log("Hello BatteryComponent Component");
  }

}
