import * as types from './mutation-types'
export default {
  [types.SENT_STATE_CHANGE](state, isSend) {
    state.isSend = isSend
  }
}

