// ---- Mock data for the OptionApp clickable prototype ----

export type Mode = '普通' | '专家' | '销售'

export interface Quote {
  symbol: string
  name: string
  last: string
  change: string
  up: boolean
  vol?: string
  iv?: string
}

export const indices: Quote[] = [
  { symbol: '沪深300', name: '沪深300', last: '3,847.21', change: '+1.21%', up: true },
  { symbol: '上证50', name: '上证50', last: '2,614.83', change: '+0.87%', up: true },
  { symbol: '中证500', name: '中证500', last: '5,912.44', change: '-0.32%', up: false },
]

export const marketQuotes: Quote[] = [
  { symbol: '510300', name: '沪深300 ETF', last: '3.847', change: '+1.21%', up: true, iv: '18.4%' },
  { symbol: '510050', name: '上证50 ETF', last: '2.615', change: '+0.87%', up: true, iv: '17.9%' },
  { symbol: '510500', name: '中证500', last: '5.912', change: '-0.32%', up: false, iv: '22.1%' },
  { symbol: '159915', name: '创业板ETF', last: '2.041', change: '+2.13%', up: true, iv: '26.8%' },
  { symbol: '588000', name: '科创50', last: '0.982', change: '-0.54%', up: false, iv: '29.3%' },
  { symbol: '513180', name: '恒生科技ETF', last: '0.548', change: '+0.91%', up: true, iv: '31.6%' },
]

export interface ChainRow {
  strike: string
  bid: string
  ask: string
  iv: string
  volume: string
}

export const optionChain: ChainRow[] = [
  { strike: '3.600', bid: '0.085', ask: '0.092', iv: '18.4%', volume: '12,840' },
  { strike: '3.700', bid: '0.062', ask: '0.068', iv: '18.9%', volume: '21,305' },
  { strike: '3.800', bid: '0.044', ask: '0.049', iv: '19.3%', volume: '33,126' },
  { strike: '3.900', bid: '0.031', ask: '0.034', iv: '19.8%', volume: '27,410' },
]

export interface ExerciseRow {
  contract: string
  strike: string
  expiry: string
  qty: string
  last: string
  intrinsic: string
  up: boolean
  action: string
}

export const exerciseList: ExerciseRow[] = [
  { contract: '沪深300 看涨 3.800', strike: '3.800', expiry: '2026-12-05', qty: '10', last: '3.847', intrinsic: '+¥470', up: true, action: '行权' },
  { contract: '沪深300 看涨 3.900', strike: '3.900', expiry: '2026-12-05', qty: '20', last: '3.847', intrinsic: '-¥1,060', up: false, action: '放弃' },
  { contract: '上证50 看跌 2.700', strike: '2.700', expiry: '2026-12-19', qty: '15', last: '2.615', intrinsic: '+¥1,275', up: true, action: '行权' },
]

export interface RfqBookRow {
  underlying: string
  structure: string
  tenor: string
  bid: string
  ask: string
  spread: string
  size: string
}

export const rfqBook: RfqBookRow[] = [
  { underlying: '沪深300 ETF', structure: '香草看涨', tenor: '1M', bid: '18.2%', ask: '18.8%', spread: '0.6%', size: '500' },
  { underlying: '中证500', structure: '香草看跌', tenor: '2M', bid: '22.5%', ask: '23.1%', spread: '0.6%', size: '300' },
  { underlying: '上证50 ETF', structure: '牛市价差', tenor: '3M', bid: '17.9%', ask: '18.6%', spread: '0.7%', size: '200' },
  { underlying: '创业板ETF', structure: '跨式', tenor: '1M', bid: '26.2%', ask: '27.0%', spread: '0.8%', size: '150' },
]

export interface TradeRow {
  time: string
  contract: string
  side: '买入' | '卖出'
  price: string
  notional: string
}

export const recentTrades: TradeRow[] = [
  { time: '10:32:15', contract: '沪深300 看涨 3.800', side: '买入', price: '0.046', notional: '¥380,000' },
  { time: '10:28:44', contract: '上证50 看跌 2.700', side: '卖出', price: '0.031', notional: '¥405,000' },
  { time: '10:15:02', contract: '中证500 看涨 5.900', side: '买入', price: '0.058', notional: '¥590,000' },
]

export interface PositionRow {
  contract: string
  side: string
  up: boolean
  qty: string
  cost: string
  last: string
  pnl: string
  delta: string
}

export const positions: PositionRow[] = [
  { contract: '沪深300 看涨 3.800', side: '买入', up: true, qty: '10', cost: '0.046', last: '0.071', pnl: '+¥950', delta: '+0.55' },
  { contract: '上证50 看跌 2.700', side: '卖出', up: false, qty: '15', cost: '0.031', last: '0.026', pnl: '+¥280', delta: '-0.38' },
  { contract: '中证500 看涨 5.900', side: '买入', up: true, qty: '8', cost: '0.058', last: '0.064', pnl: '+¥130', delta: '+0.29' },
  { contract: '创业板ETF 跨式', side: '买入', up: true, qty: '6', cost: '0.112', last: '0.098', pnl: '-¥340', delta: '+0.02' },
]

export interface RfqRow {
  id: string
  client: string
  underlying: string
  structure: string
  status: string
  statusColor: string
  quotes: string
  time: string
}

export const rfqList: RfqRow[] = [
  { id: 'RFQ-2026-1108-01', client: '张总', underlying: '沪深300 ETF', structure: '香草看涨', status: '待报价', statusColor: 'warn', quotes: '3', time: '10:20' },
  { id: 'RFQ-2026-1108-02', client: '李总', underlying: '上证50 ETF', structure: '香草看跌', status: '已报价', statusColor: 'primary', quotes: '5', time: '09:58' },
  { id: 'RFQ-2026-1108-03', client: '王总', underlying: '中证500', structure: '牛市价差', status: '已成交', statusColor: 'down', quotes: '6', time: '09:31' },
]

export interface CounterQuote {
  cp: string
  vol: string
  premium: string
  valid: string
  best?: boolean
}

export const counterQuotes: CounterQuote[] = [
  { cp: '华泰证券', vol: '18.6%', premium: '¥46,500', valid: '10:30', best: true },
  { cp: '中信证券', vol: '18.9%', premium: '¥47,250', valid: '10:31' },
  { cp: '国泰君安', vol: '19.1%', premium: '¥47,750', valid: '10:32' },
]

export interface Article {
  title: string
  summary: string
  category: string
  color: string
  read: string
  content?: string[]
}

export const articles: Article[] = [
  { title: '什么是场外期权？一篇文章讲清楚', summary: '场外期权是在交易所之外由买卖双方协商达成的期权合约，具有灵活定制结构的特点。', category: '入门', color: 'primary', read: '2,340 人已读' },
  { title: '香草期权 vs 奇异期权：区别在哪', summary: '香草期权是标准化的看涨/看跌期权，而奇异期权包含障碍、二元等复杂结构。', category: '入门', color: 'primary', read: '1,876 人已读' },
  { title: '牛市价差策略详解：构建与盈亏', summary: '通过买入低行权价看涨、卖出高行权价看涨，锁定有限收益与有限风险。', category: '期权策略', color: 'purple', read: '1,205 人已读' },
  { title: 'Delta 与 Gamma：理解期权敏感性', summary: 'Delta 衡量价格变动对期权价值的影响，Gamma 则衡量 Delta 的变化速率。', category: '希腊字母', color: 'warn', read: '986 人已读' },
  { title: '期权卖方风险管理要点', summary: '作为卖方需要关注保证金、尾部风险与波动率上升带来的潜在损失。', category: '风险管理', color: 'down', read: '734 人已读' },
  { title: '场外期权交易监管框架解读', summary: '了解国内场外期权业务的监管规定与合格投资者准入要求。', category: '法规', color: 'up', read: '512 人已读' },
]

export const wikiDetail: Article = {
  title: '什么是场外期权？一篇文章讲清楚',
  summary: '',
  category: '入门',
  color: 'primary',
  read: '发布于 2026-11-06 · 阅读约 8 分钟 · 作者：研究部',
  content: [
    ['一、场外期权的定义', '场外期权（OTC Options）是指在交易所之外，由买卖双方通过一对一协商达成的期权合约。与交易所标准化期权不同，场外期权的行权价、到期日、合约规模与收益结构均可根据客户需求灵活定制。'],
    ['二、场外期权的主要类型', '按收益结构划分，场外期权主要包括香草期权与奇异期权两大类。香草期权是最基础的看涨（Call）与看跌（Put）期权；奇异期权则包括障碍期权、二元期权、亚式期权等复杂结构。'],
    ['三、参与场外期权的意义', '对于机构投资者而言，场外期权是风险管理与收益增强的重要工具。买方通过支付有限的权利金锁定下行风险，卖方则通过收取权利金获取收益，但需承担潜在的市场波动风险。'],
  ],
}

export interface NewsItem {
  title: string
  source: string
  time: string
  summary: string
}

export const newsList: NewsItem[] = [
  { title: '央行开展 3000 亿元 MLF 操作，利率维持不变', source: '财联社', time: '10 分钟前', summary: '为维护银行体系流动性合理充裕，央行今日开展 3000 亿元中期借贷便利操作。' },
  { title: '沪深两市成交额连续三日突破万亿元', source: '证券时报', time: '32 分钟前', summary: '市场情绪回暖，北向资金全天净流入超 45 亿元。' },
  { title: '多家券商上调四季度权益市场配置比例', source: '中国证券报', time: '1 小时前', summary: '机构认为政策预期与盈利改善将共同支撑市场表现。' },
  { title: '科创50指数午后走强，半导体板块领涨', source: '上海证券报', time: '2 小时前', summary: '国产替代逻辑持续演绎，半导体设备与材料板块表现活跃。' },
]

export const homeStats = [
  { label: '持仓市值', value: '¥2,847,500', sub: '+2.40% 较昨日', color: 'up' },
  { label: '今日盈亏', value: '+¥38,200', sub: '+1.36%', color: 'up' },
  { label: '待处理询价', value: '12 笔', sub: '3 笔待报价', color: 'warn' },
  { label: '持仓合约', value: '23 只', sub: '本月 +5', color: 'primary' },
]
