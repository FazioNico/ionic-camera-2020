import { Component } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { CameraService } from './services/camera/camera.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'IonicCamera2020';
  imgUrl: string = null;

  constructor(
    private _camera: CameraService
  ) {}

  async takePicture(btn: IonButton) {
    btn.disabled = true;
    this.imgUrl = await this._camera.takePicture();
    btn.disabled = false;
  }
}
