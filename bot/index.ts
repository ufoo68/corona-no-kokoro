import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { commute } from './flex'
import { buildReplyText } from 'line-message-builder'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
    channelAccessToken,
    channelSecret,
}
const client = new Line.Client(config)
const contents: Types.FlexBubble[] = [commute]

async function eventHandler(event: Types.MessageEvent): Promise<any> {
    if (event.type !== 'message' || event.message.type !== 'text' || !event.source.userId) {
        return null
    }
    if(event.message.text === '質問') {
        return client.replyMessage(event.replyToken, { type: 'flex', altText: 'research', contents: contents[ Math.floor( Math.random() * contents.length )]})
    }
    return client.replyMessage(event.replyToken, buildReplyText('回答ありがとうございます。'))
}

export const handler: Lambda.APIGatewayProxyHandler = async (proxyEevent: Lambda.APIGatewayEvent, _context) => {
    console.log(JSON.stringify(proxyEevent))

    const signature = proxyEevent.headers['X-Line-Signature']
    if (!Line.validateSignature(proxyEevent.body!, channelSecret, signature)) {
        throw new Line.SignatureValidationFailed('signature validation failed', signature)
    }

    const body: Line.WebhookRequestBody = JSON.parse(proxyEevent.body!)
    await Promise
        .all(body.events.map(async event => eventHandler(event as Types.MessageEvent)))
        .catch(err => {
            console.error(err.Message)
            return {
                statusCode: 500,
                body: 'Error'
            }
        })
    return {
        statusCode: 200,
        body: 'OK'
    }
}