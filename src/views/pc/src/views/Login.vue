<template>
  <div class="login">
    <div class="login-head">永远滴神</div>
     <el-form :model="user" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm login-form">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="region">
        <el-input v-model="user.region" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked">我已经同意协议</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="Telverify" :loading="loginLoading">登 录</el-button>
      </el-form-item>
      <el-form-item>
        <img :src="src" :key="key" @click="GetCode">
        <el-button type="primary" class="login-btn" @click="SubmitLogin" :loading="loginLoading">登 录</el-button>
      </el-form-item>
     </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginLoading: false,
      user: {
        name: '',
        mobile: '',
        region: ''
      },
      src: '',
      key: '',
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: '请输入电话号码', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      checked: false
    }
  },
  created () {
    this.GetCode()
  },
  methods: {
    Telverify () {
      
    },
    GetCode () {
      this.$store.dispatch('LoginInfo').then(res => {
        this.src = 'data:image/png;base64,' + res.image
        this.key = res.key
      })
    },
    SubmitLogin () {
      this.$store.dispatch('LoginList', this.user).then(res => {
        sessionStorage.setItem('token', res.token)
      }).catch(err => {
        console.log(err)
        this.GetCode()
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('../assets/loginbackground.jpg') no-repeat;
  background-size: cover;
  .login-head {
    margin-bottom: 30px;
  }
  .login-form {
    background-color: #fff;
    padding: 50px 50px 50px 0px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
