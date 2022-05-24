import { PartialType } from '@nestjs/mapped-types';
import { CreateBrowserNotificationDto } from './create-browser-notification.dto';

export class UpdateBrowserNotificationDto extends PartialType(CreateBrowserNotificationDto) {}
