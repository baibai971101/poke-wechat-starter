# Poke WeChat Starter - 微信小程序 + Node.js 后端入门模板

这是一个专为初学者设计的微信小程序起步模板，包含了一个清新（吉卜力风格/现代感）的聊天 UI 界面以及一个基于 Node.js Express 的简单后端代理服务器。

## 项目结构

```
poke-wechat-starter/
├── backend/            # Node.js 后端代码
│   ├── package.json    # 依赖配置文件
│   └── server.js       # Express 服务器逻辑
└── frontend/           # 微信小程序前端代码
    ├── app.js
    ├── app.json
    ├── app.wxss
    └── pages/
        └── chat/       # 聊天页面
```

---

## 1. 准备工作

在开始之前，请确保你已经安装了以下工具：

- **Node.js**: 用于运行后端服务器。[下载地址](https://nodejs.org/)
- **微信开发者工具**: 用于开发、调试和预览小程序。[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

---

## 2. 后端部署与运行 (本地)

后端服务器负责处理聊天请求、记录会话历史并充当代理。

1. 打开终端（或命令提示符），进入 `backend` 目录：
   ```bash
   cd backend
   ```
2. 安装依赖：
   ```bash
   npm install
   ```
3. 启动服务器：
   ```bash
   node server.js
   ```
   *此时服务器应运行在 `http://localhost:3000`。*

---

## 3. 前端运行与调试 (微信开发者工具)

1. 打开**微信开发者工具**。
2. 点击“导入项目”，选择本项目中的 `frontend` 文件夹。
3. AppID 可选择“测试号”或填写你自己的 AppID。
4. **关键步骤（本地测试必备）**：
   - 在开发者工具右上角点击 **“详情”**。
   - 选择 **“本地设置”**。
   - 勾选 **“不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书”**。
   - *原因：小程序默认要求 HTTPS 且必须是备案域名，勾选此项后方可直接请求本地的 http://localhost:3000。*
5. 编译完成后，你即可在模拟器中看到聊天界面并发送消息。

---

## 4. 生产环境部署建议

当你准备将小程序发布给真实用户时，请注意以下几点：

1. **获取正式域名**：你需要一个已备案的域名（如 `api.yourdomain.com`）。
2. **配置 SSL/HTTPS**：微信小程序生产环境**强制要求**使用 HTTPS 协议。你可以使用 Let's Encrypt 等工具获取免费证书。
3. **配置服务器合法域名**：
   - 登录 [微信公众平台](https://mp.weixin.qq.com/)。
   - 进入 “开发” -> “开发管理” -> “开发设置” -> “服务器域名”。
   - 在 `request合法域名` 中添加你的 HTTPS 域名。
4. **修改代码中的地址**：将 `frontend/app.js` 中的 `baseUrl` 从 `http://localhost:3000` 修改为你的正式 HTTPS 地址。
5. **云服务器**：你可以选择腾讯云、阿里云等提供的服务器或直接使用“微信云托管”来简化部署流程。

---

## 许可证
MIT
