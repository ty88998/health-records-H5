<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <!-- <PublicHead></PublicHead> -->
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>劳动类型：</strong></td><td>{{workType}}</td></tr>
          <tr><td class="mytitle"><strong>膳食结构：</strong></td><td>{{dietStru}}</td></tr>
          <tr><td class="mytitle"><strong>饮食口味：</strong></td><td>{{dietTaste}}</td></tr>
          <tr><td class="mytitle"><strong>每日主食(米/面)总量：</strong></td><td>{{dailyFoodAmt}}</td></tr>
          <tr><td class="mytitle"><strong>饮酒情况：</strong></td><td>{{wineFreq}}</td></tr>
          <tr><td class="mytitle"><strong>吸烟情况：</strong></td><td>{{smokeFreq}}</td></tr>
          <tr><td class="mytitle"><strong>运动强度：</strong></td><td>{{exerciseIntensity}}</td></tr>
          <tr><td class="mytitle"><strong>平均每周运动情况：</strong></td><td>{{avgExerciseWeek}}</td></tr>
          <tr><td class="mytitle"><strong>精神状态：</strong></td><td>{{mindStat}}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import PublicHead from "../../components/information/PublicHead.vue";
export default {
  components: {
    // PublicHead,
  },
  created() {
    
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
    
  }
};
</script>

<style scoped>
</style>