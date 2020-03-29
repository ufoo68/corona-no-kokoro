import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { result } from './flex'
import { buildReplyText } from 'line-message-builder'
import { ResultType } from './researchModel'
import { addResult, getResult } from './dbHandler'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
    channelAccessToken,
    channelSecret,
}
const client = new Line.Client(config)

async function eventHandler(event: Types.PostbackEvent): Promise<any> {
    if (event.type !== 'postback') {
        return null
    }
    switch (event.postback.data) {
        case ResultType.bookYes:
        case ResultType.bookNo:
            await addResult(event.postback.data)
            return client.replyMessage(event.replyToken, {
                type: 'flex',
                altText: 'research',
                contents: result('本を読むようになった', await getResult(ResultType.bookYes), await getResult(ResultType.bookNo))
            })
        case ResultType.commuteYes:
        case ResultType.commuteNo:
            await addResult(event.postback.data)
            return client.replyMessage(event.replyToken, {
                type: 'flex',
                altText: 'research',
                contents: result('出社する予定である', await getResult(ResultType.commuteYes), await getResult(ResultType.commuteNo))
            })
        case ResultType.windowYes:
        case ResultType.windowNo:
            await addResult(event.postback.data)
            return client.replyMessage(event.replyToken, [
                buildReplyText('窓をあけることは新型コロナウィルスの感染を防ぐための簡単で有効な方法です。まだ肌寒い日もありますが、こまめに窓をあけましょう。'),
                {
                    type: 'flex',
                    altText: 'research',
                    contents: result('窓を開けた', await getResult(ResultType.windowYes), await getResult(ResultType.windowNo))
                }
            ])
        default:
            return client.replyMessage(event.replyToken, buildReplyText('無効な回答です。'))
    }
}

export const handler: Lambda.APIGatewayProxyHandler = async (proxyEevent: Lambda.APIGatewayEvent, _context) => {
    console.log(JSON.stringify(proxyEevent))

    const signature = proxyEevent.headers['X-Line-Signature']
    if (!Line.validateSignature(proxyEevent.body!, channelSecret, signature)) {
        throw new Line.SignatureValidationFailed('signature validation failed', signature)
    }

    const body: Line.WebhookRequestBody = JSON.parse(proxyEevent.body!)
    await Promise
        .all(body.events.map(async event => eventHandler(event as Types.PostbackEvent)))
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