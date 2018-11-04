# eggjs-api-model

## 学习eggjs用的api模板

如需进一步了解，参见 [egg 文档][egg]。

### 目录结构
```
egg-project
├── package.json
├── app
|   ├── router.js（入口）
│   ├── controller
│   |   └── users.js
│   ├── middleware
│   |   └── error_handler.js
│   ├── model（数据库ORM相关）
│   |   └── users.js
│   ├── public（可选）
│   |   └── xxx.css
│   └── service
│       └── users.js
├── config
|   ├── config.default.js
|   ├── config.local.js
│   ├── config.prod.js
|   └── plugin.js
├── database（数据库）
├── logs（日志）
└── test（可选，本项目中木有，因为懒得写）
```

### 本地开发
```bash
$ npm install
$ npm run dev
$ open http://localhost:7001/api/users/
```

### 数据库迁移
```bash
$ npx sequelize migration:generate --name=init-users
修改migrations新生成的变成符合自己需要的
# 升级数据库
$ npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```

### 部署

线上正式环境用 `EGG_SERVER_ENV=prod` 来启动。

```bash
$ EGG_SERVER_ENV=prod npm start
```

### 单元测试
- 没有
- 具体参见 [egg 文档 -单元测试](https://eggjs.org/zh-cn/core/unittest)。

### 内置指令

- 使用 `npm run lint` 来做代码风格检查。
- 使用 `npm run autod` 来自动检测依赖更新，详细参见 [autod](https://www.npmjs.com/package/autod) 。


[egg]: https://eggjs.org
