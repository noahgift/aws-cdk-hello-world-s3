import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This creates the template that makes my bucket
    const bucket = new s3.Bucket(this, 'HelloWorldCDKFuntime');
  }
}
