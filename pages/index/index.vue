<template>
	<view class="index_page">
		<view v-if="!showUpload" class="index_content">
			<view class="big_btn btn_add" @click="goToUpload">
				<text class="iconfont icon-chuangjian"></text>
				<text class="word">发布活动</text>
			</view>
			<view class="big_btn btn_list">
				<text class="iconfont icon-liebiao"></text>
				<text class="word">我的列表</text>
			</view>
		</view>
		<upload 
		v-else 
		:selectImags="selectImags"
		@closeImg="closeImg"
		@addPhoto="addPhoto"
		></upload>
	</view>
</template>

<script>
	import upload from '../upload/upload.vue'
	export default {
		data() {
			return {
				showUpload: false,
				selectImags:[]
			}
		},
		onLoad() {

		},
		components:{
			upload
		},
		methods: {
			goToUpload(){
				let _this = this
				uni.chooseImage({
					count: 12, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择、摄像头
					success: function(res) {
						console.log(res.tempFilePaths);
						let imgs = res.tempFilePaths
						if(imgs.length>0){
							imgs.forEach(re=>{
								_this.selectImags.push({url:re,prize:''})
							})
						}
						_this.showUpload = true
					},
				})
			},
			closeImg(index){
				this.selectImags.splice(index,1)
			},
			addPhoto(){
				this.goToUpload()
			}
		}
	}
</script>

<style lang="scss">
	@import url("https://at.alicdn.com/t/font_1853043_egdokrcwugq.css");
	.index_page {
		.index_content{
			padding-top: 100rpx;
		}
		.big_btn{
			width: 400rpx;
			height: 200rpx;
			border: 1px solid #ddd;
			margin: 50rpx auto;
			border-radius: 6px;
			font-size: 56upx;
			color: #fff;
			line-height: 200rpx;
			text-align: center;
			.iconfont{
				font-size: 68upx;
				margin: 10upx;
				padding-top: 18upx;
				position: relative;
				top: 8upx;
			}
		}
		.btn_add{
			background-color: $uni-color-success;
		}
		.btn_list{
			background-color: $uni-color-primary;
		}
	}

</style>
