<template>
  <div class="wrap">
    <div class="title">
      <span>产污-治污逻辑关系图</span>
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
          key: 0,
          icon: 'water',
          color: 'orange',
          pos: '20 0',
          text: '密1#',
          group: 22,
          description: '密1#的一些描述信息'
        },
        {
          key: 1,
          icon: 'water',
          color: 'orange',
          pos: '180 0',
          text: '密2#',
          group: 22,
          description: '密2#的一些描述信息'
        },
        {
          key: 2,
          text: '生产污水处理(一开两备)',
          isGroup: true,
          group: 22
        },
        {
          key: 22,
          text: '总体变成产污单元',
          isGroup: true
        },
        {
          key: 3,
          icon: 'pump',
          color: 'green',
          pos: '-100 200',
          text: '一级提升泵1#',
          group: 2,
          description: '一级提升泵1#的一些描述信息'
        },
        {
          key: 4,
          icon: 'pump',
          color: 'grey',
          pos: '100 200',
          group: 2,
          text: '一级提升泵2#',
          description: '一级提升泵2#的一些描述信息'
        },
        {
          key: 5,
          icon: 'pump',
          color: 'grey',
          pos: '300 200',
          text: '一级提升泵3#',
          group: 2,
          description: '一级提升泵3#的一些描述信息'
        },
        {
          key: 6,
          text: '分组2(一开一备)',
          isGroup: true
        },
        {
          key: 7,
          icon: 'bomb',
          color: 'green',
          pos: '-800 500',
          group: 6,
          text: '预曝气鼓风机1#',
          description: '预曝气鼓风机1#的一些描述信息'
        },
        {
          key: 8,
          icon: 'bomb',
          color: 'grey',
          pos: '-600 500',
          group: 6,
          text: '预曝气鼓风机2#',
          description: '预曝气鼓风机2#的一些描述信息'
        },
        {
          key: 9,
          text: '分组3(一开两备)',
          isGroup: true
        },
        {
          key: 10,
          icon: 'pump',
          color: 'green',
          pos: '-400 500',
          group: 9,
          text: '二级提升泵1#',
          description: '二级提升泵1#的一些描述信息'
        },
        {
          key: 11,
          icon: 'pump',
          color: 'grey',
          pos: '-200 500',
          group: 9,
          text: '二级提升泵2#',
          description: '二级提升泵2#的一些描述信息'
        },
        {
          key: 12,
          icon: 'pump',
          color: 'grey',
          pos: '0 500',
          group: 9,
          text: '二级提升泵3#',
          description: '二级提升泵3#的一些描述信息'
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
          color: 'grey',
          pos: '600 500',
          text: '罗茨鼓风机3#',
          group: 13,
          description: '罗茨鼓风机3#的一些描述信息'
        },
        {
          key: 17,
          text: '分组5',
          isGroup: true
        },
        {
          key: 18,
          icon: 'guan',
          color: 'green',
          pos: '800 500',
          group: 17,
          text: '2#加药计量泵',
          description: '2#加药计量泵的一些描述信息'
        },
        {
          key: 19,
          text: '分组6',
          isGroup: true
        },
        {
          key: 20,
          icon: 'guan',
          color: 'green',
          pos: '1000 500',
          group: 19,
          text: '1#加药计量泵',
          description: '1#加药计量泵的一些描述信息'
        }
      ],
      linkDataArray: [
        { from: 0, to: 2 },
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
    margin-bottom: 10px;
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
      height: 80vh;
      position: relative;
      padding: 30px 0;
  }
}
</style>
