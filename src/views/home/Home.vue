<template>
  <div>
    <span>home</span>
    <van-button icon="star-o" type="primary">按钮</van-button>
  </div>
</template>
<script>
  import { Button } from 'vant'

  export default {
    name: 'home',
    components: { [Button.name]: Button },
    mounted() {
      console.log(process.env)
    }
  }
</script>
