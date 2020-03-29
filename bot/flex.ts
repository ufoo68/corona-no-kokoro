import * as Types from '@line/bot-sdk/lib/types'

export const result = (title: string, yes: string, no: string): Types.FlexBubble => ({
  type: 'bubble',
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: title,
        size: 'lg'
      },
      {
        type: 'text',
        text: `はい：${yes}人`
      },
      {
        type: 'text',
        text: `いいえ：${no}人`
      }
    ]
  }
})