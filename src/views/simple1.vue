<template>
  <div class="wrap">
    <div class="title">
      <span>示意图1</span>
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
          icon: 'none',
          color: 'blue',
          pos: '150 0',
          text: '生产污水处理\n一开两备',
          portHeight: 60,
          description: '生产污水处理的一些描述信息'
        },
        {
          key: 3,
          icon: 'pump',
          color: 'green',
          pos: '300 -150',
          text: '一级提升泵1#',
          portHeight: 100,
          description: '一级提升泵1#的一些描述信息'
        },
        {
          key: 4,
          icon: 'pump',
          color: 'grey',
          pos: '300 0',
          text: '一级提升泵2#',
          description: '一级提升泵2#的一些描述信息'
        },
        {
          key: 5,
          icon: 'pump',
          color: 'grey',
          pos: '300 150',
          text: '一级提升泵3#',
          description: '一级提升泵3#的一些描述信息'
        },
        {
          key: 6,
          icon: 'none',
          color: 'blue',
          pos: '450 -700',
          text: '分组2\n一开一备',
          portHeight: 40,
          description: '分组2的一些描述信息'
        },
        {
          key: 7,
          icon: 'bomb',
          color: 'green',
          pos: '600 -800',
          text: '预曝气鼓风机1#',
          description: '预曝气鼓风机1#的一些描述信息'
        },
        {
          key: 8,
          icon: 'bomb',
          color: 'grey',
          pos: '600 -600',
          text: '预曝气鼓风机2#',
          description: '预曝气鼓风机2#的一些描述信息'
        },
        {
          key: 9,
          icon: 'none',
          color: 'blue',
          pos: '450 -350',
          text: '分组3\n一开两备',
          portHeight: 60,
          description: '分组3的一些描述信息'
        },
        {
          key: 10,
          icon: 'pump',
          color: 'green',
          pos: '600 -450',
          text: '二级提升泵1#',
          description: '二级提升泵1#的一些描述信息'
        },
        {
          key: 11,
          icon: 'pump',
          color: 'grey',
          pos: '600 -350',
          text: '二级提升泵2#',
          description: '二级提升泵2#的一些描述信息'
        },
        {
          key: 12,
          icon: 'pump',
          color: 'grey',
          pos: '600 -250',
          text: '二级提升泵3#',
          description: '二级提升泵3#的一些描述信息'
        },
        {
          key: 13,
          icon: 'none',
          color: 'blue',
          pos: '450 0',
          text: '分组4\n一开两备',
          portHeight: 60,
          description: '分组4的一些描述信息'
        },
        {
          key: 14,
          icon: 'wind',
          color: 'grey',
          pos: '600 -100',
          text: '罗茨鼓风机1#',
          description: '罗茨鼓风机1#的一些描述信息'
        },
        {
          key: 15,
          icon: 'wind',
          color: 'green',
          pos: '600 0',
          text: '罗茨鼓风机2#',
          description: '罗茨鼓风机2#的一些描述信息'
        },
        {
          key: 16,
          icon: 'wind',
          color: 'grey',
          pos: '600 100',
          text: '罗茨鼓风机3#',
          description: '罗茨鼓风机3#的一些描述信息'
        },
        {
          key: 17,
          icon: 'none',
          color: 'blue',
          pos: '450 300',
          text: '分组5',
          description: '分组5的一些描述信息'
        },
        {
          key: 18,
          icon: 'guan',
          color: 'green',
          pos: '600 300',
          text: '2#加药计量泵',
          description: '2#加药计量泵的一些描述信息'
        },
        {
          key: 19,
          icon: 'none',
          color: 'blue',
          pos: '450 500',
          text: '分组6',
          description: '分组6的一些描述信息'
        },
        {
          key: 20,
          icon: 'guan',
          color: 'green',
          pos: '600 500',
          text: '1#加药计量泵',
          description: '1#加药计量泵的一些描述信息'
        }
      ],
      linkDataArray: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 6 },
        { from: 3, to: 9 },
        { from: 3, to: 13 },
        { from: 3, to: 17 },
        { from: 3, to: 19 },
        { from: 6, to: 7 },
        { from: 6, to: 8 },
        { from: 9, to: 10 },
        { from: 9, to: 11 },
        { from: 9, to: 12 },
        { from: 13, to: 14 },
        { from: 13, to: 15 },
        { from: 13, to: 16 },
        { from: 17, to: 18 },
        { from: 19, to: 20 }
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
