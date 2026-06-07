# WeChat Mini Program Ghibli Starter

![Preview](https://storage.googleapis.com/interaction-media-bucket/ce5d1a07-4da0-4d3d-9374-86ac0b1a96b2/6db67657-d915-488b-9c39-94b03bf87a56?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=vercel%40theta-eon-430220-u6.iam.gserviceaccount.com%2F20260607%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260607T131503Z&X-Goog-Expires=60&X-Goog-SignedHeaders=host&X-Goog-Signature=8cf5f58e07f2f6478cbfac76cd29dcaa1830f656205d028fdd3f01b96c3eab98cc55a563008cd9e75819cdadceefd97e57ec7a01fe07456213504ecf7207e056937be542582df86c401877f29c9718a961b71f08908c2c4047fd61e8fb8d9da94e4dfd8b8e8760f0037b1855ad5821a5bcce4ae071ace88dc5779731aa85b638b5254d9d676ad348c159c721730263cb9289f893df042503d045e97d8ca2b8553a55d4c22635e690be130c774bf4e1e5ccf3a3bd229da5ac8cb1233183e8120d094318ac0ec6c7a75ea2b9f2dd37af40bafc536fb739c97cf40d13c237d172e6d461ed475c0bc8679e3b8b8f5bcb78d485f12fec12347dfff263ab4634210725)

## 项目简介
这是一个基于吉卜力风格设计的微信小程序聊天入门套件。包含现代化的前端界面和基于 Node.js 的后端代理服务。

## 1. 环境准备
- **Node.js**: 请前往 [Node.js 官网](https://nodejs.org/) 下载并安装。
- **微信开发者工具**: 请前往 [微信开放平台](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html) 下载安装。

## 2. 后端部署 (本地运行)
1. 进入 `backend` 目录。
2. 运行 `npm install` 安装依赖。
3. 运行 `node server.js` 启动服务器（默认运行在 http://localhost:3000）。

## 3. 前端部署 (微信开发者工具)
1. 打开微信开发者工具，点击“导入项目”，选择 `frontend` 文件夹。
2. **重要步骤**: 在开发者工具右上角点击 **“详情” -> “本地设置”**，勾选 **“不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书”**。这样你才能在本地测试 HTTP 请求。
3. 编译运行，即可开始聊天。

## 4. 生产环境提示
- **域名与 SSL**: 微信小程序生产环境要求使用 HTTPS。你需要购买域名并配置 SSL 证书。
- **服务器域名登记**: 在微信公众平台后台的“开发管理 -> 开发设置”中，将你的 HTTPS 域名添加到“request 合法域名”列表中。
