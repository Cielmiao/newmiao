//获取到types中的值
import * as types from './mutation-types'
const mutations = {
	[types.SET_COMMON_LIST](state, list) {
    state.commonList = list
  	},
  	[types.SET_COMMON_TAB](state, tab) {
    state.commonTab = tab
  	},
  	[types.SET_CURRENT_ONE](state, index) {
    state.currentOne = index
  	},
  	[types.SET_CURRENT_TWO](state, index) {
    state.currentTwo = index
  	},
  	[types.SET_CURRENT_THREE](state, index) {
    state.currentThree = index
  	},
    [types.SET_MAX_PAGE](state, page) {
    state.maxPage = page
    },
    [types.SET_CURRENT_PAGE](state, page) {
    state.currentPage = page
    },
    [types.SET_NEW_RESULT](state, result) {
    state.newResult = result
    },
    [types.SET_ALL_RESULT](state, result) {
    state.allResult = result
    },
    [types.SET_SEARCH_VAL](state, val) {
    state.searchVal = val
    }
}

export default mutations