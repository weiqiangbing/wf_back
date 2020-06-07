<script>
	import VConsole from 'vconsole'
	const vConsole = new VConsole()
	export default {
		onLaunch: function() {
			console.log('App Launch')
			this.$axios('/api/users/wx_login').then((res)=>{
				console.log('wx_login', res)
			})
			// uni.getUserInfo({
			// 	success(res) {
			// 		if(res.errMsg=='getUserInfo:ok'){
			// 			uni.setStorage({
			// 			    key: 'userInfo',
			// 			    data: res.userInfo,
			// 			    success: function () {
			// 			        console.log('用户信息保存成功');
			// 			    }
			// 			});
			// 		}
			// 	},
			// 	fail() {
			// 		console.log('用户信息file')
			// 		uni.openSetting({
			// 			success(authSetting) {
			// 				console.log(authSetting);
			// 			}
			// 		})
			// 	}
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
