import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';

export class StarterAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new dynamodb.Table(this, 'StarterAppTable', {
      partitionKey: { 
        name: 'userId', 
        type: dynamodb.AttributeType.STRING 
      },
      sortKey: {
        name: 'noteId',
        type: dynamodb.AttributeType.STRING
      },
    });
  }
}
