<template>
  <div class="public" v-if="Loading">
    <PublicHead :publicTitle="'个人信息'"></PublicHead>
    <div class="content">
      <div class="contentItem">
          <div class="textTitle">
                个人基本信息
          </div>
          <div class="contentShow">
            <div><p>出生日期</p><span>{{birthday}}</span></div>
            <div><p>性别</p><span>{{info.gend}}</span></div>
            <div><p>联系电话</p><span>{{info.tel}}</span></div>
            <div><p>居住地址</p><span>{{address}}</span></div>
            <div><p>医疗费用支付方式</p><span>{{payType}}</span></div>
          </div>
      </div>
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
      info:{},
      idcard:'380481196001010105',
      birthday:'19600101',
      showCard:'',
      username:'张钰',
      gend:'男',
      age:'0',
      tel:'18000000220',
      payType:'医保卡支付'
    }
  },
  created() {
    this.getCardScreat()
    this.getAge()
    this.queryPatientBasics();
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
    },
    //获取患者个人基本信息
    async queryPatientBasics(){
      try {
        let result = await this.$api.information.queryPatientBasicsApi({pcNo:'20170415'})
        this.info = result.data;
      } catch (error) {
        console.log(error)
      }
    }
  },
  computed:{
    address(){
      if(this.info.insuProvinceCode===this.info.insuCityCode)return (this.info.insuProvinceCode + this.info.insuDetlAddr);
      else return(this.info.insuProvinceCode + this.info.insuCityCode + this.info.insuDetlAddr);
    }
  }
};
</script>

<style scoped>
  .contentItem{
    height: 8.8rem;
  }
  .textTitle{
    width: 2.2rem;
    height: 0.52rem;
    font-size: 0.36rem;
    margin-top: 0.4rem;
    margin-bottom: 0.24rem;
    line-height: 0.52rem;
  }
  .contentShow{
    width: 100%;
    height: 6.14rem;
    padding: 0 0.44rem;
    color: rgba(0, 0, 0, 1);
    font-size: 0.28rem;
    text-align: left;
  }
  .contentShow p{
    color: #767676;
    line-height: 100%;
    margin-bottom: 0.16rem;
  }
  .contentShow>div{
    margin-bottom: 0.4rem;
  }
</style>