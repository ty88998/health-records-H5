<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <div class="table_box">
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>姓名：</strong></td><td>{{username}}</td></tr>
          <tr><td class="mytitle"><strong>性别：</strong></td><td>{{gend}}</td></tr>
          <tr><td class="mytitle"><strong>年龄：</strong></td><td>{{age}}</td></tr>
          <tr><td class="mytitle"><strong>电话：</strong></td><td>{{tel}}</td></tr>
          <tr><td class="mytitle"><strong>身份证号码：</strong></td><td>{{showCard}}</td></tr>
          <tr><td class="mytitle"><strong>联系地址：</strong></td><td>{{insu_province_code + insu_city_code + insu_region_code}}</td></tr>
          <tr><td class="mytitle"><strong>地址详情：</strong></td><td>{{insu_detl_addr}}</td></tr>
          <tr><td class="mytitle"><strong>医保卡号：</strong></td><td>{{showInsu_hi_no}}</td></tr>
          <tr><td class="mytitle"><strong>起始时间：</strong></td><td>{{trt_start_date}}</td></tr>
          <tr><td class="mytitle"><strong>本年度限额：</strong></td><td>{{trt_lmt}}</td></tr>
          <tr><td class="mytitle"><strong>次年度限额：</strong></td><td>{{next_year_trt_lmt}}</td></tr>
          <tr><td class="mytitle"><strong>本年度已用限额(元)：</strong></td><td>{{used_trt_lmt}}</td></tr>
          <tr><td class="mytitle"><strong>本年度剩余限额(元)：</strong></td><td>{{surplus_trt_lmt}}</td></tr>
          <tr><td class="mytitle"><strong>参保类型：</strong></td><td>{{insured_type}}</td></tr>
        </tbody>
      </table>
    </div>
   </div>
</template>

<script>
export default {
  data() {
    return {
      idcard:'380481196001010105',
      birthday:'19600101',
      showCard:'',
      username:'张钰',
      gend:'男',
      age:'0',
      tel:'18000000220',
      //新增数据
      insu_province_code:'四川省',//省
      insu_city_code:'成都市',//市
      insu_region_code:'武侯区',//区
      insu_detl_addr:'领事馆路61号',
      insu_hi_no:'60030100',
      showInsu_hi_no:'',
      trt_start_date:'20080808',
      trt_end_date:'20301231',
      trt_lmt:'12万',
      next_year_trt_lmt:'12万',
      used_trt_lmt:'3万',
      surplus_trt_lmt:'9万',
      insured_type:'城镇职工医疗'
    }
  },
  created() {
    this.showCard = this.getCardScreat(this.idcard);
    this.showInsu_hi_no = this.getCardScreat(this.insu_hi_no);
    this.age = this.getAge(this.birthday);
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
  },
};
</script>

<style scoped>
  
</style>