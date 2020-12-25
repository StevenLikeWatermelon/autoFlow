<template>
  <div class="process-flow-wrap"></div>
</template>

<script>
let myDiagram = null
const go = window.go
export default {
  data () {
    return {
    }
  },
  props: {
    nodeDataArray: {
      type: Array,
      default () {
        return []
      }
    },
    linkDataArray: {
      type: Array,
      default () {
        return []
      }
    },
    gridVisible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    modeData () {
      return {
        class: 'go.GraphLinksModel',
        nodeDataArray: [...this.nodeDataArray],
        linkDataArray: [...this.linkDataArray]
      }
    }
  },
  mounted () {
    if (window.go) {
      this.init()
    }
  },
  methods: {
    init () {
      function infoString (obj) {
        let part = obj.part
        if (part instanceof go.Adornment) part = part.adornedPart
        let msg = ''
        if (part instanceof go.Link) {
          msg = ''
        } else if (part instanceof go.Node) {
          msg = part.data.text + ':\n\n' + part.data.description
        }
        return msg
      }
      function autoTextWidth (text) {
        const lengthText = text.split('\n').map(item => item.length)
        const maxLength = Math.max(...lengthText)
        return maxLength * 16
      }
      // Some links need a custom to or from spot
      // function spotConverter (dir, defaultPosition) {
      //   return go.Spot[dir] || defaultPosition || go.Spot.LeftSide
      // }
      const $ = go.GraphObject.make // for conciseness in defining templates
      myDiagram = $(
        go.Diagram,
        this.$el, // create a Diagram for the DIV HTML element
        {
          'undoManager.isEnabled': false, // enable Ctrl-Z to undo and Ctrl-Y to redo
          'animationManager.isEnabled': false,
          'grid.visible': this.gridVisible,
          'toolManager.hoverDelay': 10, // how quickly tooltips are shown
          initialAutoScale: go.Diagram.Uniform, // scale to show all of the contents
          ChangedSelection: this.onSelectionChanged // view additional information
        }
      )
      myDiagram.nodeTemplate = $(
        go.Node,
        'Spot',
        {
          locationObjectName: 'main',
          // fromSpot: go.Spot.Right, // coming out from right
          // toSpot: go.Spot.BottomSide,
          locationSpot: go.Spot.Center,
          toolTip: $(
            'ToolTip',
            $(
              go.TextBlock,
              { margin: 4, width: 140 },
              new go.Binding('text', '', infoString).ofObject()
            )
          )
        },
        new go.Binding('location', 'pos', go.Point.parse).makeTwoWay(
          go.Point.stringify
        ),
        // The main element of the Spot panel is a vertical panel housing an optional icon,
        // plus a rectangle that acts as the port
        $(
          go.Panel,
          'Vertical',
          $(go.Panel, 'Auto',
            $(go.Shape, 'RoundedRectangle',
              {
                strokeWidth: 1,
                stroke: '#36c2c2'
              },
              new go.Binding('fill', 'background')),
            $(
              go.TextBlock,
              {
                font: 'Bold 14px Lato, sans-serif',
                height: 48,
                margin: new go.Margin(0, 0, 0, 0),
                verticalAlignment: go.Spot.Center,
                textAlign: 'center',
                stroke: '#ffffff',
                background: '#ff7874',
                alignment: go.Spot.Center,
                alignmentFocus: go.Spot.BottomCenter
              },
              new go.Binding('text'),
              new go.Binding('width', 'text', function (c) {
                return autoTextWidth(c)
              }),
              new go.Binding('stroke', 'textStroke'),
              new go.Binding('background', 'background')
            )
          )
        )
      )
      myDiagram.linkTemplate = $(
        go.Link,
        {
          routing: go.Link.AvoidsNodes,
          curve: go.Link.JumpOver,
          corner: 0,
          fromSpot: go.Spot.RightSide,
          toSpot: go.Spot.LeftSide
        },
        new go.Binding('routing', 'routing', function (c) {
          return c ? go.Link[c] : go.Link.AvoidsNodes
        }),
        new go.Binding('fromSpot', 'fromSpot', function (c) {
          return c ? go.Spot[c] : go.Spot.RightSide
        }),
        new go.Binding('toSpot', 'toSpot', function (c) {
          return c ? go.Spot[c] : go.Spot.LeftSide
        }),
        $(go.Shape, { strokeWidth: 2 }, new go.Binding('stroke', 'stroke')),
        $(go.Shape, { toArrow: 'Standard', strokeWidth: 2 }, new go.Binding('stroke', 'stroke'), new go.Binding('fill', 'stroke'))
      )
      myDiagram.groupTemplate = $(
        go.Group,
        'Vertical',

        $(
          go.Panel,
          'Auto',
          $(
            go.Shape,
            'RoundedRectangle', // surrounds the Placeholder
            {
              parameter1: 12,
              fill: '#F9FBFB',
              stroke: '#B7B7B7',
              strokeDashArray: [3, 4]
            }
          ),
          $(
            go.TextBlock, // group title
            {
              alignment: go.Spot.TopCenter,
              font: 'Bold 12pt Sans-Serif',
              height: 30,
              verticalAlignment: go.Spot.Center,
              textAlign: 'center',
              stroke: '#ff7874'
            },
            new go.Binding('text', 'text'),
            new go.Binding('stroke', 'textColor')

          ),
          $(
            go.Placeholder, // represents the area of all member parts,
            { padding: new go.Margin(35, 20, 14, 14) },
            new go.Binding('padding', 'padding', function (c) {
              return c ? new go.Margin(0, 1, 0, 1) : new go.Margin(35, 20, 14, 14)
            })
          ) // with some extra padding around them
        )
      )
      this.setData()
    },
    setData () {
      myDiagram.model = go.Model.fromJson(this.modeData)
    },

    onSelectionChanged (e) {
      console.log(e)
      this.$emit('onSelectionChanged', e)
    }
  },
  beforeDestroy () {

  }
}
</script>

<style lang="scss">
.process-flow-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: auto;
}
</style>
