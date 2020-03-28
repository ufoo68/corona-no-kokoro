import * as Types from '@line/bot-sdk/lib/types'
export const commute: Types.FlexBubble = {
  type: "bubble",
  hero: {
    type: "image",
    url: "https://3.bp.blogspot.com/-TRUxVT2290k/WI1zUd8sq0I/AAAAAAABBX0/6USLXDjtWxAtKQLxJr-InNGM2s_N5sjugCLcB/s800/train_manin_business.png",
    size: "full",
    aspectRatio: "20:13",
    aspectMode: "cover",
  },
  body: {
    type: "box",
    layout: "vertical",
    contents: [
      {
        type: "text",
        text: "今週は出社予定ですか？",
        weight: "bold",
        size: "xl"
      }
    ]
  },
  footer: {
    type: "box",
    layout: "vertical",
    spacing: "sm",
    contents: [
      {
        type: "button",
        style: "primary",
        height: "sm",
        action: {
          type: "message",
          label: "はい",
          text: "はい"
        }
      },
      {
        type: "button",
        style: "secondary",
        height: "sm",
        action: {
          type: "message",
          label: "いいえ",
          text: "いいえ"
        }
      },
      {
        type: "spacer",
        size: "sm"
      }
    ],
    flex: 0
  }
}