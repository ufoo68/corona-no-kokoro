import * as Types from '@line/bot-sdk/lib/types'

export const research = (title: string, img: string, data: string): Types.FlexBubble => ({
  type: 'bubble',
  hero: {
    type: 'image',
    url: img,
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: title,
        weight: 'bold',
        size: 'xl'
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'primary',
        height: 'sm',
        action: {
          type: 'postback',
          label: 'はい',
          data: `${data}:yes`,
          text: 'はい',
        }
      },
      {
        type: 'button',
        style: 'secondary',
        height: 'sm',
        action: {
          type: 'postback',
          label: 'いいえ',
          data: `${data}:no`,
          text: 'いいえ',
        }
      },
      {
        type: 'spacer',
        size: 'sm'
      }
    ],
    flex: 0
  }
})