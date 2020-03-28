import * as cdk from '@aws-cdk/core'
import { LambdaApi } from 'cdk-lambda-api'
import * as dynamodb from '@aws-cdk/aws-dynamodb'

export class CoronaNoKokoroStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const commuteTable = new dynamodb.Table(this, 'Table', {
      partitionKey: { name: 'commute', type: dynamodb.AttributeType.STRING }
    })

    const lambdaApi = new LambdaApi(this, 'LineBot', {
      lambdaPath: 'bot',
      environment: {
        ACCESS_TOKEN: process.env.ACCESS_TOKEN!,
        CHANNEL_SECRET: process.env.CHANNEL_SECRET!,
        COMMUTE_TABLE_NAME: commuteTable.tableName,
      }
    })

    commuteTable.grantFullAccess(lambdaApi.handler)
  }
}
