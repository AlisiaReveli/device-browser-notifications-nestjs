import { Injectable } from '@nestjs/common';

import {
  PublishCommand,
  SNSClient,
  SubscribeCommand,
} from '@aws-sdk/client-sns';

@Injectable()
export class DeviceService {
  private instance: SNSClient = null;
  private getInstance(): SNSClient {
    if (!this.instance) {
      this.instance = new SNSClient({
        credentials: {
          accessKeyId: process.env.SNS_ACCESS_KEY_ID,
          secretAccessKey: process.env.SNS_SECRET_ACCESS_KEY,
        },
        region: process.env.FILE_REGION,
      });
    }
    return this.instance;
  }

  //protocol can be http,https, sms, email,email json, lamda function, code depending on the focused destination
  //endpoint: Subscribes an endpoint to an Amazon SNS topic
  confirmSubscription(endpoint: string) {
    const subscriptionParams = {
      Protocol: 'sms',
      TopicArn: process.env.TOPIC_ARN_ID,
      Endpoint: endpoint,
    };

    const subscription = this.getInstance().send(
      new SubscribeCommand(subscriptionParams),
    );
    return subscription;
  }

  sendMessage(message: string, phone_number: string) {
    //target arn can be replaced by topic arn, in this case every user subscribed on this sns topic will get the notification
    //target arn can be a phone number or email, or code(for android and apple protocols)
    const params = {
      Message: message,
      TargetArn: phone_number,
    };
    return this.getInstance().send(new PublishCommand(params));
  }


}
