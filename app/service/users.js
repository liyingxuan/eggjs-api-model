'use strict';

const Service = require('egg').Service;

class User extends Service {
	// 向数据库请求全部数据，默认10条
	async list({ offset = 0, limit = 10 }) {
		return this.ctx.model.Users.findAndCountAll({
			offset,
			limit,
			order: [[ 'created_at', 'desc' ], [ 'id', 'desc' ]],
		});
	}

	// 向数据库获取指定id的数据
	async find(id) {
		const user = await this.ctx.model.Users.findById(id);
		if (!user) {
			this.ctx.throw(404, 'user not found');
		}
		return user;
	}

	// 新建数据
	async create(user) {
		return this.ctx.model.Users.create(user);
	}

	// 更新数据
	async update({ id, updates }) {
		this.ctx.logger.info('my request data: ', id);
		this.ctx.logger.info('my request data: ', updates);
		const user = await this.ctx.model.Users.findById(id);
		if (!user) {
			this.ctx.throw(404, 'user not found');
		}
		return user.update(updates);
	}

	// 删除数据
	async del(id) {
		const user = await this.ctx.model.Users.findById(id);
		if (!user) {
			this.ctx.throw(404, 'user not found');
		}
		return user.destroy();
	}
}

module.exports = User;
