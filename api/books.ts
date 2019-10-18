import { NowRequest, NowResponse } from '@now/node'
import { fullDB } from '../src/utils/mockData'

export default (req: NowRequest, res: NowResponse) => {
  res.json(fullDB)
}
