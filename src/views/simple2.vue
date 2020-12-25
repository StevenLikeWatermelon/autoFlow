<template>
  <div class="wrap">
    <div class="title">
      <span>产污-治污逻辑关系图</span>
    </div>
    <div class="content">
      <!-- <div class="discribe">
        <XlFlowDis />
      </div> -->
      <div class="flow">
        <xl-flow :node-data-array="nodeDataArray" :link-data-array="linkDataArray" />
      </div>
    </div>
  </div>
</template>

<script>
import XlFlow from '../flow/index'
// import XlFlowDis from '../flow/discribe'
export default {
  components: {
    XlFlow
    // XlFlowDis
  },
  data () {
    return {
      nodeDataArray: [],
      linkDataArray: [],
      noRepeatProductLinkArr: [],
      childNodesLinkArr: [],
      deviceProductHeight: 0,
      devicePurityHeight: 0,
      deviceDischargeHeight: 0,
      allpurityWidth: [],
      flowData: {
        // 生产区
        product: [
          {
            area: '生产区1可扩展',
            children: [
              {
                name: '氯乙烯总进电',
                number: '100D001', // 编号
                index: 1 // 排序序号
              },
              {
                name: '湿气压缩机',
                number: '120K001', // 编号
                index: 2 // 排序序号
              },
              {
                name: '干气压缩机',
                number: '130U001A', // 编号
                index: 3 // 排序序号
              },
              {
                name: '干气压缩机',
                number: '130U001B', // 编号
                index: 4 // 排序序号
              },
              {
                name: '高沸泵',
                number: '260P001A', // 编号
                index: 5 // 排序序号
              },
              {
                name: '高沸泵',
                number: '260P001B', // 编号
                index: 6 // 排序序号
              },
              {
                name: '低沸泵',
                number: '260P002A', // 编号
                index: 7 // 排序序号
              },
              {
                name: '低沸泵',
                number: '260P002B', // 编号
                index: 8 // 排序序号
              }
            ]
          }
        ],
        // 治理区
        // isUnit: true, isUnit表示是单元而不是设备也不是辅助设备
        purify: [
          {
            area: '160污染物治理区',
            children: [
              {
                name: '焚烧炉',
                number: '160R001', // 编号
                isUnit: true,
                index: 1, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '鼓风机(主)',
                    index: 1, // 排序序号
                    number: '160K001' // 编号
                  },
                  {
                    name: '鼓风机(备)',
                    index: 2, // 排序序号
                    number: '160K002' // 编号
                  }
                ]
              },
              {
                name: '急冷塔',
                number: '160C001', // 编号
                isUnit: true,
                index: 2, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '160P002A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '160P002B' // 编号
                  }
                ]
              },
              {
                name: '碱洗塔',
                number: '160C005', // 编号
                isUnit: true,
                index: 3, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '160P008A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '160P008B' // 编号
                  }
                ]
              }
            ]
          },
          {
            area: '260污染物治理区',
            children: [
              {
                name: '焚烧炉',
                number: '260ROO1', // 编号
                isUnit: true,
                index: 1, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '鼓风机(主)',
                    index: 1, // 排序序号
                    number: '260K001A' // 编号
                  },
                  {
                    name: '鼓风机(备)',
                    index: 2, // 排序序号
                    number: '260K001B' // 编号
                  }
                ]
              },
              {
                name: '急冷塔',
                number: '260C001', // 编号
                isUnit: true,
                index: 2, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '260P003A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '260P003B' // 编号
                  }
                ]
              },
              {
                name: '降膜吸收器',
                number: '260E003', // 编号
                isUnit: true,
                index: 3, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '260P004A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '260P004B' // 编号
                  }
                ]
              },
              {
                name: '碱洗塔',
                number: '260C004', // 编号
                isUnit: true,
                index: 4,
                // 子节点 可扩展
                children: [
                  {
                    name: '喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '260P007A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '260P007B' // 编号
                  }
                ]
              },
              {
                name: '管道脱硝',
                number: '260SCR001', // 编号
                isUnit: true,
                index: 5, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '氨喷淋泵(主)',
                    index: 1, // 排序序号
                    number: '260P009A' // 编号
                  },
                  {
                    name: '氨喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '260P009B' // 编号
                  }
                ]
              },
              {
                name: '引风',
                number: '260YF001', // 编号
                isUnit: true,
                index: 6, // 排序序号
                // 子节点 可扩展
                children: [
                  {
                    name: '引风机(主)',
                    index: 1, // 排序序号
                    number: '260K002A' // 编号
                  },
                  {
                    name: '引风机(备)',
                    index: 2, // 排序序号
                    number: '260K002B' // 编号
                  }
                ]
              }
            ]
          }
        ],
        discharge: [
          {
            area: '160排口区',
            index: 1, // 排序序号
            children: [
              {
                name: '排口1',
                index: 1, // 排序序号
                number: '160PK001' // 编号
              }
            ]
          },
          {
            area: '260排口区',
            index: 2, // 排序序号
            children: [
              {
                name: '排口2',
                index: 2, // 排序序号
                number: '260PK001' // 编号
              }
            ]
          }
        ]
      },
      linkData: {
        product: [{
          from: '120K001',
          to: ['160R001', '260ROO1'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001A',
          to: ['160R001', '260ROO1'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001B',
          to: ['160R001', '260ROO1'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P001A',
          to: ['260ROO1'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P001B',
          to: ['260ROO1'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P002A',
          to: ['260ROO1'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P002B',
          to: ['260ROO1'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }],
        purify: [{
          from: '160R001',
          to: ['160C001'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '160C001',
          to: ['160C005'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '160C005',
          to: ['160PK001'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260ROO1',
          to: ['260C001'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260ROO1',
          to: ['260C001'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C001',
          to: ['260E003'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C001',
          to: ['260E003'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260E003',
          to: ['260C004'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260E003',
          to: ['260C004'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C004',
          to: ['260YF001'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C004',
          to: ['260SCR001'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260SCR001',
          to: ['260YF001'],
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260YF001',
          to: ['260PK001'],
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }]
      }
    }
  },
  created () {
    this.makeNodeDataArray()
    this.makeLinkDataArray()
  },
  methods: {
    makeNodeDataArray () {
      this.nodeDataArray = []
      this.makeNodeDataArrayProduct()
      this.makeNodeDataArrayPurify()
      this.makeNodeDataArrayDischarge()
    },
    makeNodeDataArrayProduct () {
      this.deviceProductHeight = 0
      const background = '#ff7874'
      const product = this.flowData.product || []
      for (let i = 0; i < product.length; i++) {
        const element = product[i]
        const areaKey = `productAreaKey${i}`
        this.nodeDataArray.push({
          key: areaKey,
          isGroup: true,
          textColor: background,
          text: product[i].area || '暂无名称'
        })

        const childrenDataUnsort = element.children || []
        const childrenData = childrenDataUnsort.sort((prev, next) => {
          return prev.index - next.index
        })

        const productLinkArray = this.linkData.product || []
        const nodeTmpArr = []
        const childGroupTmpArr = []
        for (let linkIndex = 0; linkIndex < productLinkArray.length; linkIndex++) {
          const element = productLinkArray[linkIndex]
          element.toSpotString = element.to.sort().join(',') + `,${element.pollutionType}`
          nodeTmpArr.push(element.from)
          childGroupTmpArr.push(element.toSpotString)
        }
        this.noRepeatProductLinkArr = [...new Set(childGroupTmpArr)]
        this.noRepeatProductLinkArr.forEach(item => {
          this.nodeDataArray.push({
            key: item,
            isGroup: true,
            group: areaKey,
            padding: '1',
            textColor: background,
            text: ''
          })
        })

        for (let j = 0; j < childrenData.length; j++) {
          const element = childrenData[j]
          element.pos = `0 ${this.deviceProductHeight}`
          this.deviceProductHeight = this.deviceProductHeight + 80
          element.key = element.number
          element.text = `${element.name}\n${element.number}`
          element.background = background
          element.description = ''
          if (nodeTmpArr.includes(element.number)) {
            for (let m = 0; m < productLinkArray.length; m++) {
              const elementLink = productLinkArray[m]
              if (elementLink.from === element.number) {
                element.group = elementLink.toSpotString
              }
            }
          } else {
            element.group = areaKey
          }

          this.nodeDataArray.push(element)
        }

        this.deviceProductHeight = this.deviceProductHeight + 70
      }
    },
    makeNodeDataArrayPurify () {
      this.childNodesLinkArr = []
      const purify = this.flowData.purify || []
      const purifyLength = purify.length
      const childrenLengthArr = purify.filter(item => (item.children && item.children.length > 0 && item.children[0] && item.children[0].children && item.children[0].children.length > 0)).map(item => item.children[0].children.length)
      const maxChildrenLength = Math.max(...childrenLengthArr)
      let initDeviceWidth = 0
      if (maxChildrenLength > 1) {
        initDeviceWidth = 250 * ((maxChildrenLength + 0.5) / 2)
      } else {
        initDeviceWidth = 250
      }
      // console.log(initDeviceWidth)
      this.devicePurityHeight = purifyLength === 1 ? this.deviceProductHeight / 2 - 70 : 0
      for (let i = 0; i < purifyLength; i++) {
        let deviceWidth = initDeviceWidth
        const background = '#16c2c2'
        const element = purify[i]
        const areaKey = `purifyAreaKey${i}`
        this.nodeDataArray.push({
          key: areaKey,
          isGroup: true,
          textColor: background,
          text: purify[i].area || '暂无名称'
        })
        const childrenDataUnsort = element.children || []
        const childrenData = childrenDataUnsort.sort((prev, next) => {
          return prev.index - next.index
        })
        const childrenDataLength = childrenData.length
        for (let j = 0; j < childrenDataLength; j++) {
          const element = childrenData[j]
          element.pos = `${deviceWidth} ${this.devicePurityHeight}`
          element.group = areaKey
          element.key = element.number
          element.text = `${element.name}\n${element.number}`
          element.background = background
          element.description = ''
          this.nodeDataArray.push(element)
          if (element.children && element.children.length) {
            const childLength = element.children.length
            const childrenNode = element.children.sort((prev, next) => {
              return prev.index - next.index
            })
            childrenNode.forEach((child, index) => {
              const halfIndex = (childLength - 1) / 2
              const childWidth = (index - halfIndex) * 150
              child.pos = `${deviceWidth + childWidth} ${this.devicePurityHeight + 80}`
              child.group = areaKey
              child.key = child.number
              child.text = `${child.name}\n${child.number}`
              child.background = background
              child.description = ''
              this.nodeDataArray.push(child)
              this.childNodesLinkArr.push({
                from: child.number,
                to: element.number,
                fromSpot: 'Top',
                toSpot: 'Bottom',
                stroke: '#36c2c2'
              })
            })
            deviceWidth = deviceWidth + 150 * Math.max(element.children.length, 1.5)
          } else {
            deviceWidth = deviceWidth + 300
          }
        }
        this.allpurityWidth.push(deviceWidth)
        if (purifyLength > 1) {
          if (purifyLength * 150 > (this.deviceProductHeight - 150)) {
            this.devicePurityHeight = this.devicePurityHeight + 150
          } else {
            this.devicePurityHeight = this.devicePurityHeight + (this.deviceProductHeight / (purifyLength - 1)) - (150 / (purifyLength - 1))
          }
        }
      }
    },
    makeNodeDataArrayDischarge () {
      const discharge = this.flowData.discharge || []
      const dischargeLength = discharge.length
      this.deviceDischargeHeight = dischargeLength === 1 ? this.deviceProductHeight / 2 - 70 : 0
      for (let i = 0; i < dischargeLength; i++) {
        let deviceWidth = Math.max(...this.allpurityWidth) + 50
        const background = '#85a5ff'
        const element = discharge[i]
        const areaKey = `dischargeAreaKey${i}`
        this.nodeDataArray.push({
          key: areaKey,
          isGroup: true,
          textColor: background,
          text: discharge[i].area || '暂无名称'
        })
        const childrenDataUnsort = element.children || []
        const childrenData = childrenDataUnsort.sort((prev, next) => {
          return prev.index - next.index
        })
        const childrenDataLength = childrenData.length
        for (let j = 0; j < childrenDataLength; j++) {
          const element = childrenData[j]
          element.pos = `${deviceWidth} ${this.deviceDischargeHeight}`
          deviceWidth = deviceWidth + 200
          element.group = areaKey
          element.key = element.number
          element.text = `${element.name}\n${element.number}`
          element.background = background
          element.description = ''
          this.nodeDataArray.push(element)
        }
        if (dischargeLength > 1) {
          if (dischargeLength * 150 > (this.deviceProductHeight - 150)) {
            this.deviceDischargeHeight = this.deviceDischargeHeight + 150
          } else {
            this.deviceDischargeHeight = this.deviceDischargeHeight + (this.deviceProductHeight / (dischargeLength - 1)) - (150 / (dischargeLength - 1))
          }
        }
      }
    },
    makeLinkDataArray () {
      this.linkDataArray = []
      this.makeProductLink()
      this.makePurityLink()
    },
    makeProductLink () {
      this.noRepeatProductLinkArr.forEach(from => {
        const tempArr = from.split(',')
        const pollutionType = +tempArr.pop()
        tempArr.forEach(to => {
          this.linkDataArray.push({
            from,
            to,
            routing: 'Orthogonal',
            fromSpot: 'Right',
            pollutionType,
            stroke: pollutionType === 1 ? '#98c16d' : '#5b9ad5'
          })
        })
      })
    },
    makePurityLink () {
      const purifyArr = this.linkData.purify || []
      purifyArr.forEach(item => {
        item.to = item.to[0]
        item.stroke = +item.pollutionType === 1 ? '#98c16d' : '#5b9ad5'
      })
      this.linkDataArray.push(...purifyArr)
      this.linkDataArray = this.linkDataArray.concat(this.childNodesLinkArr)
    }
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
      background-color: #EEF2F2;
      width: 98vw;
      margin: 0 auto;
      height: 80vh;
      position: relative;
      padding: 30px 0;
  }
}
</style>
