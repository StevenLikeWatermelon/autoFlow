<template>
  <div class="wrap">
    <div class="title">
      <span>产污-治污逻辑关系图(包含全产设备)</span>
    </div>
    <div class="content">
      <div class="discribe">
        <XlFlowDis />
      </div>
      <div class="flow">
        <xl-flow :node-data-array="nodeDataArray" :link-data-array="linkDataArray" />
      </div>
    </div>
  </div>
</template>

<script>
import XlFlow from '../flow/index'
import XlFlowDis from '../flow/discribe'
export default {
  components: {
    XlFlow,
    XlFlowDis
  },
  data () {
    return {
      nodeDataArray: [
        {
          key: 1,
          icon: 'gas',
          color: 'orange',
          pos: '103 0',
          text: '生产废气',
          description: '生产废气的一些描述信息'
        },
        {
          key: 2,
          text: '生产废气处理(一开两备)',
          isGroup: true
        },
        {
          key: 3,
          icon: 'wind',
          color: 'green',
          pos: '-100 200',
          text: '车间鼓风机1#',
          group: 2,
          description: '车间鼓风机1#的一些描述信息'
        },
        {
          key: 4,
          icon: 'wind',
          color: 'grey',
          pos: '100 200',
          group: 2,
          text: '车间鼓风机2#',
          description: '车间鼓风机2#的一些描述信息'
        },
        {
          key: 5,
          icon: 'wind',
          color: 'purple',
          pos: '300 200',
          text: '全厂通用鼓风机',
          group: 2,
          description: '全厂通用鼓风机的一些描述信息'
        },
        {
          key: 6,
          text: '分组2(一开一备)',
          isGroup: true
        },
        {
          key: 7,
          icon: 'wind',
          color: 'green',
          pos: '-800 500',
          group: 6,
          text: '预曝气鼓风机1#',
          description: '预曝气鼓风机1#的一些描述信息'
        },
        {
          key: 8,
          icon: 'wind',
          color: 'purple',
          pos: '-600 500',
          group: 6,
          text: '全厂通用鼓风机',
          description: '全厂通用鼓风机的一些描述信息'
        },
        {
          key: 9,
          text: '分组3(一开两备)',
          isGroup: true
        },
        {
          key: 10,
          icon: 'wind',
          color: 'green',
          pos: '-400 500',
          group: 9,
          text: '二级鼓风机1#',
          description: '二级鼓风机1#的一些描述信息'
        },
        {
          key: 11,
          icon: 'wind',
          color: 'grey',
          pos: '-200 500',
          group: 9,
          text: '二级鼓风机2#',
          description: '二级鼓风机2#的一些描述信息'
        },
        {
          key: 12,
          icon: 'wind',
          color: 'grey',
          pos: '0 500',
          group: 9,
          text: '全厂通用鼓风机',
          description: '全厂通用鼓风机的一些描述信息'
        },
        {
          key: 13,
          text: '分组4(一开两备)',
          isGroup: true
        },
        {
          key: 14,
          icon: 'wind',
          color: 'grey',
          pos: '200 500',
          group: 13,
          text: '罗茨鼓风机1#',
          description: '罗茨鼓风机1#的一些描述信息'
        },
        {
          key: 15,
          icon: 'wind',
          color: 'green',
          pos: '400 500',
          group: 13,
          text: '罗茨鼓风机2#',
          description: '罗茨鼓风机2#的一些描述信息'
        },
        {
          key: 16,
          icon: 'wind',
          color: 'purple',
          pos: '600 500',
          text: '全厂通用鼓风机',
          group: 13,
          description: '全厂通用鼓风机的一些描述信息'
        },
        {
          key: 17,
          text: '分组5',
          isGroup: true
        },
        {
          key: 18,
          icon: 'wind',
          color: 'purple',
          pos: '800 500',
          group: 17,
          text: '全厂通用鼓风机',
          description: '全厂通用鼓风机的一些描述信息'
        },
        {
          key: 19,
          text: '分组6',
          isGroup: true
        },
        {
          key: 20,
          icon: 'wind',
          color: 'purple',
          pos: '1000 500',
          group: 19,
          text: '全厂通用鼓风机',
          description: '全厂通用鼓风机的一些描述信息'
        }
      ],
      linkDataArray: [
        { from: 1, to: 2 },
        { from: 2, to: 6 },
        { from: 2, to: 9 },
        { from: 2, to: 13 },
        { from: 2, to: 17 },
        { from: 2, to: 19 }
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 30px;
    width: 100vw;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
    color: #29303F;
}
.content {
  position: relative;
  .discribe {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 9999;
  }
  .flow {
      background-color: #E4EDEF;
      width: 98vw;
      margin: 0 auto;
      height: 60vh;
      position: relative;
      padding: 30px 0;
  }
}
</style>
