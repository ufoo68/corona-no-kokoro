import { buildReplyText } from 'line-message-builder'
import * as Line from '@line/bot-sdk'
import { research } from './research'

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
      contents: research(
        '今週は出社予定ですか？',
        'https://3.bp.blogspot.com/-TRUxVT2290k/WI1zUd8sq0I/AAAAAAABBX0/6USLXDjtWxAtKQLxJr-InNGM2s_N5sjugCLcB/s800/train_manin_business.png',
        'commute',
      )
    })
    break
  case 'book':
    client.pushMessage(process.env.USER_ID!, {
      type: 'flex',
      altText: 'research',
      contents: research(
        '本を読む機会が増えましたか？',
        'https://2.bp.blogspot.com/-JAIbq3c1d4I/UPzH_qDWlUI/AAAAAAAAK04/Ys-vw2CpZbg/s400/reading_girl.png',
        'book',
      )
    })
    break
  case 'window':
    client.pushMessage(process.env.USER_ID!, {
      type: 'flex',
      altText: 'research',
      contents: research(
        '窓を開けましたか？',
        'https://1.bp.blogspot.com/-O0pTV6HlFm4/W0mGQji79XI/AAAAAAABNYI/-0EJnxDOackcZXAyS6QVhsoJjTw451EJgCLcBGAs/s800/window_open_boy.png',
        'window',
      )
    })
    break
}