import * as types from './types'

// action 存放的是方法
export default {
	// 带参数的
	bannerInput: ({
		commit
	},banner) => {
		commit(types.BANNERINPUT,banner);
	},
	helloShow: ({
		commit
	}) => {
		commit(types.HELLOSHOW);
	}
}