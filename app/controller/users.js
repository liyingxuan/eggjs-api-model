'use strict';

const Controller = require('egg').Controller;

/**
 * 保证ID是int型
 *
 * @param str
 * @return {*}
 */
function toInt(str) {
	if (typeof str === 'number') return str;
	if (!str) return str;
	return parseInt(str, 10) || 0;
}

class UserController extends Controller {
	/**
	 * Method: GET
	 * URL: http://localhost:7001/api/users/
	 * Func: 可以获取全部数据中的最后10条
	 *
	 * @return {Promise<void>}
	 */
	async index() {
		const ctx = this.ctx;
		const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
		ctx.body = await ctx.service.users.list(query);
	}

	/**
	 * Method: GET
	 * URL: http://localhost:7001/api/users/3
	 * Func: 可以获取全部数据中的id为3的那条
	 *
	 * @return {Promise<void>}
	 */
	async show() {
		const ctx = this.ctx;
		ctx.body = await ctx.service.users.find(toInt(ctx.params.id));
	}

	/**
	 * Method: POST
	 * URL: http://localhost:7001/api/users/
	 * DataType: JSON(application/json)
	 * Data: {"name": "test", "age": 22}
	 * Func: 可以新建一个用户数据
	 *
	 * @return {Promise<void>}
	 */
	async create() {
		const ctx = this.ctx;
		const { name, age } = ctx.request.body;
		const user = await ctx.service.users.create({ name, age });
		ctx.status = 201;
		ctx.body = user;
	}

	/**
	 * Method: PUT
	 * URL: http://localhost:7001/api/users/3
	 * DataType: JSON(application/json)
	 * Data: {"name": "test3", "age": 33}
	 * Func: 可以把id为3的用户名修改成test3，年龄修改成33
	 *
	 * @return {Promise<void>}
	 */
	async update() {
		const ctx = this.ctx;
		const params = {
			id: toInt(ctx.params.id),
			updates: ctx.request.body
		};

		const user = await ctx.service.users.update(params);
		ctx.status = 201;
		ctx.body = user;
	}

	/**
	 * Method: DELETE
	 * URL: http://localhost:7001/api/users/3
	 * Func: 可以把id为3的用户删除
	 *
	 * @return {Promise<void>}
	 */
	async destroy() {
		const ctx = this.ctx;
		const id = toInt(ctx.params.id);
		await ctx.service.users.del(id);
		ctx.status = 200;
	}
}

module.exports = UserController;