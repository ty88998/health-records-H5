<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>就诊号：</strong></td><td>{{mdtrtsn}}</td></tr>
          <tr><td class="mytitle"><strong>处方号：</strong></td><td>{{rxno}}</td></tr>
          <tr><td class="mytitle"><strong>处方状态：</strong></td><td>{{rx_stas}}</td></tr>
          <tr><td class="mytitle"><strong>处方开立医院名称：</strong></td><td>{{rxhosp_name}}</td></tr>
          <tr><td class="mytitle"><strong>处方开立医师名称：</strong></td><td>{{rxdr_name}}</td></tr>
          <tr><td class="mytitle"><strong>处方开立科室名称：</strong></td><td>{{dept_name}}</td></tr>
          <tr><td class="mytitle"><strong>处方开立时间：</strong></td><td>{{rx_time}}</td></tr>
          <tr><td class="mytitle"><strong>参保人身份证号：</strong></td><td>{{showCard}}</td></tr>
          <tr><td class="mytitle"><strong>参保人姓名：</strong></td><td>{{insu_name}}</td></tr>
          <tr><td class="mytitle"><strong>参保人性别：</strong></td><td>{{insu_gend}}</td></tr>
          <tr><td class="mytitle"><strong>参保人年龄：</strong></td><td>{{insu_age}}</td></tr>
          <tr><td class="mytitle"><strong>有效期至：</strong></td><td>{{expy_to}}</td></tr>
          <tr><td class="mytitle"><strong>使用时间：</strong></td><td>{{used_time}}</td></tr>
          <tr><td class="mytitle"><strong>有效次数：</strong></td><td>{{vali_cnt}}</td></tr>
          <tr><td class="mytitle"><strong>主诊断：</strong></td><td>{{maindise}}</td></tr>
          <tr><td class="mytitle"><strong>辅诊断1：</strong></td><td>{{asstdise_fst}}</td></tr>
          <tr><td class="mytitle"><strong>辅诊断2：</strong></td><td>{{asstdise_sec}}</td></tr>
          <tr><td class="mytitle"><strong>药品通用名：</strong></td><td>{{drug_name}}</td></tr>
          <tr><td class="mytitle"><strong>药品规格：</strong></td><td>{{drug_spec}}</td></tr>
          <tr><td class="mytitle"><strong>数量：</strong></td><td>{{cnt}}</td></tr>
          <tr><td class="mytitle"><strong>用法：</strong></td><td>{{used}}</td></tr>
          <tr><td class="mytitle"><strong>单位：</strong></td><td>{{unit}}</td></tr>
          <tr><td class="mytitle"><strong>单次给药剂量：</strong></td><td>{{sin_drug_dos}}</td></tr>
          <tr><td class="mytitle"><strong>给药频率：</strong></td><td>{{drug_frqu}}</td></tr>
          <tr><td class="mytitle"><strong>用药天数：</strong></td><td>{{drug_days}}</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mdtrtsn: "就诊号",
      rxno:'处方号',
      rx_stas:'处方状态',
      rxhosp_name:'处方开立医院名称',
      rxdr_name:'处方开立医师名称',
      dept_name:'处方开立科室名称',
      rx_time:'处方开立时间',
      idcard:'380481196001010105',
      id_card:'参保人身份证号',
      showCard:'',
      insu_name:'参保人姓名',
      insu_gend:'参保人性别',
      insu_age:'参保人年龄',
      expy_to:'有效期至',
      used_time:'使用时间',
      vali_cnt:'有效次数',
      maindise:'主诊断',
      asstdise_fst:'辅诊断1',
      asstdise_sec:'辅诊断2',
      //处方
      drug_name:'药品通用名',
      drug_spec:'药品规格',
      cnt:'数量',
      used:'用法',
      unit:'单位',
      sin_drug_dos:'单次给药剂量',
      drug_frqu:'给药频率',
      drug_days:'用药天数'
    };
  },
  created() {
    this.showCard = this.getCardScreat(this.idcard);
    // this.age = this.getAge(this.birth_date);
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