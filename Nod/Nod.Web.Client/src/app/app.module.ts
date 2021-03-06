import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common'

import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { DeviceModule } from './device/device.module';

import { AppRoutingModule } from './app-routing.module';

import { TokenInterceptor } from './core/auth/token.interceptor'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    DashboardModule,
    DeviceModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
