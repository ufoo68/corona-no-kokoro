import * as AWS from 'aws-sdk'

const dynamodb = new AWS.DynamoDB()

export async function addResult(result: string): Promise<void> {
  await dynamodb.updateItem({
    TableName: process.env.TABLE_NAME!,
    Key: { result: { S: result } },
    UpdateExpression: 'ADD hits :incr',
    ExpressionAttributeValues: { ':incr': { N: '1' } }
  }).promise()
}

export async function getResult(reserch: string): Promise<string> {
  const { Item } = await dynamodb.getItem({
    TableName: process.env.TABLE_NAME!,
    Key: {
      result: {
        S: reserch
      }
    },
  }).promise()
  return Item!.hits.N!
}