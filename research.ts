import * as Types from '@line/bot-sdk/lib/types'
export const commute: Types.FlexBubble = {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://3.bp.blogspot.com/-TRUxVT2290k/WI1zUd8sq0I/AAAAAAABBX0/6USLXDjtWxAtKQLxJr-InNGM2s_N5sjugCLcB/s800/train_manin_business.png',
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
        text: '今週は出社予定ですか？',
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
          data: 'commute:yes',
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
          data: 'commute:no',
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
}

export const book: Types.FlexBubble = {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://2.bp.blogspot.com/-JAIbq3c1d4I/UPzH_qDWlUI/AAAAAAAAK04/Ys-vw2CpZbg/s400/reading_girl.png',
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
        text: '本を読む機会が増えましたか？',
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
          data: 'book:yes',
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
          data: 'book:no',
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
}

export const window: Types.FlexBubble = {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://1.bp.blogspot.com/-O0pTV6HlFm4/W0mGQji79XI/AAAAAAABNYI/-0EJnxDOackcZXAyS6QVhsoJjTw451EJgCLcBGAs/s800/window_open_boy.png',
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
        text: '窓を開けましたか？',
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
          data: 'window:yes',
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
          data: 'window:no',
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
}