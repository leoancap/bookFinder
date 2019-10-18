import { NowRequest, NowResponse } from '@now/node'
import { createBook } from '../../src/utils/mockData'

export default (req: NowRequest, res: NowResponse) => {
  res.send(createBook(1))
}
