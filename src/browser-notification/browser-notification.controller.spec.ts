import { Test, TestingModule } from '@nestjs/testing';
import { BrowserNotificationController } from './browser-notification.controller';
import { BrowserNotificationService } from './browser-notification.service';

describe('BrowserNotificationController', () => {
  let controller: BrowserNotificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrowserNotificationController],
      providers: [BrowserNotificationService],
    }).compile();

    controller = module.get<BrowserNotificationController>(BrowserNotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
