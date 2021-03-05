<template>
  <div class="public" v-if="Loading" ref="wrapper" :style="{ height: (wrapperHeight-10) + 'px' }">
    <!-- <PublicHead></PublicHead> -->
    <div class="table_box">
      <!-- <mt-field label="姓名：" disabled :value='username'></mt-field>
      <mt-field label="性别：" disabled :value="gend"></mt-field>
      <mt-field label="年龄：" disabled :value="age"></mt-field>
      <mt-field label="电话："  type="tel" disabled :value="tel"></mt-field>
      <mt-field label="身份证号码：" disabled :value="showCard"></mt-field> -->
      <!-- <mt-field label="身份证号码" v-model="website"></mt-field> -->
      <table id="table">
        <tbody style="width:100%;">
          <tr><td class="mytitle"><strong>测量日期：</strong></td><td>{{meterDate}}</td></tr>
          <tr><td class="mytitle"><strong>身高(cm)：</strong></td><td>{{height}}</td></tr>
          <tr><td class="mytitle"><strong>体重(kg)：</strong></td><td>{{weight}}</td></tr>
          <tr><td class="mytitle"><strong>腰围(cm)：</strong></td><td>{{waist}}</td></tr>
        </tbody>
      </table>
    </div>
   </div>
</template>

<script>
// import PublicHead from '../../components/information/PublicHead.vue'
export default {
  components:{
    // PublicHead
  },
  created() {
    
  },
  data() {
    return {
      meterDate:'2021-01-28',
      height:180,
      weight:71,
      waist:41
    }
  },
};
</script>

<style scoped>
</style>