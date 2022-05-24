import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './device-notification/device.module';
import { BrowserNotificationModule } from './browser-notification/browser-notification.module';

@Module({
  imports: [DeviceModule, BrowserNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
