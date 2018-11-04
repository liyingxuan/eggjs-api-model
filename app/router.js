'use strict';

module.exports = app => {
  const { router } = app;

	/**
	 * 映射全部的接口
	 *
	 * 其中POST需要注意一下，默认不支持form-data的传参，如果使用postman调试需要在：
	 * Body -> raw 选择JSON(application/json) -> 传json，例如：
	 * {"name": "test", "age": 22}
	 *
 	 */
	router.resources('users', '/api/users', 'users');
};
