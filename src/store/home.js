/**
 * 直接引入文件的 2种方式
 */
// const $api = require('../api/api').api;
// import { api } from '../api/api';
// const $api = api;
/**
 * @param 3.引入main文件中Vue实例，等同于Vue组件中的 this
 */
import _Vue from "../main"
export default {
    namespaced:true,
    state:{

    },
    mutations:{
        //mutation 存放同步方法，所有方法须接收一个默认参数state-仓库
    },
    actions:{
        /**
         * 
         * @param {*} context context = {commit-调用同步方法,dispatch-调用异步方法,state-访问及修改仓库}
         */
        async getMuseumsInfoAsync(context){
            // let result = await $api.home.getMuseumsInfo();
            let result = await _Vue.$api.home.getMuseumsInfo();
            return result;
        }
    },
    getters:{

    },
    modules:{
        
    }
}