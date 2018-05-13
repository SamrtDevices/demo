'use strict';
const path = require('path');

module.exports = {
  /* honeybee config occupied */
  root: undefined,
  serverRoot: undefined,
  serverEnv: undefined,
  /* honeybee config end */
  debug: true,
  prefix: true,
  staticPath: undefined,
  logs: {
    sys: {
      level: 'INFO'
    }
  },
  middleware: {
    cookieSession: {
      config: {
        secret: 'defalutSecret!PLEASE!REPLACE!'
      }
    },
    webpack: {
      enable: true,
      module: 'honeypack',  // 需要通过tnpm i honeypack --save来安装依赖
      router: '/assets'
    },
    spa: {
      enable: false
    }
  },
  // middleware: {
  //   cookieSession: {
  //     config: {
  //       secret: 'defalutSecret!PLEASE!REPLACE!'
  //     }
  //   }
  // },
  extension: {
  }
};
