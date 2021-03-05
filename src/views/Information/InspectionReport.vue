<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>医院名称：</strong></td><td>{{hosp_name}}</td></tr>
          <tr><td class="mytitle"><strong>报告名称：</strong></td><td>{{exam_name}}</td></tr>
          <tr><td class="mytitle"><strong>姓名：</strong></td><td>{{username}}</td></tr>
          <tr><td class="mytitle"><strong>性别：</strong></td><td>{{gend}}</td></tr>
          <tr><td class="mytitle"><strong>出生日期：</strong></td><td>{{brdy}}</td></tr>
          <tr><td class="mytitle"><strong>检验号：</strong></td><td>{{check_no}}</td></tr>
          <tr><td class="mytitle"><strong>检查科室：</strong></td><td>{{check_dept}}</td></tr>
          <tr><td class="mytitle"><strong>检查医生：</strong></td><td>{{check_dr}}</td></tr>
          <tr><td class="mytitle"><strong>门诊号：</strong></td><td>{{otp_no}}</td></tr>
          <tr><td class="mytitle"><strong>检查日期：</strong></td><td>{{check_date}}</td></tr>
          <tr><td class="mytitle"><strong>检查名称：</strong></td><td>{{check_name}}</td></tr>
          <tr><td class="mytitle"><strong>检查结果：</strong></td><td>{{check_rslt}}</td></tr>
          <tr><td class="mytitle"><strong>诊断提示：</strong></td><td>{{diag_warn}}</td></tr>
          <tr><td class="mytitle"><strong>报告时间：</strong></td><td>{{report_date}}</td></tr>
          <tr><td class="mytitle"><strong>报告医生：</strong></td><td>{{report_dr}}</td></tr>
          <tr><td class="mytitle"><strong>审核医生：</strong></td><td>{{chk_dr}}</td></tr>
          <tr><td class="mytitle"><strong>备注：</strong></td><td>{{memo}}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hosp_name: "医院名称",
      exam_name: "报告名称",
      brdy:'19600101',
      username:'张钰',
      gend:'男',
      check_no:'检验号',
      check_dept:'检查科室',
      check_dr:'检查医生',
      otp_no:'门诊号',
      check_date:'检查日期',
      check_name:'检查名称',
      check_rslt:'检查结果',
      diag_warn:'诊断提示',
      report_date:'报告时间',
      report_dr:'报告医生',
      chk_dr:'审核医生',
      memo:'备注'
    };
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
</style>