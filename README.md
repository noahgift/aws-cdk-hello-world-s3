## CDK Hello World S3

```
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // This creates the template that makes my bucket
    const bucket = new s3.Bucket(this, 'HelloWorldCDKFuntime');
  }
}
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


### Watch Screencast

* [Watch on YouTube](https://www.youtube.com/watch?v=-AWZAAjtH9o)
* [Watch on O'Reilly](https://learning.oreilly.com/videos/hello-world-iac/10262021VIDEOPAIML/10262021VIDEOPAIML-c1_s0/)
