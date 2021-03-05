<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <PublicHead></PublicHead>
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>申请病种名称：</strong></td><td>{{appy_dise_name}}</td></tr>
          <tr><td class="mytitle"><strong>原有病种名称：</strong></td><td>{{origin_dise_name}}</td></tr>
          <tr><td class="mytitle"><strong>诊断结果：</strong></td><td>{{dise_rslt}}</td></tr>
          <tr><td class="mytitle"><strong>治疗方案：</strong></td><td>{{trt_schm}}</td></tr>
          <tr><td class="mytitle"><strong>认定医院名称：</strong></td><td>{{crtf_hosp_name}}</td></tr>
          <tr><td class="mytitle"><strong>诊断医师姓名：</strong></td><td>{{souc_dr_name}}</td></tr>
          <tr><td class="mytitle"><strong>诊断医院名称：</strong></td><td>{{souc_hosp_name}}</td></tr>
          <tr><td class="mytitle"><strong>申请通过时间：</strong></td><td>{{trt_start_date}}</td></tr>
          <tr><td class="mytitle"><strong>失效时间：</strong></td><td>{{trt_end_date}}</td></tr>
          <tr><td class="mytitle"><strong>经办人：</strong></td><td>{{opter}}</td></tr>
          <tr><td class="mytitle"><strong>经办时间：</strong></td><td>{{opt_time}}</td></tr>
          <tr><td class="mytitle"><strong>医师姓名：</strong></td><td>{{dr_name}}</td></tr>
          <tr><td class="mytitle"><strong>医师性别(女)：</strong></td><td>{{dr_gend}}</td></tr>
          <tr><td class="mytitle"><strong>所属医院ID：</strong></td><td>{{id_hosp}}</td></tr>
          <tr><td class="mytitle"><strong>所属科室：</strong></td><td>{{dept}}</td></tr>
          <tr><td class="mytitle"><strong>所属地：</strong></td><td>{{loc_code}}</td></tr>
          <tr><td class="mytitle"><strong>联系电话：</strong></td><td>{{mob}}</td></tr>
          <tr><td class="mytitle"><strong>身份证号：</strong></td><td>{{showCard}}</td></tr>
          <tr><td class="mytitle"><strong>职称：</strong></td><td>{{profttl}}</td></tr>
          <tr><td class="mytitle"><strong>是否专家：</strong></td><td>{{is_prof}}</td></tr>
          <tr><td class="mytitle"><strong>备注：</strong></td><td>{{memo}}</td></tr>
          <tr><td class="mytitle"><strong>行政区划(市)：</strong></td><td>{{area_code}}</td></tr>
          <tr><td class="mytitle"><strong>行政区划(区)：</strong></td><td>{{region_code}}</td></tr>
        </tbody>
      </table>
    </div>
   </div>
</template>

<script>
import PublicHead from '../../components/information/PublicHead.vue'
export default {
  components:{
    PublicHead
  },
  data() {
    return {
      idcard:'380481196001012155',
      showCard:'',
      username:'张钰',
      gend:'男',
      age:'0',
      tel:'18000000220',
      //新增属性
      appy_dise_name:'申请病种名称',
      origin_dise_name:'原有病种名称',
      dise_rslt:'诊断结果',
      trt_schm:'治疗方案',
      crtf_hosp_name:'认定医院名称',
      souc_dr_name:'诊断医师姓名',
      souc_hosp_name:'诊断医院名称',
      trt_start_date:'申请通过时间',
      trt_end_date:'失效时间',
      opter:'经办人',
      opt_time:'经办时间',
        
      dr_name:'医师姓名',
      // 女 默认为M
      dr_gend:'医师性别(女)',
      id_hosp:'所属医院ID',
      dept:'所属科室编码（关联字典表）',
      loc_code:'所属地 0市内 1其它',
      mob:'联系电话',
      idcard:'身份证号',
      profttl:'职称',
      is_prof:'是否专家(Y是N否)',
      memo:'备注',
      area_code:'行政区划（市）',
      region_code:'行政区划（区）'
    }
  },
  created() {
    this.getCardScreat()
  },
  methods: {
    getCardScreat(){
      let {idcard} = this;
      let temp = '';
      for(let i = 0;i<idcard.length;i++){
        if(i<3||idcard.length-1-i<3){
          temp+=idcard[i]
        }else{
          temp+='*'
        }
      }
      this.showCard = temp;
    }
  },
};
</script>

<style scoped>

</style>