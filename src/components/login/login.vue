<template>
	<div class="login">
		<div class="login-container login-box" v-show="loginShow">
			<div class="title">
				<i class="iconfont icon-gerenzhongxin"></i>
				<span>账号登录</span>
			</div>
			<div class="login-prompt">
				<i class="iconfont icon-maozhao"></i>
				<span>温馨提示：公共场合请勿使用记住密码哦~</span>
			</div>
			<form action="">
				<div class="login-input login-name">
					<label for="loginName">账号</label>
					<input type="text" id="loginName" placeholder="请输入用户名或手机号">
				</div>
				<div class="login-input login-password">
					<label for="loginPassword">密码</label>
					<input type="text" id="loginPassword" placeholder="请输入密码">
				</div>
				<div class="login-input">
					<span class="remember" @click="rememberPass">
						<i class="iconfont icon-10" v-show="remember" ></i>
					</span>
					<i class="remember-txt">记住密码</i>
				</div>
				<div class="login-input">
					<span class="login-btn">立即登录</span>
				</div>
				<div class="login-input text">
					<span>找回密码</span>
					<i>|</i>
					<span @click="toRegister">立即注册</span>
				</div>
			</form>
		</div>
		<div class="login-container register-box" v-show="registerShow">
			<i class="iconfont icon-fanhuidaohanglan icon-back" @click="toLogin"></i>
			<div class="title">

				<i class="iconfont icon-gerenzhongxin"></i>
				<span>账号注册</span>
			</div>
			<div class="login-prompt old-prompt" v-show='oldPromptShow'>
				<i class="iconfont icon-maozhao"></i>
				<span>温馨提示：手机号也可以直接登录哦~</span>
			</div>
			<div class="login-prompt new-prompt" v-show='newPromptShow'>
				<i class="iconfont icon-tishi1"></i>
				<span>{{prompt}}</span>
			</div>
			<form action="">
				<div class="login-input login-name">
					<label for="loginName">用户名</label>
					<input type="text" id="loginName" placeholder="请输入6-30位字母、数字或'_'" v-model='username' @blur='_username'>
				</div>
				<div class="login-input login-name">
					<label for="loginTel">手机号</label>
					<input type="text" id="loginTel" placeholder="请输入手机号" v-model='telPhone' @blur='_telPhone'>
				</div>
				<div class="login-input login-password">
					<label for="loginPassword">密码</label>
					<input type="password" name="password" id="loginPassword" placeholder="请输入6-18位密码，字母/数字/符号" v-model="passWord" @blur="_passWord">
				</div>
				<div class="login-input login-password">
					<input type="text"  placeholder="请输入短信验证码" class="test" v-model='testCode' @blur="_testCode">
					<span class="test-btn" @click="sendcode">{{codes}}</span>
					<span class="zhezhao" ref='zhezhao'></span>
				</div>
				
				<div class="login-input" @click='register'>
					<span class="login-btn">立即注册</span>
				</div>
				<div class="login-input text">
					<span>找回密码</span>
					<i>|</i>
					<span @click="toLogin">立即登录</span>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import {ERR_OK} from 'api/config'
	import {getData} from 'api/getData'

	export default{
		data(){
			return{
				loginShow:true,
				registerShow:false,
				remember:false,
				username:'',
				telPhone:'',
				passWord:'',
				testCode:'',
				prompt:'',
				oldPromptShow:true,
				newPromptShow:false,
				codes:'获取验证码',
				usernames:false,
				telPhones:false,
				passWords:false,
				testCodes:false
			}
		},
		methods:{
			toRegister(){
				this.loginShow = false
				this.registerShow = true
			},
			toLogin(){
				this.loginShow = true
				this.registerShow = false
			},
			rememberPass(){
				this.remember = !this.remember
			},
			//判断用户名
			_username(){
				let pattern = /\w{5,30}/
				if(this.username === '' || !pattern.test(this.username)){
					let txt = "请输入6-30位字母、数字或'_'"
					this.changeFalse(txt)
				}else{
					this.changeTrue()
					this.usernames = true
				}
			},
			//判断手机号
			_telPhone(){
				let pattern = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
				if(this.telPhone === '' || !pattern.test(this.telPhone)){
					let txt = "请输入有效的手机号码"
					this.changeFalse(txt)
				}else{
					this.changeTrue()
					this.telPhones = true
				}
			},
			//判断密码
			_passWord(){
				let pattern = /\S{6,18}/
				if(this.passWord === '' || !pattern.test(this.passWord)){
					let txt = "请输入6-18位字母、数字或符号"
					this.changeFalse(txt)
				}else{
					this.changeTrue()
					this.passWords = true
				}
			},
			//判断验证码
			_testCode(){
				let pattern = /^\d{4}$/
				if(this.testCode === '' || !pattern.test(this.testCode)){
					let txt = "请输入正确的验证码"
					this.changeFalse(txt)
				}else{
					this.changeTrue()
					this.testCodes = true
				}
			},
			changeFalse(txt){
				this.oldPromptShow = false
				this.newPromptShow = true
				this.prompt = txt
			},
			changeTrue(){
				this.oldPromptShow = true
				this.newPromptShow = false
			},
			//发送验证码
			sendcode(){
				let pattern = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
				if(this.telPhone === '' || !pattern.test(this.telPhone)){
					let txt = '请输入有效的手机号码'
					this.changeFalse(txt)
				}else{
					this.changeTrue()
					let code = 'api/user/sendcode'+'?tel='+this.telPhone
					getData(code).then((res)=>{
						if(res.code === ERR_OK){
							let leftTime = 60
							let timer = setInterval(()=>{
								this.codes = leftTime+'秒后可重发'
								leftTime--
								this.$refs.zhezhao.style.display = 'block'
								if(leftTime === 0){
									clearInterval(timer)
									this.codes = '重新获取'
									this.$refs.zhezhao.style.display = 'none'
								}
							},1000)
						}else{
							this.codes = '重新获取'
						}
					},(err)=>{
						console.log(err)
					})
				}
				
			},
			//注册
			register(){
				if(this.usernames && this.telPhones && this.passWords && this.testCodes){
					let url = "http://miaoyingshi.com/api/user/regist"
					let fd = new FormData()
					fd.append("username",this.username)
					fd.append("password",this.password)
					fd.append("tel",this.telPhone)
					fd.append("code",this.testCode)

					axios.post(url,fd).then((res)=>{
						console.log(res)
					})
				}else{
					if(!this.usernames){
						this._username()
					}else if(!this.telPhones){
						this._telPhone()
					}else if(!this.passWords){
						this._passWord()
					}else if(!this.testCodes){
						this._testCode()
					}
				}
				

			}

		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~assets/css/stylus/variable"
	.login
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background: url(../../assets/image/bgimg.jpg) center center no-repeat
		background-attachment:fixed
		&-container
			padding: 30px 30px
			width: 357px
			margin: 150px auto
			background-color: #fafafa
			color: $color-dialog-text
			overflow: hidden
			position: relative
			.icon-back
				position: absolute
				font-size: $font-size-large
				left: 25px
				top: 32px
				cursor: pointer 
			.title 
				font-size: $font-size-large
				color: #222 
				text-align: center
				margin-bottom: 25px
				i 
					font-size: $font-size-large-x
					color: $color-theme
			.login-prompt
				width: 100%
				border: 1px solid #FFCEA5
				background-color: #FFFBED
				padding: 8px 4px
				font-size: $font-size-small
			.new-prompt
				border: 1px solid #f2423f
				background-color: #ffebeb
				color: #f5605d
			.login-input
				margin-top: 20px
				.remember
					display: inline-block
					width: 12px
					height: 12px
					border: 1px solid #ccc
					position: relative
					.icon-10
						position: absolute
						top: -2px
						left: -2px
						color: $color-theme
					&-txt
						font-size: $font-size-small
			.login-name,.login-password
				display: flex
				flex-direction: row 
				justify-content: space-between
				align-items: center
				.test
					width: 170px
					height: 25px
					border-radius: 5px
					border: 1px solid #ccc
					padding-left: 10px
					outline: none
					&:hover
						border-color: $color-theme
				.zhezhao
					position: absolute
					background-color: red
					width: 100px
					height: 27px
					right: 30px
					display: none
					opacity: 0
				.test-btn
					width: 100px
					height: 27px
					border-radius: 5px
					background-color: $color-theme-d
					color: #fafafa
					font-size: $font-size-small
					text-align: center
					line-height: 27px
					&:hover
						background-color: $color-theme
						cursor: pointer
				#loginName,#loginPassword,#loginTel
					width: 230px
					height: 25px
					border-radius: 5px
					border: 1px solid #ccc
					padding-left: 10px
					outline: none
					&:hover
						border-color: $color-theme
			.login-btn
				display: block
				width: 100%
				padding: 10px 0
				background-color: $color-theme-d
				border-radius: 5px
				text-align: center
				color: #fafafa
				&:hover
					background-color: $color-theme
					cursor: pointer
			.text
				font-size: $font-size-small
				float: right
				span
					color: $color-theme-d
					cursor: pointer 
					&:hover
						color: $color-theme
				i
					color: $color-text
</style>