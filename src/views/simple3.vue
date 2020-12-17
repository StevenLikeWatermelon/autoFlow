<template>
  <div class="wrap">
    <div class="title">
      <span>示意图2</span>
    </div>
    <div class="content">
      <div class="dicribe">
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
          icon: 'water',
          portHeight: 20,
          color: 'orange',
          pos: '0 0',
          text: '生产污水',
          description: '生产污水的一些描述信息'
        },
        {
          key: 2,
          text: '生产污水处理\n一开两备',
          isGroup: true
        },
        {
          key: 3,
          icon: 'wind',
          color: 'green',
          pos: '300 -120',
          text: '一级提升泵1#',
          group: 2,
          description: '一级提升泵1#的一些描述信息'
        },
        {
          key: 4,
          icon: 'wind',
          color: 'grey',
          pos: '300 0',
          group: 2,
          text: '一级提升泵2#',
          description: '一级提升泵2#的一些描述信息'
        },
        {
          key: 5,
          icon: 'wind',
          color: 'purple',
          pos: '300 120',
          text: '全厂废气治理',
          group: 2,
          description: '全厂废气治理的一些描述信息'
        },
        {
          key: 6,
          text: '分组2\n一开一备',
          isGroup: true
        },
        {
          key: 7,
          icon: 'wind',
          color: 'green',
          pos: '600 -800',
          group: 6,
          text: '预曝气鼓风机1#',
          description: '预曝气鼓风机1#的一些描述信息'
        },
        {
          key: 8,
          icon: 'wind',
          color: 'purple',
          pos: '600 -650',
          group: 6,
          text: '全厂废气治理',
          description: '全厂废气治理的一些描述信息'
        },
        {
          key: 9,
          text: '分组3\n一开两备',
          isGroup: true
        },
        {
          key: 10,
          icon: 'wind',
          color: 'green',
          pos: '600 -450',
          group: 9,
          text: '二级提升泵1#',
          description: '二级提升泵1#的一些描述信息'
        },
        {
          key: 11,
          icon: 'wind',
          color: 'grey',
          pos: '600 -330',
          group: 9,
          text: '二级提升泵2#',
          description: '二级提升泵2#的一些描述信息'
        },
        {
          key: 12,
          icon: 'wind',
          color: 'purple',
          pos: '600 -230',
          group: 9,
          text: '全厂废气治理',
          description: '全厂废气治理的一些描述信息'
        },
        {
          key: 13,
          text: '分组4\n一开两备',
          isGroup: true
        },
        {
          key: 14,
          icon: 'wind',
          color: 'grey',
          pos: '600 0',
          group: 13,
          text: '罗茨鼓风机1#',
          description: '罗茨鼓风机1#的一些描述信息'
        },
        {
          key: 15,
          icon: 'wind',
          color: 'green',
          pos: '600 120',
          group: 13,
          text: '罗茨鼓风机2#',
          description: '罗茨鼓风机2#的一些描述信息'
        },
        {
          key: 16,
          icon: 'wind',
          color: 'purple',
          pos: '600 240',
          text: '全厂废气治理',
          group: 13,
          description: '全厂废气治理的一些描述信息'
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
    font-size: 20px;
    width: 100vw;
    margin-bottom: 30px;
    text-align: center;
}
.content {
  .flow {
      border: 1px solid black;
      width: 1220px;
      height: 830px;
      position: relative;
  }
}
</style>
