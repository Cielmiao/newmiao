//获取到types中的值
import * as types from './mutation-types'
const mutations = {
	[types.SET_COMMON_LIST](state, list) {
    state.commonList = List
  	},
  	[types.SET_COMMON_TAB](state, tab) {
    state.commonTab = tab
  	}
}

export default mutations