import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrowserNotificationService } from './browser-notification.service';
import { CreateBrowserNotificationDto } from './dto/create-browser-notification.dto';
import { UpdateBrowserNotificationDto } from './dto/update-browser-notification.dto';

@Controller('browser-notification')
export class BrowserNotificationController {
  constructor(private readonly browserNotificationService: BrowserNotificationService) { }

  @Get()
  create(@Body() createBrowserNotificationDto: CreateBrowserNotificationDto) {
    return this.browserNotificationService.createNotification(createBrowserNotificationDto);
  }

  @Get()
  findAll() {
    return this.browserNotificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.browserNotificationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrowserNotificationDto: UpdateBrowserNotificationDto) {
    return this.browserNotificationService.update(+id, updateBrowserNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.browserNotificationService.remove(+id);
  }
}
