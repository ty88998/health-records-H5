<template>
  <div class="public">
    <!-- <div class="head">
      <h4>个人中心</h4>
    </div>
    <div class="headImg">
      <svg t="1614236135163" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="73567" width="80" height="80"><path d="M517.075 1002.044a484.977 484.977 0 1 0-484.977-484.97 485 485 0 0 0 484.977 484.97z" fill="#FFFFFF" p-id="73568"></path><path d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m0-50.048A461.952 461.952 0 1 0 50.048 512 461.944 461.944 0 0 0 512 973.952z" fill="#73B9FF" p-id="73569"></path><path d="M155.67 822.136c34.952-94.584 149.512-209.731 252.575-209.731H615.77c103.093 0 208.128 127.119 243.08 221.74-86.686 89.322-222.667 160.957-346.842 160.791-124.176 0.166-269.651-83.448-356.337-172.77z m356.338-256.045a185.36 185.36 0 1 1 184.47-185.359A184.93 184.93 0 0 1 512 566.092z" fill="#73B9FF" p-id="73570"></path></svg>
      <span style="margin-left:0.2rem;margin-bottom:0.4rem;">张钰</span>
    </div> -->
    <PublicHead></PublicHead>
    <!-- <ly-tab
                v-model="selectedId"
                :items="items"
                :options="options">
    </ly-tab> -->
    <div class="content">
      <!-- <ly-tab
                v-model="selectedId"
                :items="items"
                :options="options">
    </ly-tab> -->
    <ContentItem :itemList="basicInfo"></ContentItem>
    <ContentItem :itemList="medicalInfo"></ContentItem>
          <!-- <Infor :title="'基本信息'" :route="'patientBasics'"></Infor>
          <Infor :title="'体征信息'" :route="'bodyInfo'"></Infor>
          <Infor :title="'生活方式'" :route="'lifeInfo'"></Infor>
          <Infor :title="'疾病信息'" :route="'diseaseinfo'"></Infor>
          <Infor :title="'资格准入信息'" :route="'admittanceInfo'"></Infor>
          <Infor :title="'待遇信息'" :route="'treatmentInfo'"></Infor>
          <Infor :title="'费用结算信息'" :route="'payInfo'"></Infor>
          <Infor :title="'门诊记录'" :route="'outpatientRecords'"></Infor>
          <Infor :title="'住院记录'" :route="'hospitalRecords'"></Infor>
          <Infor :title="'处方记录'" :route="'prescriptionRecords'"></Infor>
          <Infor :title="'检验报告'" :route="'surveyReport'"></Infor>
          <Infor :title="'检查报告'" :route="'inspectionReport'"></Infor>
          <router-view /> -->
    </div>
  </div>
</template>

<script>
import Infor from '../../components/information/Information_list'
import PublicHead from '../../components/information/PublicHead.vue'
import ContentItem from '../../components/information/ContentItem'
export default {
  components: {
    Infor,PublicHead,ContentItem
  },
  data() {
    return {
      SkipSwitchName: "",
      selectedId:parseInt(this.$getItem('selectedId'))||0,
      items: [
        {label: '个人信息',route:'patientBasics'},
        {label: '体征数据',route:'bodyInfo'},
        {label: '生活方式',route:'lifeInfo'},
        {label: '疾病信息',route:'diseaseinfo'},

        {label: '资格准入信息',route:'admittanceInfo'},
        {label: '待遇信息',route:'treatmentInfo'},
        {label: '费用结算信息',route:'payInfo'},
        {label: '门诊记录',route:'outpatientRecords'},
        {label: '住院记录',route:'hospitalRecords'},
        {label: '处方记录',route:'prescriptionRecords'},
        {label: '检验报告',route:'surveyReport'},
        {label: '检查报告',route:'inspectionReport'}
      ],
      //基本信息
      basicInfo:[
        {label: '个人信息',route:'patientBasics'},
        {label: '体征数据',route:'bodyInfo'},
        {label: '生活方式',route:'lifeInfo'},
        {label: '疾病信息',route:'diseaseinfo'}
      ],
      //医疗信息
      medicalInfo:[
         {label: '门诊记录',route:'outpatientRecords'},
         {label: '检验报告',route:'surveyReport'},
        {label: '处方记录',route:'prescriptionRecords'},
        {label: '费用结算信息',route:'payInfo'}
      ],
      options: {
        activeColor: '#1d98bd',
        labelKey:'label'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
    };
  },
  created() {
    // this.getText();
  },
  methods: {
    async getText(){
      let result = await this.$api.information.getText('123')
      console.log(result)
    }
  }
};
</script>

<style scoped>
/* .ly-tab{
  padding: 0 !important;
  margin-top: 0.02rem;
  background: none !important;
}
.ly-tab-item{
  height: 2rem;
  width: 4rem;
  margin-left: 60px;
} */
</style>