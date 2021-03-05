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
          <tr><td class="mytitle"><strong>检验号：</strong></td><td>{{exam_no}}</td></tr>
          <tr><td class="mytitle"><strong>门诊号：</strong></td><td>{{otp_no}}</td></tr>
          <tr><td class="mytitle"><strong>检验日期：</strong></td><td>{{exam_date}}</td></tr>
          <tr><td class="mytitle"><strong>序号：</strong></td><td>{{serial_no}}</td></tr>
          <tr><td class="mytitle"><strong>项目名称：</strong></td><td>{{item_name}}</td></tr>
          <tr><td class="mytitle"><strong>结果：</strong></td><td>{{rslt}}</td></tr>
          <tr><td class="mytitle"><strong>单位：</strong></td><td>{{unit}}</td></tr>
          <tr><td class="mytitle"><strong>提示：</strong></td><td>{{warn}}</td></tr>
          <tr><td class="mytitle"><strong>参考区间：</strong></td><td>{{ref_area}}</td></tr>
          <tr><td class="mytitle"><strong>检验方法：</strong></td><td>{{test_mtd}}</td></tr>
          <tr><td class="mytitle"><strong>采集时间：</strong></td><td>{{clct_date}}</td></tr>
          <tr><td class="mytitle"><strong>接收时间：</strong></td><td>{{rec_date}}</td></tr>
          <tr><td class="mytitle"><strong>报告时间：</strong></td><td>{{report_date}}</td></tr>
          <tr><td class="mytitle"><strong>检验医生：</strong></td><td>{{exam_dr}}</td></tr>
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
      exam_no:'检验号',
      otp_no:'门诊号',
      exam_date:'检验日期',
      serial_no:'序号',
      item_name:'项目名称',
      rslt:'结果',
      unit:'单位',
      warn:'提示',
      ref_area:'参考区间',
      test_mtd:'检验方法',
      clct_date:'采集时间',
      rec_date:'接收时间',
      report_date:'报告时间',
      exam_dr:'检验医生',
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