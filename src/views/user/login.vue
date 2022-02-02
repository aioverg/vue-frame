<template>
  <div id="login">
    <div class="form">
      <el-form :model="form" ref="formRef" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import cryptoJs from 'crypto-js'
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{ required: true, trigger: ['change'], message: '用户名不能为空', }],
        password: [{ required: true, trigger: ['change'], message: '密码不能为空', }],
      }
    }
  },
  methods: {
    login () {
      this.$refs.formRef.validate().then(() => {
        const password = cryptoJs.MD5(this.form.username + this.form.password).toString();
        this.$store.dispatch('account/login', {...this.form, password: password}).then(res => {
          this.$router.push({ path: '/home' })
          console.log('登录成功', res)
        }).catch(error => {
          this.$router.push({ path: '/home' })
          console.log('登录失败', error)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  .form {
    width: 480px;
    height: 520px;
    border-radius: 4px;
    /* box-shadow: rgb(4, 22, 77) 0px 1px 30px 0px; */
    padding: 90px 56px 0 56px;
  }
}
</style>
