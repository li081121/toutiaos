process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
module.exports = {
  publicPath: './',
  outputDir: `dist/${process.env.VUE_APP_ENV}`,
  // devServer: {
  //   proxy: {
  //     '^/api/b2b/access': {
  //       target: 'http://10.1.22.12:3210' // 吴斌
  //     },
  //     '^/api/b2b/access/basic/customInfo': {
  //       target: 'http://10.1.22.12:3210' // 吴斌
  //     },
  //     '^/api/b2b/permission/role': {
  //       target: 'http://10.1.22.12:3217' // 吴斌
  //     },
  //     '^/api/b2b/permission/account': {
  //       target: 'http://10.1.22.12:3217' // 吴斌
  //     },
  //     '^/api/b2b/permission/user': {
  //       target: 'http://10.1.22.12:3217' // 吴斌
  //     },
  //     '^/api/b2b/order': {
  //       target: 'http://10.1.22.28:3212' // 彭军
  //     },
  //     '^/api/b2b/basedata/finance/financeQuery': {
  //       target: 'http://10.1.22.133:3218', // 蒋辉
  //     },
  //     '^/api/b2b/custom': {
  //       target: 'http://10.1.22.133:3211', // 蒋辉
  //       // target: 'http://10.1.22.133:3211' // 蒋辉
  //       // target: 'http://10.1.22.12:3211' // 吴斌
  //       // target: 'http://10.1.22.29:3211' // 陈波
  //     },
  //     '^/api/b2b/finance/apmanage': {
  //       target: 'http://172.16.2.147:3216', // 陈波
  //     },
  //     '^/api/b2b/finance/deduct': {
  //       target: 'http://10.1.22.29:3216', // 陈波
  //     },
  //     '^/api/b2b/finance': {
  //       // target: 'http://10.1.22.28:3216' // 彭军
  //       // target: 'http://10.1.22.29:3216', // 陈波
  //       // target: 'http://10.1.22.22:3216', // 方卫江
  //       target: 'http://10.1.22.12:3216', // 吴斌
  //     },
  //     '^/api/b2b/hkcang/driverList': {
  //       target: 'http://10.1.22.29:3218', // 陈波
  //     },
  //     '^/api/b2b/hkcang': {
  //       target: 'http://10.1.22.29:3213', // 陈波
  //       // target: 'http://10.1.22.20:3213', // 石明
  //     },
  //     '^/api/b2b/szcang/express/orderList':{
  //       target: 'http://10.1.22.12:3214', // 吴斌
  //     },
  //     '^/api/b2b/szcang': {
  //       target: 'http://10.1.22.133:3214', // 蒋辉
  //       // target: 'http://10.1.22.12:3214', // 吴斌
  //     },
  //     '^/api/b2b/qp/awaitBindingVehicleTtrips': {
  //       target: 'http://10.1.22.29:3215'
  //     },
  //     '^/api/b2b/qp/classfy': {
  //       target: 'http://10.1.22.18:3215', // 许宪坤
  //     },
  //     '^/api/b2b/qp/entSealNum': { // 黄帅
  //       target: 'http://172.16.2.147:3215'
  //     },
  //     '^/api/b2b/qp/evaluate': {
  //       target: 'http://10.1.22.18:3215', // 许宪坤
  //     },
  //     '^/api/b2b/qp': {
  //       target: 'http://10.1.22.18:3215', // 许宪坤
  //       // target: 'http://10.1.22.22:3215', // 方卫江
  //     },
  //     '^/api/b2b/basedata': {
  //       target: 'http://10.1.22.133:3218', // 蒋辉
  //       // target: 'http://10.1.22.29:3218', // 陈波
  //       // target: 'http://10.1.22.28:3218' // 彭军
  //     },
  //     // '^/api/b2b/order': {
  //     //   target: 'http://10.1.22.29:3212', // 陈波
  //     // },
  //     '^/api/b2b': {
  //       target: 'http://10.1.22.29:3218', // 陈波
  //     },
  //     '^/api/fulltext': {
  //       target: 'https://test.fusen.net.cn'
  //     },
  //     '^/api/grab': {
  //       target: 'https://test.fusen.net.cn'
  //     },
  //     '^/api': {
  //       // target: 'https://test.fusen.net.cn'
  //       target: 'http://10.1.22.12:3217' // 吴斌
  //       // target: 'http://172.16.2.121:3211' // 蒋辉
  //       // target: 'http://10.1.22.28:3211' // 彭军
  //     },
  //     '^/mobile': {
  //       target: 'https://test.fusen.net.cn',
  //       // target: 'http://10.1.22.29:8662',
  //       // target: 'http://10.1.22.29:8662', // 陈波
  //       changeOrigin: true
  //     },
  //     '^/hkcang': {
  //       target: 'http://10.1.22.20:3213', // 石明
  //     },
  //     '^/file': {
  //       target: 'https://test.fusen.net.cn',
  //       // target: 'http://10.1.22.29:9992'
  //     },
  //     '^/miniprog/shconfirm/callback/jsApiTicketSignMiniprog002': {
  //       target: 'https://test.fusen.net.cn',
  //     }
  //   }
  // },
  pages: {
    "index": {
      "template": "public/index.html",
      "chunks": [
        "chunk-vendors",
        "chunk-common",
        "index"
      ],
      "entry": "src/views/pc/src/main.js",
      "filename": "index.html",
      "title": "客户端",
    },
    "mobile": {
      "template": "public/index.html",
      "chunks": [
        "chunk-vendors",
        "chunk-common",
        "mobile"
      ],
      "entry": "src/views/mobile/src/main.js",
      "filename": "mobile.html",
      "title": "前海B2B后台管理系统",
    }
  }
}