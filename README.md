# OptionApp · 场外期权机构间交易平台

机构间场外期权（OTC Options）交易平台的 UI 原型。覆盖买方、卖方、销售三种角色，支持撮合与询价，面向民营券商客户。

> **Figma 设计稿**：[打开 Figma 文件](https://www.figma.com/design/tQb0ldzwnNv48pokX8zeFO)

## 功能范围

| 模式 | 说明 |
|---|---|
| **普通模式** | 香草期权的买入与行权（面向普通客户） |
| **专家模式** | 各类场外期权的双向报价、多腿组合买卖、Greeks 风险监控 |
| **销售模式** | 代理客户发起询价（RFQ）、报价流撮合、成交确认 |

- 嵌入 **场外百科**，供客户学习期权知识
- 复用 **TradeX** 的股票行情与资讯（以 TradeX 风格实现）
- 13 个界面（登录、首页、买入、行权、交易台、持仓、代理询价、百科列表/详情、行情、资讯、账户、询价详情）

## 快速开始（可点击原型）

```bash
npm install
npm run dev        # 本地开发，访问 http://localhost:5173
npm run build      # 生产构建
npm run preview    # 预览构建产物
```

原型使用 **React + Vite + TypeScript + react-router**，样式为单一 CSS 文件（`src/styles.css`），设计 token 与 Figma 一一对应（见 `design/design-doc.md`）。数据为本地 mock（`src/data.ts`），无需后端即可点击浏览全部界面。

## 目录结构

```
OptionApp/
├── design/
│   ├── design-doc.md       # 界面逐屏设计说明 + 设计 token
│   └── screenshots/        # Figma 界面截图
├── src/
│   ├── main.tsx            # 入口
│   ├── App.tsx             # 路由
│   ├── styles.css          # 设计 token + 组件样式
│   ├── data.ts             # mock 数据
│   ├── ui.tsx              # 应用外壳（侧栏/顶栏）+ UI 原语
│   └── pages.tsx           # 13 个页面组件
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 设计 token

| Token | 值 | 用途 |
|---|---|---|
| `--bg` | `#0F1218` | 页面背景 |
| `--surface` | `#161C26` | 卡片/面板 |
| `--surface2` | `#1C2431` | 输入框/次级元素 |
| `--border` | `#26303F` | 分隔线 |
| `--primary` | `#2E6BFF` | 品牌主色 |
| `--up` | `#F04438` | 上涨/买入（红） |
| `--down` | `#12B76A` | 下跌/卖出（绿） |
| `--warn` | `#F5A523` | 警告 |
| `--purple` | `#8B5CF6` | 专家/策略 |
