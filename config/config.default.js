'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler' ];

  // Egg.js中的ORM框架
	config.sequelize = {
		dialect: 'mysql',
		host: '127.0.0.1',
		port: 3306,
		database: 'node-js',
    password: 'password'
	};

	// 禁用了CSRF安全检测
	config.security = {
		csrf: {
			enable: false,
		}
	};

	return config;
};
