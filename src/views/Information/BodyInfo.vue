<template>
  <div class="public" v-if="Loading">
    <PublicHead :publicTitle="'体征数据'"></PublicHead>
    <div class="content">
      <div class="contentItem">
        <div class="textTitle">
                体征数据
          </div>
          <div class="contentShow">
            <div>
              <div><p>身高</p><span>{{height}}CM</span></div>
              <div><p>腰围</p><span>{{waist}}KG</span></div>
            </div>
            <div>
              <div><p>体重</p><span>{{weight}}</span></div>
              <div><p>腰围</p><span>{{waist}}CM</span></div>
            </div>
          </div>
      </div>
      <div class="contentItem contentItemBMI">
        <div class="textTitle textTitleBMI">
                BMI值计算结果
          </div>
          <div class="contentShow contentShowBMI">
            <div id="dashboardHumidity" style="width: 200px; height: 200px"></div>
            <div class="explain">
              <p>·&nbsp;BMI是指身体质量指数，它是结合了身高和体重2个因素来判断人体胖瘦程度以及是否健康的一个标准。</p>
              <p>·&nbsp;计算公式为: BMI=体重÷身高²</p>
              <p>·&nbsp;BMI在18.5-24之间是正常的。BMI低于18.5考虑为体重过轻; 24-27之间为超重; 超过27以上为肥胖。但BMI指数并不适用于儿童，孕产妇，长期卧床体质虚弱的老年人，或者正在进行一些力量肌肉训练的人。</p>
            </div>
          </div>
      </div>
    </div>
   </div>
</template>

<script>
import PublicHead from '../../components/information/PublicHead.vue'
export default {
  components:{
    PublicHead
  },
  created() {
    this.getBodyInfo();
  },
  data() {
    return {
      meterDate:'2021-01-28',
      height:180,
      weight:71,
      waist:41
    }
  },
  mounted(){
    this.drawDev();
  },
  methods: {
    //获取患者体征信息
    async getBodyInfo(){
      let result = await this.$api.information.getBodyInfoApi({pcNo:'5001020'});
      console.log(result)
    },
    //仪表盘
    drawDev() {
      let myChart = this.$echarts.init(
        document.getElementById("dashboardHumidity")
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
          borderWidth: 0, 
        },
        toolbox: {
          show: false,
          feature: {
            restore: {},
            saveAsImage: {},
          },
        },
        // 配置
        series: [{
        min: 16,                 // 最小的数据值,默认 0 。映射到 minAngle。
        max: 32,               // 最大的数据值,默认 100 。映射到 maxAngle。
        splitNumber: 4, 
        type: 'gauge',
        axisLine: {
            lineStyle: {
                width: 10,
                color: [
                    [0.1562, '#16A04E'],
                    [0.4937, '#67e0e3'],
                    [0.7438, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        pointer: {
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            distance: -50,
            length: 8,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        splitLine: {
            distance: -50,
            length: 30,
            lineStyle: {
                color: '#fff',
                width: 4
            }
        },
        axisLabel: {
            color: 'auto',
            distance: 36,
            fontSize: 12,
            formatter: function (value) {
              switch (value) {
                case 16:return '过轻';break;
                case 20:return '正常';break;
                case 24:return '超重';break;
                case 28:return '肥胖';break;
                case 32:return '';break;
              }
              
            },
        },
        title: {                // 仪表盘标题。
                    show: true,             // 是否显示标题,默认 true。
                    offsetCenter: [0,"30%"],//相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                    color: "#A5A5A5",          // 文字的颜色,默认 #333。
                    fontSize: 14,           // 文字的字体大小,默认 15。
                },
        detail: {
            valueAnimation: true,
            offsetCenter: [0,"85%"],
            formatter: '{value}%',
            color: 'auto',
            fontSize:16
        },
        data: [{
            value: 23.8,
            name: "BMI值"
        }]
    }]
      },true);
    }
  },
};
</script>

<style scoped>
  .contentItem{
    height: 3.9rem;
    line-height: 150%;
    margin-bottom: 0.28rem;
  }
  .textTitle{
    width: 1.45rem;
    height: 0.52rem;
    font-size: 0.36rem;
    margin-top: 0.4rem;
    margin-bottom: 0.24rem;
  }
  .contentShow{
    width: 100%;
    height: 6.14rem;
    padding: 0 0.44rem;
    color: rgba(0, 0, 0, 1);
    font-size: 0.28rem;
    text-align: left;
    display: flex;
    justify-content: center;
  }
  .contentShow>div{
    width: 50%;
  }
  .contentShow p{
    color: #767676;
    line-height: 100%;
    margin-bottom: 0.16rem;
  }
   .contentShow>div>div{
    margin-bottom: 0.4rem;
  }
  .contentItemBMI{
    height: 7rem;
  }
  .textTitleBMI{
    width: 2.56rem;
  }
  .contentShowBMI{
    margin-top: -0.7rem;
    flex-direction: column;
    align-items: center;
  }
  .contentShowBMI>.explain{
    margin-top: -0.4rem;
    font-size: 0.22rem;
    width: 100%;
  }
  .contentShowBMI>.explain>p{
    margin: 0;
    line-height: 150%;
    color: #505050;
  }
</style>