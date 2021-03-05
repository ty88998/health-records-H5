<template>
  <div class="public" v-if="Loading">
    <PublicHead></PublicHead>
    <div class="table_box">
      <!-- <mt-field label="姓名：" disabled :value='username'></mt-field>
      <mt-field label="性别：" disabled :value="gend"></mt-field>
      <mt-field label="年龄：" disabled :value="age"></mt-field>
      <mt-field label="电话："  type="tel" disabled :value="tel"></mt-field>
      <mt-field label="身份证号码：" disabled :value="showCard"></mt-field> -->
      <!-- <mt-field label="身份证号码" v-model="website"></mt-field> -->
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>姓名：</strong></td><td>{{username}}</td></tr>
          <tr><td class="mytitle"><strong>性别：</strong></td><td>{{gend}}</td></tr>
          <tr><td class="mytitle"><strong>年龄：</strong></td><td>{{age}}</td></tr>
          <tr><td class="mytitle"><strong>电话：</strong></td><td>{{tel}}</td></tr>
          <tr><td class="mytitle"><strong>身份证号码：</strong></td><td>{{showCard}}</td></tr>
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
      idcard:'380481196001010105',
      birthday:'19600101',
      showCard:'',
      username:'张钰',
      gend:'男',
      age:'0',
      tel:'18000000220'
    }
  },
  created() {
    this.getCardScreat()
    this.getAge()
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
    },
    getAge(){
      let { birthday } = this;
      let year = birthday.substr(0,4)
      let month = birthday.substr(4,2)
      let day = birthday.substr(6,2)
      let date = year + '-' + month + '-' + day;
      let age = (new Date() - new Date(date)) / 1000 / 3600 / 24 / 365;
      this.age = parseInt(age);
    }
  },
};
</script>

<style scoped>
  
</style>