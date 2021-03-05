<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <!-- <PublicHead></PublicHead> -->
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>是否患有糖尿病：</strong></td><td>{{diabeticFlag}}</td></tr>
          <tr><td class="mytitle"><strong>糖尿病类型：</strong></td><td>{{diabeticType}}</td></tr>
          <tr><td class="mytitle"><strong>糖尿病慢性并发症：</strong></td><td>{{diabeticConc}}</td></tr>
          <tr><td class="mytitle"><strong>是否患有高血压：</strong></td><td>{{hypertensionFlag}}</td></tr>
          <tr><td class="mytitle"><strong>高血压类型：</strong></td><td>{{hypertensionType}}</td></tr>
          <tr><td class="mytitle"><strong>血压水平分类：</strong></td><td>{{bloodPressType}}</td></tr>
          <tr><td class="mytitle"><strong>血压水平分层：</strong></td><td>{{bloodPressClassify}}</td></tr>
          <tr><td class="mytitle"><strong>是否患有冠心病：</strong></td><td>{{ichdFlag}}</td></tr>
          <tr><td class="mytitle"><strong>是否患有心肌埂塞：</strong></td><td>{{mriFlag}}</td></tr>
          <tr><td class="mytitle"><strong>是否有心脏手术：</strong></td><td>{{heartOperationFlag}}</td></tr>
          <tr><td class="mytitle"><strong>是否患有高脂血症：</strong></td><td>{{hyperlipemiaFlag}}</td></tr>
          <tr><td class="mytitle"><strong>高脂血症类型：</strong></td><td>{{hyperlipemiaType}}</td></tr>
          <tr><td class="mytitle"><strong>是否患有脑卒中：</strong></td><td>{{cvaFlag}}</td></tr>
          <tr><td class="mytitle"><strong>脑卒中类型：</strong></td><td>{{cvaType}}</td></tr>
          <tr><td class="mytitle"><strong>其他疾病：</strong></td><td>{{other}}</td></tr>
          <tr><td class="mytitle"><strong>是否有家族史：</strong></td><td>{{familyHisFlag}}</td></tr>
          <tr><td class="mytitle"><strong>既往史：</strong></td><td>{{pastHis}}</td></tr>
          <tr><td class="mytitle"><strong>过敏史：</strong></td><td>{{allergyHis}}</td></tr>
          <tr><td class="mytitle"><strong>疾病详情：</strong></td><td>{{diseaseDetails}}</td></tr>
          <tr><td class="mytitle"><strong>疾病信息：</strong></td><td>{{ididDiseaseInfo}}</td></tr>
          <tr><td class="mytitle"><strong>家族成员：</strong></td><td>{{familyMem}}</td></tr>
          <tr><td class="mytitle"><strong>家族疾病：</strong></td><td>{{fmDisease}}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
String
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
      diabeticFlag:"是",
      diabeticType:'常规',
      diabeticConc:'精神亢奋，肥胖病',
      hypertensionFlag:'是',
      hypertensionType:'高血压(二级)',
      bloodPressType:'常规',
      bloodPressClassify:'常规',
      ichdFlag:'常规',
      mriFlag:'常规',
      heartOperationFlag:'常规',
      hyperlipemiaFlag:'常规',
      hyperlipemiaType:'常规',
      cvaFlag:'Y/是',
      cvaType:'TIA',
      other:'皮肤白皙,身强体壮',
      familyHisFlag:'常规',
      pastHis:'糖尿病',
      allergyHis:'皮肤过敏',
      diseaseDetails:'常规',
      ididDiseaseInfo:'常规',
      familyMem:'常规',
      fmDisease:'常规',
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
</style>