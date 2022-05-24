import { Injectable } from '@nestjs/common';
import { CreateBrowserNotificationDto } from './dto/create-browser-notification.dto';
import { UpdateBrowserNotificationDto } from './dto/update-browser-notification.dto';
import webpush, { SendResult } from 'web-push';
import { ok } from 'assert';

@Injectable()
export class BrowserNotificationService {
  async createNotification(createBrowserNotificationDto: CreateBrowserNotificationDto) {
    try {
      const notification = { title: 'this is the notification payload' };
      //after  browser(also called service worker) confirms notifications and allows them, these are the data frontend sends us, so we can link the browserNotification to the user
      //it is recomended to save them in your local db and also hash them before saving so you keep data private
      //these credentials do not change even if the browser cancels notifications and then re-subscribes
      const subscription = { endpoint: 'this is the endpoint', p256dh: 'this is the p256dh', auth: 'this is the auth', expireDate: 'this is the expireDate not requiered' };
      const notifications: Promise<SendResult>[] = [];
      notifications.push(webpush.sendNotification(subscription, JSON.stringify(notification)));
      //be carefull you have to you Promise.all to wait for all notifications to be sent
      await Promise.all(notifications);
      return ok;
    } catch (e) {
      return e;
    }
  }

  findAll() {
    return `This action returns all browserNotification`;
  }

  findOne(id: number) {
    return `This action returns a #${id} browserNotification`;
  }

  update(id: number, updateBrowserNotificationDto: UpdateBrowserNotificationDto) {
    return `This action updates a #${id} browserNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} browserNotification`;
  }
}
