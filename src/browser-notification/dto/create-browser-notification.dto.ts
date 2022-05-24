import { ApiProperty } from '@nestjs/swagger';

export class CreateBrowserNotificationDto {
    @ApiProperty()
    endpoint: string;

    @ApiProperty()
    p256dh: string;

    @ApiProperty()
    auth: string;

    @ApiProperty()
    expireDate: Date;
}


