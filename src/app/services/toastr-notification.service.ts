import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastrNotificationService {
  public params = {
    enableHtml: true,
    progressBar: true,
    positionClass: 'toast-bottom-center',
    timeOut: 8000,
  };

  constructor(private _toastr: ToastrService) {}

  public success = (
    message: string,
    title: string,
    params: any = this.params
  ): void => {
    this._toastr.success(message, title, params);
  };

  public error = (
    message: string,
    title: string,
    params: any = this.params
  ): void => {
    this._toastr.error(message, title, params);
  };

  public info = (
    message: string,
    title: string,
    params: any = this.params
  ): void => {
    this._toastr.info(message, title, params);
  };

  public warning = (
    message: string,
    title: string,
    params: any = this.params
  ): void => {
    this._toastr.warning(message, title, params);
  };
}