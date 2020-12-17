<template>
  <div class="process-flow-wrap"></div>
</template>

<script>
import { defaultColors, SvgIcon } from './config.js'
let myDiagram = null
const go = window.go
export default {
  data () {
    return {
      dotted: null
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
      // A data binding conversion function. Given an name, return the Geometry.
      // If there is only a string, replace it with a Geometry object, which can be shared by multiple Shapes.
      function geoFunc (geoname) {
        let geo = SvgIcon[geoname].path
        if (typeof geo === 'string') {
          geo = go.Geometry.parse(geo, true)
        }
        return geo
      }
      function autoTextWidth (length) {
        if (length > 4) {
          return length * 16
        } else {
          return length * 22
        }
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
          $(
            go.Shape,
            {
              name: 'icon',
              width: 50,
              height: 50,
              stroke: null,
              strokeWidth: 0,
              margin: new go.Margin(0, 40, 0, 40),
              fill: defaultColors.blue
            },
            new go.Binding('fill', 'color', function (c) {
              return defaultColors[c]
            }),
            new go.Binding('geometry', 'icon', geoFunc)
          ),
          // $(
          //   go.Shape,
          //   {
          //     name: 'main',
          //     width: 50,
          //     height: 20,
          //     margin: new go.Margin(0, 0, 0, 5),
          //     portId: '',
          //     stroke: null,
          //     strokeWidth: 0,
          //     fill: defaultColors.blue
          //   },
          //   new go.Binding('fill', 'color', function (c) {
          //     return defaultColors[c]
          //   }),
          //   new go.Binding('height', 'portHeight')
          // )
          $(
            go.TextBlock,
            {
              font: 'Bold 14px Lato, sans-serif',
              height: 30,
              margin: new go.Margin(0, 0, 0, 6),
              verticalAlignment: go.Spot.Center,
              textAlign: 'center',
              stroke: '#ffffff',
              alignment: go.Spot.Center,
              alignmentFocus: go.Spot.BottomCenter
            },
            new go.Binding('text'),
            new go.Binding('width', 'text', function (c) {
              return autoTextWidth(c.length)
            }),
            new go.Binding('background', 'color', function (c) {
              return defaultColors[c]
            })
          )
        )
      )
      myDiagram.linkTemplate = $(
        go.Link,
        {
          toShortLength: -2,
          fromShortLength: -2,
          layerName: 'Background',
          routing: go.Link.Orthogonal,
          corner: 15,
          fromSpot: go.Spot.BottomCenter,
          toSpot: go.Spot.TopCenter
        },
        // make sure links come in from the proper direction and go out appropriately
        // new go.Binding('fromSpot', 'fromSpot', function (d) {
        //   return spotConverter(d, go.Spot.Bottom)
        // }),
        // new go.Binding('toSpot', 'toSpot', function (d) {
        //   return spotConverter(d, go.Spot.Top)
        // }),
        new go.Binding('points').makeTwoWay(),
        // mark each Shape to get the link geometry with isPanelMain: true
        $(
          go.Shape,
          {
            isPanelMain: true,
            stroke: defaultColors.lightblue,
            strokeWidth: 8
          },
          new go.Binding('stroke', 'color', function (c) {
            return defaultColors[c]
          })
        ),
        $(
          go.Shape,
          {
            isPanelMain: true,
            stroke: 'white',
            strokeWidth: 2,
            name: 'PIPE',
            strokeDashArray: [20, 40]
          },
          new go.Binding('strokeWidth', 'noDotted', function (c) {
            return c ? 0 : 2
          })
        )
      )
      myDiagram.groupTemplate = $(
        go.Group,
        'Vertical',
        $(
          go.TextBlock, // group title
          {
            alignment: go.Spot.TopCenter,
            font: 'Bold 12pt Sans-Serif',
            height: 30,
            background: '#6D9BA5',
            verticalAlignment: go.Spot.Center,
            textAlign: 'center',
            stroke: '#ffffff'
          },
          new go.Binding('text', 'text'),
          new go.Binding('width', 'text', function (c) {
            return autoTextWidth(c.length)
          })
        ),
        $(
          go.Panel,
          'Auto',
          $(
            go.Shape,
            'RoundedRectangle', // surrounds the Placeholder
            {
              parameter1: 12,
              fill: '#ffffff',
              stroke: '#6D9BA5'
            }
          ),
          $(
            go.Placeholder, // represents the area of all member parts,
            { padding: new go.Margin(14, 20, 14, 14) }
          ) // with some extra padding around them
        )
      )
      this.setData()
      this.setDottedAnimation()
      // this.setIconsChanged();
    },
    // setIconsChanged() {
    //   let index = 0;
    //   setInterval(() => {
    //     if (index > 2) {
    //       index = 0;
    //     }
    //     index = index + 1;
    //     myDiagram.nodes.each((node) => {
    //       // const iconName = node.data.icon;
    //       myDiagram.model.setDataProperty(node.data, "icon", "gas1");
    //       setTimeout(() => {
    //         myDiagram.model.setDataProperty(node.data, "icon", "gas2");
    //         setTimeout(() => {
    //           myDiagram.model.setDataProperty(node.data, "icon", "gas3");
    //           setTimeout(() => {
    //             myDiagram.model.setDataProperty(node.data, "icon", "gas4");
    //             setTimeout(() => {
    //               myDiagram.model.setDataProperty(node.data, "icon", "gas");
    //             }, 400);
    //           }, 400);
    //         }, 400);
    //       }, 400);
    //     });
    //   }, 1600);
    // },
    setData () {
      myDiagram.model = go.Model.fromJson(this.modeData)
    },
    setDottedAnimation () {
      // animate some flow through the pipes
      this.dotted = setInterval(() => {
        myDiagram.links.each(function (link) {
          if (!link.data.noDotted) {
            const shape = link.findObject('PIPE')
            const off = shape.strokeDashOffset - 3
            shape.strokeDashOffset = off <= 0 ? 60 : off
          }
        })
      }, 60)
    },
    onSelectionChanged (e) {
      console.log(e)
      this.$emit('onSelectionChanged', e)
    }
  },
  beforeDestroy () {
    clearInterval(this.dotted)
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
