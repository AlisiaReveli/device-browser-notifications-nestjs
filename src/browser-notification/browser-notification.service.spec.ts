import { Test, TestingModule } from '@nestjs/testing';
import { BrowserNotificationService } from './browser-notification.service';

describe('BrowserNotificationService', () => {
  let service: BrowserNotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrowserNotificationService],
    }).compile();

    service = module.get<BrowserNotificationService>(BrowserNotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
