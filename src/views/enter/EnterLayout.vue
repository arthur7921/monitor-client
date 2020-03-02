<template>
  <div
    style="display: flex;justify-content: center;flex-wrap: wrap;align-items: center;align-content: center;position: relative"
    :style="{height: (clientSize.clientWidth <= clientSize.clientHeight ? clientSize.clientHeight + 'px' : '100%')}">
    <van-image :src="require('assets/icon.png')"
               :alt="require('assets/icon.png')"
               width="5rem"
               height="5rem"/>
    <van-form @submit="onSubmit"
              validate-first>
      <van-field v-model="email"
                 input-align="right"
                 name="email"
                 :rules="[{ required: true, message: '请填写email' }]"
                 label="邮箱"/>
      <van-field v-model="password"
                 input-align="right"
                 name="password"
                 type="password"
                 :rules="[{ required: true, message: '请填写密码' }]"
                 label="密码"/>
      <van-row type="flex"
               style="margin: 0.5rem;"
               justify="center">
        <van-col span="8">
          <van-button round
                      type="info"
                      block
                      native-type="submit">
            登录
          </van-button>
        </van-col>
        <van-col span="8">
          <van-button round
                      block
                      to="/logup"
                      type="info">
            注册
          </van-button>
        </van-col>
      </van-row>
    </van-form>
    <wave></wave>
  </div>
</template>
<script>
  import { Button, Field, CellGroup, Form, Col, Row, Toast, Image } from 'vant'
  import Wave from '../../components/Wave'
  import { mapGetters } from 'vuex'
  // import getValues from 'utils/jsonTool'

  export default {
    name: 'login',
    components: {
      Wave,
      [Button.name]: Button,
      [Field.name]: Field,
      [CellGroup.name]: CellGroup,
      [Form.name]: Form,
      [Col.name]: Col,
      [Row.name]: Row,
      [Toast.name]: Toast,
      [Image.name]: Image
    },
    data () {
      return {
        email: null,
        password: null
      }
    },
    computed: {
      ...mapGetters({
        clientSize: 'getClientSize'
      })
      // bodyHeight () {
      //   if (this.clientHeight >= this.clientWidth) {
      //     return global.clientHeight + 'px'
      //   } else {
      //     return 100 + '%'
      //   }
      // }
    },
    beforeRouteEnter (to, from, next) {
      if (store.getters.getToken) {
        next('/')
      } else {
        next()
      }
    },
    methods: {
      onSubmit (values) {
        request.page('login', { ...values }).then((data) => {
          this.$store.commit('setToken', data.token)
          this.$store.commit('setUser', data.user)
          this.$router.push('/')
        }).catch((error) => {
          Toast.fail(require('utils/jsonTool').getValues(error.response.data).toString())
        })
      }
    }
  }
</script>
