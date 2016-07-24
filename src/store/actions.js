import * as types from './mutation-types'
export const changeSentState = ({dispatch, state}, isSend) => {
  dispatch(types.SENT_STATE_CHANGE, isSend)
}
