# 曼谷・清迈旅行攻略网站

一个使用 HTML、CSS 和原生 JavaScript 制作的单页旅行攻略网站。

## 功能

- 手机端优先的响应式页面
- 旅行倒计时
- 每日行程时间轴
- 航班与夜间火车信息
- 酒店信息
- 景点、餐厅与购物清单
- Google Maps 地图搜索按钮
- 预约状态
- 行李与待办清单
- 使用 localStorage 保存勾选状态
- 风险提醒
- 预算与紧急信息占位
- 自动按 2026 年真实日期显示星期

## 项目文件

```text
thailand-trip/
├── index.html
├── style.css
├── trip-data.js
├── script.js
└── README.md
```

## 本地查看

下载所有文件并放在同一个文件夹内。

可以直接双击打开 `index.html`。

如果浏览器有本地文件限制，建议使用本地静态服务器。

### 使用 Python

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 修改行程

旅行资料集中保存在：

```text
trip-data.js
```

修改日期、酒店、交通或每日安排后，刷新页面即可看到变化。

请注意：

1. 日期使用 `YYYY-MM-DD` 格式。
2. 不确定的信息应写成“待确认”。
3. 不要在公开页面放置护照号码、银行卡信息、完整订单二维码或可修改订单的私人链接。
4. 地图按钮使用地点名称生成 Google Maps 搜索链接。
5. 价格、营业时间、签证及交通规则应在出发前通过官方渠道复核。

## 清单数据说明

待办和行李的勾选状态保存在浏览器的 `localStorage` 中。

这意味着：

- 刷新网页后勾选状态通常仍会保留。
- 不同手机之间不会自动同步。
- 清除浏览器数据后，勾选状态可能丢失。
- 点击清单右上角“重置”可以清除当前清单状态。

如果需要多人实时同步，需要再接入在线数据库或在线表格。

## 部署到 GitHub Pages

### 1. 创建 GitHub 仓库

在 GitHub 创建一个新仓库，例如：

```text
thailand-trip
```

### 2. 上传文件

把以下文件上传到仓库根目录：

```text
index.html
style.css
trip-data.js
script.js
README.md
```

### 3. 开启 GitHub Pages

进入仓库：

```text
Settings → Pages
```

在 `Build and deployment` 中选择：

```text
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

保存后等待部署完成。

网站地址通常为：

```text
https://你的用户名.github.io/thailand-trip/
```

## 部署到 Cloudflare Pages

### 方法一：连接 GitHub

1. 登录 Cloudflare。
2. 进入 `Workers & Pages`。
3. 选择创建 Pages 项目。
4. 连接 GitHub。
5. 选择 `thailand-trip` 仓库。
6. 该项目是纯静态网站，不需要构建命令。
7. 如果界面要求填写输出目录，使用：

```text
/
```

8. 点击部署。

部署完成后会获得类似地址：

```text
https://thailand-trip.pages.dev
```

以后更新 GitHub 仓库，Cloudflare Pages 会自动重新部署，网址不变。

### 方法二：直接上传

也可以在 Cloudflare Pages 中选择直接上传，将项目文件夹或压缩包上传。

直接上传适合快速发布，但长期维护更建议连接 GitHub。

## 自定义域名

如果已经拥有域名，可以在 Cloudflare Pages 项目的：

```text
Custom domains
```

中绑定自己的域名，例如：

```text
trip.example.com
```

## 出发前的重要检查

目前行程中最重要的风险是：

```text
10月6日06:20夜间火车抵达曼谷，
lxr、熊需要衔接当天11:00起飞的国际航班。
```

出发前务必核实：

- 火车实际抵达哪个车站
- 火车晚点概率
- 车站到素万纳普机场的交通方案
- 早高峰预计耗时
- CX750停止办理值机的时间
- 国际航班建议提前到达时间
- 火车严重晚点时的替代交通方案

价格、营业时间、签证、入境政策及交通规则可能变化，请以官方最新信息为准。
