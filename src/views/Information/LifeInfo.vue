<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <PublicHead :title="'生活方式'"></PublicHead>
    
    <div class="content">
      <div class="contentItem">
          <div class="textTitle">
                生活方式
          </div>
          <div class="contentShow">
            <div><p>劳动类型</p><span>{{workType}}</span></div>
            <div><p>膳食结构</p><span>{{dietStru}}</span></div>
            <div><p>饮食口味</p><span>{{dietTaste}}</span></div>
            <div><p>每日主食(米/面)总量</p><span>{{dailyFoodAmt}}</span></div>
            <div><p>日饮酒情况</p><span>{{wineFreq}}</span></div>
            <div><p>日吸烟情况</p><span>{{smokeFreq}}</span></div>
            <div><p>平均每周运动情况</p><span>{{avgExerciseWeek}}</span></div>
            <div><p>运动强度</p><span>{{exerciseIntensity}}</span></div>
            <div><p>精神状态</p><span>{{mindStat}}</span></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicHead from "../../components/information/PublicHead.vue";
export default {
  components: {
    PublicHead,
  },
  created() {
    this.getLifeInfo();
  },
  data() {
    return {
      workType: "轻体力（白领、教师、退休人员等）",
      dietStru: "荤素搭配",
      dietTaste: "偏油",
      dailyFoodAmt: "6-8两",
      wineFreq: "偶尔喝酒",
      smokeFreq:"被动吸烟: 是指不吸烟者在1 周内有1 天以上的时间，吸入吸烟者呼出的烟雾每天累积至少15 分钟",
      exerciseIntensity: "中度（如快走、广场舞、爬山、太极拳等）",
      avgExerciseWeek: "经常",
      mindStat: "良好",
      wrapperHeight:0
    };
  },
  methods: {
    //获取患者生活方式
    async getLifeInfo(){
      let result = await this.$api.information.getLifeInfoApi({pcNo:'5001020'})
      console.log(result)
    }
  }
};
</script>

<style scoped>
  .contentItem{
    height: 13.26rem;
    margin-bottom: 0.4rem;
  }
  .textTitle{
    width: 2.2rem;
    height: 0.52rem;
    font-size: 0.36rem;
    margin-top: 0.4rem;
    margin-bottom: 0.24rem;
    line-height: 0.52rem;
  }
  .contentShow{
    width: 100%;
    height: 6.14rem;
    padding: 0 0.44rem;
    color: rgba(0, 0, 0, 1);
    font-size: 0.28rem;
    text-align: left;
  }
  .contentShow p{
    color: #767676;
    line-height: 100%;
    margin-bottom: 0.16rem;
  }
  .contentShow>div{
    margin-bottom: 0.4rem;
  }
</style>