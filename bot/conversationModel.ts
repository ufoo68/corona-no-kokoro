
interface  ResearshModel {
  type: string
  answer: string
}

export const conversation = (message: string): ResearshModel => {
  const splitedMessage = message.split(':')
  if (splitedMessage.length === 2) {
    return {
      type: splitedMessage[0],
      answer: splitedMessage[1],
    }
  }
  return {
    type: 'increct',
    answer: '',
  }
}