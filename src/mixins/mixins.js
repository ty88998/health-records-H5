import { Indicator } from 'mint-ui';
//混入
export let myMixin = {
    data() {
        return {
            //加载
            Loading:true,
            wrapperHeight:0,
            browserType:this.$browser
        }
    },
    created() {
        
    },
    watch: {
        Loading(newval, oldval) {
          setTimeout(() => {
            this.getWrapperHeight();
          }, 0);
        },
      },
    methods: {
        //路由跳转
        loadPage(obj) {
            const { title, route } = obj
            let result = this.$setItem('title', title);
            if (result) this.$router.push(route);
        },
        //返回上一页
        prevPage() {
            this.$router.back(-1);
        },
        //获取容器高度
        getWrapperHeight() {
            this.wrapperHeight =
              document.documentElement.clientHeight -
              this.$refs.wrapper.getBoundingClientRect().top;
          },
    },
}