import {
	BANNERINPUT,
	HELLOSHOW
} from './types'
import getters from './getters'

const state = {
	banner: 'Welcome to Your Vue.js App',
	visible: true
};

// 用于具体改变数据
const mutations = {
	BANNERINPUT(state,banner) {
		state.banner = banner;
	},
	HELLOSHOW(state) {
		state.visible = !state.visible;
	}
	
};

export default {
	state,
	mutations,
	getters
}