<template>
  <div class="home">
    <p>点击上面 示例链接</p>
  </div>
</template>

<script>
// 生成不重复id
// function getId () {
//   return new Date().getTime()
// }
export default {
  name: 'Home',
  data () {
    return {
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
                name: '高沸泵',
                number: '260P001A', // 编号
                index: 4 // 排序序号
              },
              {
                name: '高沸泵',
                number: '130U001B', // 编号
                index: 5 // 排序序号
              },
              {
                name: '高沸泵',
                number: '260P001C', // 编号
                index: 6 // 排序序号
              },
              {
                name: '高沸泵',
                number: '260P001D', // 编号
                index: 7 // 排序序号
              },
              {
                name: '废水外排泵',
                number: '130W001', // 编号
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
                    name: '鼓风机',
                    index: 1, // 排序序号
                    number: '160K001' // 编号
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
                    number: '260P002A' // 编号
                  },
                  {
                    name: '喷淋泵(备)',
                    index: 2, // 排序序号
                    number: '260P002B' // 编号
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
                    number: '260P007A' // 编号
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
      linkData: [
        {
          from: '120K001',
          to: '160R001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '120K001',
          to: '260ROO1',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001A',
          to: '160R001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001A',
          to: '260ROO1',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001B',
          to: '160R001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '130U001B',
          to: '260ROO1',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P001A',
          to: '260ROO1',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P001B',
          to: '260ROO1',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P002A',
          to: '260ROO1',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        },
        {
          from: '260P002B',
          to: '260ROO1',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '160R001',
          to: '160C001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '160C001',
          to: '160C005',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '160C005',
          to: '160PK001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260ROO1',
          to: '260C001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260ROO1',
          to: '260C001',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C001',
          to: '260E003',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C001',
          to: '260E003',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260E003',
          to: '260C004',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260E003',
          to: '260C004',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C004',
          to: '260SCR001',
          pollutionType: 1 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260C004',
          to: '260YF001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }, {
          from: '260YF001',
          to: '260PK001',
          pollutionType: 2 // pollutionType: 1表示废水 2表示废气
        }
      ]
    }
  },
  components: {
  }
}
</script>
