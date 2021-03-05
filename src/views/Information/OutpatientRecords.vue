<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>单据编号：</strong></td><td>{{bill_no}}</td></tr>
          <tr><td class="mytitle"><strong>姓名：</strong></td><td>{{username}}</td></tr>
          <tr><td class="mytitle"><strong>性别：</strong></td><td>{{sex}}</td></tr>
          <tr><td class="mytitle"><strong>年龄：</strong></td><td>{{age}}</td></tr>
          <tr><td class="mytitle"><strong>证件类型：</strong></td><td>{{id_type}}</td></tr>
          <tr><td class="mytitle"><strong>证件号：</strong></td><td>{{showCard}}</td></tr>
          <tr><td class="mytitle"><strong>门诊日期/入院日期：</strong></td><td>{{in_hosp_date}}</td></tr>
          <tr><td class="mytitle"><strong>出院日期：</strong></td><td>{{out_hosp_date}}</td></tr>
          <tr><td class="mytitle"><strong>医疗机构名称：</strong></td><td>{{medical_org_name}}</td></tr>
          <tr><td class="mytitle"><strong>科室名称：</strong></td><td>{{medical_org_name}}</td></tr>
          <tr><td class="mytitle"><strong>医师姓名：</strong></td><td>{{doctor_name}}</td></tr>
          <tr><td class="mytitle"><strong>结算时间：</strong></td><td>{{settle_date}}</td></tr>
          <tr><td class="mytitle"><strong>总金额：</strong></td><td>{{sum_amount}}</td></tr>
          <tr><td class="mytitle"><strong>报销金额：</strong></td><td>{{apply_pay_amount}}</td></tr>
          <tr><td class="mytitle"><strong>自付金额：</strong></td><td>{{self_pay_anount}}</td></tr>
          <tr><td class="mytitle"><strong>统筹支付：</strong></td><td>{{fund_pay_amount}}</td></tr>
          <tr><td class="mytitle"><strong>个人账户支付：</strong></td><td>{{self_account_amount}}</td></tr>
          <tr><td class="mytitle"><strong>个人现金支付：</strong></td><td>{{self_cash_amount}}</td></tr>
          <tr><td class="mytitle"><strong>收费人：</strong></td><td>{{charge_man}}</td></tr>
          <tr><td class="mytitle"><strong>非医保金额：</strong></td><td>{{non_insurance_amount}}</td></tr>
          <tr><td class="mytitle"><strong>医保金额：</strong></td><td>{{insurance_amount}}</td></tr>
          <tr><td class="mytitle"><strong>合规费用：</strong></td><td>{{compliance_amount}}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bill_no: "单据编号",
      birth_date:'19600101',
      showCard:'',
      username:'张钰',
      sex:'男',
      age:'0',
      id_type:'身份证',
      idcard:'380481196001010105',
      id_no:'证件号',
      in_hosp_date:'门诊日期/入院日期',
      out_hosp_date:'出院日期',
      medical_org_name:'医疗机构名称',
      medical_dept_name:'科室名称',
      doctor_name:'医师姓名',
      settle_date:'结算时间',
      sum_amount:'总金额',
      apply_pay_amount:'报销金额',
      self_pay_anount:'自付金额',
      fund_pay_amount:'统筹支付',
      self_account_amount:'个人账户支付',
      self_cash_amount:'个人现金支付',
      charge_man:'收费人',
      non_insurance_amount:'非医保金额',
      insurance_amount:'医保金额',
      compliance_amount:'合规费用'
    };
  },
  created() {
    this.showCard = this.getCardScreat(this.idcard);
    this.age = this.getAge(this.birth_date);
  },
  methods: {
    getCardScreat(card){
      let temp = '';
      for(let i = 0;i<card.length;i++){
        if(i<3||card.length-1-i<3){
          temp+=card[i]
        }else{
          temp+='*'
        }
      }
      return temp;
    },
    getAge(time){
      let year = time.substr(0,4)
      let month = time.substr(4,2)
      let day = time.substr(6,2)
      let date = year + '-' + month + '-' + day;
      let newTime = (new Date() - new Date(date)) / 1000 / 3600 / 24 / 365;
      return parseInt(newTime);
    }
  }
};
</script>

<style scoped>
</style>