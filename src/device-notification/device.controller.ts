import { Controller, Post, Req, } from '@nestjs/common';
import { DeviceService } from './device.service';

@Controller('device')
export class DeviceController {
  notificationService: any;
  constructor(private readonly deviceService: DeviceService) { }

  @Post('/confirm-subscription')
  async addSubscriptionToSns(@Req() req) {
    try {

      const subscription = await this.deviceService.confirmSubscription(
        req.body.endpoint
      );
      //after creating a subscription it is more efficient if you save some subscription details in your local database, so you can check if the current user has been subscribed before
      return this.success(subscription, 'success');
    } catch (error) {
      return ('Something went wrong.');
    }
  }
  @Post('/send-notification')
  async sendNotification(@Req() req) {
    try {
      const notification = await this.deviceService.sendMessage(
        req.body.message, req.body.phone_number

      );
      //after creating a subscription it is more efficient if you save some subscription details in your local database, so you can check if the current user has been subscribed before
      return this.success(notification, 'success');
    } catch (error) {
      return ('Something went wrong.');
    }
  }
  error(arg1: string, message: string) {
    throw new Error(`${arg1}` + `${message}`);
  }
  success(arg1: any, message: any) {
    throw new Error(`${arg1}` + `${message}`);
  }

}

