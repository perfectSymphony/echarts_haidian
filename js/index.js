
/*
 * 专业大厅地图标点
 */
var geoCoordMap = {
  "海淀区一":[116.299841,40.048286],
    "海淀区1":[116.275153,39.963585],
    "海淀区2":[116.287985,39.938332],
    "海淀区3":[116.307881,39.976051],
    "海淀区4":[116.316244,40.034532],
    "海淀区5":[116.287159,39.938358],
    "海淀区6":[116.303911,39.97379],
    "海淀区1":[116.31808,40.036498],
    "海淀区2":[116.301155,39.906819],
    "海淀区3":[116.279879,39.956468],
    "海淀区4":[116.279731,39.955989],
    "海淀区5":[116.320059,40.044118],
    "海淀区6":[116.280027,39.956378],
    "海淀区7":[116.280016,39.955257],
    "海淀区8":[116.280208,39.959418],
    "海淀区9":[116.279977,39.955255],
    "海淀区1":[116.306389,39.930849],
    "海淀区2":[116.301936,40.048474],
    "海淀区3":[116.301019,40.04829],
    "海淀区4":[116.26887,40.054653],
    "海淀区5":[116.331776,39.976885],
    "海淀区1":[116.313278,40.043162],
    "海淀区2":[116.28796,39.93843],
    "海淀区3":[116.260078,40.073368],
    "海淀区6":[116.259215,39.952146]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
                code : data[i].code
            });
        }
    }
    return res;
};

/*
 * 初始化地图
 */
var chart ;
var createOption = function(){
  var option = {
           backgroundColor: '#404a59',
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    return params.name;
                }
            },
           color: ['#f00','#61C5F9','#97AEF9','#5CBC32','#ECAB51'],
           legend : {
            selectedMode: 'single',
            orient : 'vertical',
            left : '30px',
            bottom : '55px',
            icon: "rect", 
            data : ['海淀区一','海淀区二', '海淀区三', '海淀区四', '海淀区五'],
            //============
            show:true,
            //=============
            selected:{
              '海淀区一':true,
              '海淀区二':false,
              '海淀区三':false,
              '海淀区四':false,
              '海淀区五':false

            },
            textStyle : {
              color : "#fff"
            }
          },
            geo: {
                map: 'beijing_haidian',
                label: {
                    emphasis: {
                        show: true,
                        fontSize:15,
                        color:'#000'
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#B3E1F5',
                        borderColor: '#7EB4CB',
                        borderWidth:'2',
                    },
                    emphasis: {
                        areaColor: '#D1F1FD'
                    }
                }
            },
          series : [{
            name : "海淀区一",
            type : 'scatter',
            coordinateSystem: 'geo',
                  data: convertData([
                    {name: "海淀区一", value: '海淀区一', code: '20'}
                    ]),
                  symbolSize: 15,
                  show:true,
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: false
                      }
                  },
                  itemStyle: {
                      emphasis: {
                          borderColor: '#B3E1F5',
                          borderWidth: 1
                      },
                  },
          },
        {
              name : "海淀区三",
              type : 'scatter',
              coordinateSystem: 'geo',
                    data: convertData([
                      {name: "海淀区1", value: '海淀区三', code: '10'},
                      {name: "海淀区2", value: '海淀区三', code: '20'},
                      {name: "海淀区3", value: '海淀区三', code: '30'},
                      {name: "海淀区4", value: '海淀区三', code: '40'},
                      {name: "海淀区5", value: '海淀区三', code: '50'},
                      {name: "海淀区6", value: '海淀区三', code: '70'}
                      ]),
                    symbolSize: 15,
                    show:true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#B3E1F5',
                            borderWidth: 1
                        }
                    },
            }, 
        {
              name : "海淀区二",
              type : 'scatter',
              coordinateSystem: 'geo',
                    data: convertData([
                        {name: "海淀区1", value: '海淀区二', code: '10'},
                        {name: "海淀区2", value: '海淀区二', code: '20'},
                        {name: "海淀区3", value: '海淀区二', code: '30'},
                        {name: "海淀区4", value: '海淀区二', code: '40010'},
                        {name: "海淀区5", value: '海淀区二', code: '50'},
                        {name: "海淀区6", value: '海淀区二', code: '40020'},
                        {name: "海淀区7", value: '海淀区二', code: '60'},
                        {name: "海淀区8", value: '海淀区二', code: '70'},
                        {name: "海淀区9", value: '海淀区二', code: '80'}
                      ]),
                    symbolSize: 15,
                    show:true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#B3E1F5',
                            borderWidth: 1
                        }
                    },
            },
        {
              name : "海淀区四",
              type : 'scatter',
              coordinateSystem: 'geo',
                    data: convertData([
                        {name: "海淀区1", value: '海淀区四', code: '10'},
                        {name: "海淀区2", value: '海淀区四', code: '20'},
                        {name: "海淀区3", value: '海淀区四', code: '30'}
                      ]),
                    symbolSize: 15,
                    show:true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#B3E1F5',
                            borderWidth: 1
                        }
                    },
            },
        {
              name : "海淀区五",
              type : 'scatter',
              coordinateSystem: 'geo',
                    data: convertData([
                        {name: "海淀区1", value: '海淀区五', code: '20010'},
                        {name: "海淀区2", value: '海淀区五', code: '30010'},
                        {name: "海淀区3", value: '海淀区五', code: '90010'},
                        {name: "海淀区4", value: '海淀区五', code: '40010'},
                        {name: "海淀区5", value: '海淀区五', code: '70010'},
                        {name: "海淀区6", value: '海淀区五', code: 'CL'}
                      ]),
                    symbolSize: 15,
                    show:true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            borderColor: '#B3E1F5',
                            borderWidth: 1
                        }
                    },
            }         
          ]      
        }
        return option;
}
  function drawDistrictArea(mapJson) {
      echarts.registerMap('beijing_haidian', mapJson);
      chart = echarts.init(document.getElementById('main'));
       var option = createOption();
      chart.setOption(option);
      chart.on('click',function(e){
        console.log(e);
      });
  }

  
var jsCtx='./';
  $.get(jsCtx + 'json/beijing_haidian.json',drawDistrictArea);

