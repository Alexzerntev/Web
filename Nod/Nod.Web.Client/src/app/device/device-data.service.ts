import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Device, Gps, HardwareStatus, DateTimeWindow } from './device.model';

@Injectable({
  providedIn: 'root'
})

export class DeviceDataService {

  private apiUrl: string = environment.apiUri + "Device/";

  constructor(private http: HttpClient) { }

  getDevices() {
    return this.http.get<Device[]>(this.apiUrl + "Devices");
  }

  getGpsesByDateTime(deviceId: string, startDateTime: Date, endDateTime: Date) {
    let dateTimeWindow = new DateTimeWindow();
    dateTimeWindow.StartDateTime = startDateTime;
    dateTimeWindow.EndDateTime = endDateTime;
    return this.http.post<Gps[]>(this.apiUrl + `Gpses/${deviceId}`, dateTimeWindow);
  }

  getHardwareStatusesByDateTime(deviceId: string, startDateTime: Date, endDateTime: Date) {
    return this.http.post<HardwareStatus[]>(this.apiUrl + `HardwareStatuses/${deviceId}`, { startDateTime, endDateTime });
  }

}
