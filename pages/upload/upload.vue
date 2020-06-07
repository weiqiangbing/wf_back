<template>
	<view class="upload">
		<view class="uni-form-item uni-column form_box">
			<input class="uni-input" @input="onKeyInput" minlength="2" maxlength="10" placeholder="请给你的活动定个标题(2~10个字之间)" />
		</view>
		
		<view class="select_imgs">
			<view class="item_img" v-for="(item, index) in selectImags" :key="index">
				<view @click="closeImg(index)" class="close_btn iconfont icon-shanchu"></view>
				<image :src="item.url" mode="aspectFill"></image>
				<view class="img_btn" :class="{prize_class:item.prize}" @click="addPrize(item,index)">
					{{item.prize?item.prize+' 元':'添加价格'}}
				</view>
			</view>
			
			<view class="item_img add_btn" v-if="selectImags.length<12" @click="addPhoto">
				<text class="iconfont icon-icon-test"></text>
			</view>
		</view>
		<view class="upload_btn">
			<button @click="uploadForm" type="primary">发布活动</button>
		</view>
	</view>
</template>

<script>
	export default {
		props:['selectImags'],
		data() {
			return {
				title:''
			}
		},
		methods: {
			closeImg(index){
				this.$emit('closeImg',index)
			},
			addPhoto(){
				this.$emit('addPhoto')
			},
			addPrize(item,index){
				let val = prompt('请输入该产品的价格数字')
				item.prize = val
			},
			onKeyInput(event){
				this.title = event.target.value
			},
			uploadForm(){
				if(!this.title){
					alert('请输入活动标题')
					return
				}
				let data = {
					title: this.title,
					files: this.selectImags
				}
				console.log(data)
			}
		}
	}
</script>

<style lang="scss">
.upload{
	padding: 10px;
	box-sizing: border-box;
	.uni-input{
		// border: 1px solid #ddd;
		border-radius: 3px;
		height: 34px;
		padding: 0 4px;
	}
	.select_imgs{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 4px 10px;
		.item_img{
			width: 31%;
			height: 170px;
			margin-top: 8px;
			margin-bottom: 8px;
			position: relative;
			.close_btn{
				position: absolute;
				right: -4px;
				top: -4px;
				z-index: 99;
				background-color: $uni-color-error;
				color: #fff;
				border-radius: 50%;
				padding: 1px;
			}
			image{
				width: 100%;
				height: 130px;
			}
			.img_btn{
				font-size: 14px;
				background-color: $uni-color-primary;
				padding: 7px 10px;
				margin: 2px auto;
				text-align: center;
				display: table;
				border-radius: 4px;
				color: #fff;	
			}
			.prize_class{
				background-color: $uni-color-success;
			}
		}
		.add_btn{
			background-color: #e6e4e4;
			height: 130px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
			.iconfont{
				font-size: 40px;
				color: #a7a7a7;
			}
		}
	}
}
</style>
