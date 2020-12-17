<template>
  <div class="flow-dis">
      <div class="item" v-for="item in discribeColor" :key="item.color">
          <div class="color" :style="{'background-color': item.color}">
          </div>
          <div class="text">
              <span>{{item.text}}</span>
          </div>
      </div>
  </div>
</template>

<script>
import { discribeColor } from './config'
export default {
  data () {
    return {
      discribeColor
    }
  }
}
</script>

<style lang="scss" scoped>
.flow-dis {
    .item {
        display: flex;
        align-items: center;
        margin-right: 25px;
        padding-bottom: 10px;
        .text {
            color: #333333;
            font-size: 14px;
            padding-left: 16px;
        }
        .color {
            width: 40px;
            height: 10px;
            border-radius: 20px;
        }
    }
}
</style>
