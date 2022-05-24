import { Module } from '@nestjs/common';
import { BrowserNotificationService } from './browser-notification.service';
import { BrowserNotificationController } from './browser-notification.controller';

@Module({
  controllers: [BrowserNotificationController],
  providers: [BrowserNotificationService]
})
export class BrowserNotificationModule {}
