# health-records-H5
医疗健康H5项目

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##### 注：依赖内组件'ly-tab'入口index.vue中，需手动在监听器'selecedId'中添加两行代码（头部）

`this.$router.push(this.items[value].route)`

  ` localStorage.setItem('selectedId',value)`