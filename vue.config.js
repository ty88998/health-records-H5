//引入服务器地址
// import对应export或export default
// require对应exports或module.exports
const baseApi = {
  Dev: 'http://192.168.10.103:8100/',
  Prod: 'https://zrkj.cqzrkj.cn/'
}
// const proxyObj = {}
// proxyObj['/api'] = {
//   target: 'https://zrkj.cqzrkj.cn',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/api': ''
//   }
// }
// module.exports = {
//   lintOnSave: false, // 取消 eslint 验证
//   devServer: {
//     // host: 'http://192.168.2.110/',
//     // port: 8080,
//     proxy: proxyObj
//   }
// }

// module.exports = {
//   lintOnSave: false, // 取消 eslint 验证
//   publicPath:"/",
//   devServer: {
//     historyApiFallback: true,
//     proxy: {
//       "/api": {
//         // context: '/api',
//         target: baseApi.Prod, //代理跨域目标接口
//         changeOrigin: true,
//         secure: false,//当代理莱些https服务报错时用
//         pathRewrite: {
//           '^/api': ''
//         }
//       }
//     },
//   }
// }
