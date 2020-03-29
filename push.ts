import { buildReplyText } from 'line-message-builder'
import * as Line from '@line/bot-sdk'
import { commute, book, window } from './research'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
  channelAccessToken,
  channelSecret,
}
const client = new Line.Client(config)

switch (process.argv[2]) {
  case 'commute':
    client.pushMessage(process.env.USER_ID!, {
      type: 'flex',
      altText: 'research',
      contents: commute
    })
    break
  case 'book':
    client.pushMessage(process.env.USER_ID!, {
      type: 'flex',
      altText: 'research',
      contents: book
    })
    break
  case 'window':
    client.pushMessage(process.env.USER_ID!, {
      type: 'flex',
      altText: 'research',
      contents: window
    })
    break
}