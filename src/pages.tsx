import { Link, useParams } from 'react-router-dom'
import { Card, PageTitle, Table, StatCard, Button, Tag, Chip, Field, Mono } from './ui'
import {
  marketQuotes,
  optionChain,
  exerciseList,
  rfqBook,
  recentTrades,
  positions,
  rfqList,
  counterQuotes,
  articles,
  wikiDetail,
  newsList,
  homeStats,
} from './data'

// ---- 1. Login ----
export function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>OptionApp</h1>
        <span className="sub">场外期权机构间交易平台</span>
        <div className="input">手机号 / 邮箱</div>
        <div className="input">请输入密码</div>
        <Button className="wide">登 录</Button>
        <div className="login-links">
          <span className="dim">忘记密码</span>
          <a href="/home">申请开通账户</a>
        </div>
        <span className="agreement">登录即代表同意《用户协议》与《风险揭示书》</span>
      </div>
    </div>
  )
}

// ---- 2. Home ----
export function Home() {
  return (
    <>
      <PageTitle title="下午好，王经理" sub="欢迎回来 · 这里是今天的市场概览" />
      <div className="stat-row">
        {homeStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} sub={s.sub} color={s.color} />
        ))}
      </div>
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 300px' }}>
        <Card>
          <span className="card-title">标的行情</span>
          <Table
            cols={[{ h: '标的', flex: 2 }, { h: '最新价', flex: 1.5 }, { h: '涨跌幅', flex: 1 }, { h: '隐含波动率', flex: 1 }]}
            rows={marketQuotes.map((q) => [
              q.name,
              <Mono key="p">{q.last}</Mono>,
              <Mono key="c" className={q.up ? 'up' : 'down'}>{q.change}</Mono>,
              <Mono key="iv" className="text2">{q.iv}</Mono>,
            ])}
          />
        </Card>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card>
            <span className="card-title">快捷操作</span>
            <Link to="/buy"><Button className="wide" secondary>买入香草期权</Button></Link>
            <Link to="/sales-rfq"><Button className="wide" secondary>发起代理询价</Button></Link>
            <Link to="/expert-positions"><Button className="wide" secondary>查看持仓明细</Button></Link>
            <Link to="/wiki"><Button className="wide" secondary>学习场外百科</Button></Link>
          </Card>
          <Card>
            <span className="card-title">市场快讯</span>
            <div className="news-item">
              <span className="text2">央行开展 3000 亿元 MLF 操作</span>
              <span className="text3">09:42</span>
            </div>
            <div className="news-item">
              <span className="text2">沪深两市成交额突破 8000 亿</span>
              <span className="text3">10:15</span>
            </div>
            <div className="news-item">
              <span className="text2">北向资金净流入 45 亿元</span>
              <span className="text3">11:03</span>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

// ---- 3. 普通·买入 ----
export function BuyVanilla() {
  return (
    <>
      <PageTitle title="买入香草期权" sub="普通模式 · 仅支持香草看涨/看跌期权的买入与行权" />
      <Card>
        <div className="form-row">
          <Field label="标的" value="沪深300 ETF ▾" />
          <Field label="方向" value="看涨" />
          <Field label="期限" value="1 个月 ▾" />
        </div>
      </Card>
      <Card>
        <span className="card-title">期权合约链</span>
        <Table
          cols={[{ h: '行权价' }, { h: '买价' }, { h: '卖价' }, { h: '隐含波动率' }, { h: '成交量' }]}
          rows={optionChain.map((r) => [
            <Mono key="s">{r.strike}</Mono>,
            <Mono key="b" className="up">{r.bid}</Mono>,
            <Mono key="a" className="down">{r.ask}</Mono>,
            <Mono key="iv">{r.iv}</Mono>,
            <Mono key="v">{r.volume}</Mono>,
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">下单</span>
        <div className="form-row">
          <span>行权价 <Mono>3.800</Mono></span>
          <Field label="数量" value="10 张" />
        </div>
        <div className="form-row">
          <span className="text2">名义本金</span>
          <Mono className="up">¥380,000</Mono>
          <span className="text2">预估权利金</span>
          <Mono className="up">¥4,900</Mono>
        </div>
        <Button className="wide">提交买入订单</Button>
        <span className="text3">☐ 我已阅读并同意《场外期权风险揭示书》</span>
      </Card>
    </>
  )
}

// ---- 4. 普通·行权 ----
export function Exercise() {
  return (
    <>
      <PageTitle title="行权管理" sub="普通模式 · 到期行权 / 放弃" />
      <Card>
        <span className="card-title">可行权合约</span>
        <Table
          cols={[{ h: '合约', flex: 2 }, { h: '行权价' }, { h: '到期日' }, { h: '持仓量' }, { h: '现价' }, { h: '内在价值' }, { h: '操作' }]}
          rows={exerciseList.map((r) => [
            r.contract,
            <Mono key="s">{r.strike}</Mono>,
            r.expiry,
            <Mono key="q">{r.qty}</Mono>,
            <Mono key="l">{r.last}</Mono>,
            <Mono key="i" className={r.up ? 'up' : 'text2'}>{r.intrinsic}</Mono>,
            <span key="a" className={r.action === '行权' ? 'primary' : 'text3'}>{r.action}</span>,
          ])}
        />
      </Card>
      <Card>
        <span className="text2">⚠ 行权申请需在到期日 15:00 前提交，逾期默认按现金结算处理。</span>
      </Card>
    </>
  )
}

// ---- 5. 专家·交易台 ----
export function ExpertTrading() {
  return (
    <>
      <PageTitle title="交易台" sub="专家模式 · 双向报价 / 多腿组合 / 做市" />
      <Card>
        <span className="card-title">实时双向报价 · RFQ</span>
        <Table
          cols={[{ h: '标的', flex: 2 }, { h: '结构' }, { h: '期限' }, { h: '买价' }, { h: '卖价' }, { h: '价差' }, { h: '量(万)' }]}
          rows={rfqBook.map((r) => [
            r.underlying,
            r.structure,
            r.tenor,
            <Mono key="b" className="down">{r.bid}</Mono>,
            <Mono key="a" className="up">{r.ask}</Mono>,
            <Mono key="s">{r.spread}</Mono>,
            <Mono key="z">{r.size}</Mono>,
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">下单 · 期权组合</span>
        <div className="chips">
          <Chip active>香草</Chip>
          <Chip>价差</Chip>
          <Chip>跨式</Chip>
          <Chip>宽跨式</Chip>
        </div>
        <span className="text2">风险指标 (Greeks)</span>
        <div className="stat-row">
          <StatCard label="Delta" value="+0.52" sub="" color="up" />
          <StatCard label="Gamma" value="+0.18" sub="" color="up" />
          <StatCard label="Vega" value="+0.09" sub="" color="up" />
          <StatCard label="Theta" value="-0.03" sub="" color="down" />
        </div>
        <Button className="wide">提交双向报价</Button>
      </Card>
      <Card>
        <span className="card-title">最近成交</span>
        <Table
          cols={[{ h: '时间' }, { h: '合约', flex: 2 }, { h: '方向' }, { h: '成交价' }, { h: '名义本金' }]}
          rows={recentTrades.map((r) => [
            r.time,
            r.contract,
            <span key="d" className={r.side === '买入' ? 'up' : 'down'}>{r.side}</span>,
            <Mono key="p">{r.price}</Mono>,
            <Mono key="n">{r.notional}</Mono>,
          ])}
        />
      </Card>
    </>
  )
}

// ---- 6. 专家·持仓 ----
export function ExpertPositions() {
  return (
    <>
      <PageTitle title="持仓管理" sub="专家模式 · 组合风险与 Greeks 监控" />
      <div className="stat-row">
        <StatCard label="总名义本金" value="¥5,820,000" sub="" />
        <StatCard label="净 Delta" value="+0.41" sub="" color="up" />
        <StatCard label="净 Gamma" value="+0.12" sub="" color="up" />
        <StatCard label="浮动盈亏" value="+¥86,400" sub="" color="up" />
      </div>
      <Card>
        <span className="card-title">持仓明细</span>
        <Table
          cols={[{ h: '合约', flex: 2 }, { h: '方向' }, { h: '数量' }, { h: '成本' }, { h: '现价' }, { h: '盈亏' }, { h: 'Delta' }]}
          rows={positions.map((r) => [
            r.contract,
            <span key="d" className={r.up ? 'up' : 'down'}>{r.side}</span>,
            <Mono key="q">{r.qty}</Mono>,
            <Mono key="c">{r.cost}</Mono>,
            <Mono key="l">{r.last}</Mono>,
            <Mono key="p" className={r.pnl.startsWith('+') ? 'up' : 'down'}>{r.pnl}</Mono>,
            <Mono key="g">{r.delta}</Mono>,
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">组合风险监控</span>
        <div className="form-row">
          <span className="text2">保证金占用</span>
          <Mono>¥1,164,000</Mono>
          <span className="text2">风险度</span>
          <Mono className="warn">20.0%</Mono>
          <span className="text2">最大回撤预警</span>
          <span className="down">未触发</span>
        </div>
      </Card>
    </>
  )
}

// ---- 7. 销售·代理询价 ----
export function SalesRfq() {
  return (
    <>
      <PageTitle title="代理询价" sub="销售模式 · 代客户发起询价并撮合报价" />
      <Card>
        <span className="card-title">发起询价</span>
        <div className="form-row">
          <Field label="客户" value="张总 · 机构客户" />
          <Field label="标的" value="沪深300 ETF" />
          <Field label="结构" value="香草看涨" />
          <Field label="期限" value="1M" />
          <Field label="名义本金" value="¥500 万" />
        </div>
        <Button className="wide">发起询价</Button>
      </Card>
      <Card>
        <span className="card-title">询价列表</span>
        <Table
          cols={[{ h: '编号', flex: 1.6 }, { h: '客户' }, { h: '标的' }, { h: '结构' }, { h: '状态' }, { h: '报价数' }, { h: '时间' }]}
          rows={rfqList.map((r) => [
            <Link key="id" to={`/rfq/${r.id}`} className="primary">{r.id}</Link>,
            r.client,
            r.underlying,
            r.structure,
            <span key="s" className={r.statusColor}>{r.status}</span>,
            <Mono key="q">{r.quotes}</Mono>,
            r.time,
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">报价流 · RFQ-2026-1108-01</span>
        <Table
          cols={[{ h: '对手方', flex: 2 }, { h: '报价(vol)' }, { h: '有效期' }, { h: '状态' }]}
          rows={counterQuotes.map((r) => [
            r.cp,
            <Mono key="v" className={r.best ? 'down' : 'up'}>{r.vol}</Mono>,
            r.valid,
            <span key="s" className={r.best ? 'down' : 'text2'}>{r.best ? '最优' : '有效'}</span>,
          ])}
        />
      </Card>
    </>
  )
}

// ---- 8. 场外百科·列表 ----
export function WikiList() {
  return (
    <>
      <PageTitle title="场外百科" sub="学习场外期权知识，从入门到进阶" />
      <div className="chips">
        <Chip active>全部</Chip>
        <Chip>入门</Chip>
        <Chip>期权策略</Chip>
        <Chip>风险管理</Chip>
        <Chip>希腊字母</Chip>
        <Chip>法规</Chip>
      </div>
      <div className="grid-2">
        {articles.map((a, i) => (
          <Card key={i}>
            <Tag color={a.color}>{a.category}</Tag>
            <Link to={`/wiki/${i}`} className="card-title">{a.title}</Link>
            <span className="text2">{a.summary}</span>
            <span className="text3">{a.read} · 阅读约 8 分钟</span>
          </Card>
        ))}
      </div>
    </>
  )
}

// ---- 9. 场外百科·详情 ----
export function WikiDetail() {
  const { id } = useParams()
  const article = id != null ? articles[Number(id)] ?? wikiDetail : wikiDetail
  return (
    <>
      <PageTitle title="场外百科" />
      <div className="grid-2" style={{ gridTemplateColumns: '1fr 260px' }}>
        <Card className="article-body">
          <Tag color={article.color}>{article.category}</Tag>
          <h1>{article.title}</h1>
          <div className="article-meta">{wikiDetail.read}</div>
          {(article.content ?? wikiDetail.content)!.map(([h, p]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
        </Card>
        <Card>
          <span className="card-title">目录</span>
          <span className="text2">一、场外期权的定义</span>
          <span className="text2">二、场外期权的主要类型</span>
          <span className="text2">三、参与场外期权的意义</span>
          <span className="text3">四、风险提示</span>
        </Card>
      </div>
    </>
  )
}

// ---- 10. TradeX·行情 ----
export function Market() {
  const bars = [40, 52, 48, 60, 56, 70, 66, 74, 62, 78, 72, 84, 80, 88, 76, 82, 86, 90, 84, 94, 88, 96, 92, 98]
  return (
    <>
      <PageTitle title="股票行情" sub="TradeX 行情数据 · 期权标的实时价格" />
      <div className="stat-row">
        {marketQuotes.slice(0, 4).map((q) => (
          <StatCard key={q.symbol} label={q.name} value={q.last} sub={q.change} color={q.up ? 'up' : 'down'} />
        ))}
      </div>
      <Card>
        <span className="card-title">行情列表</span>
        <Table
          cols={[{ h: '代码' }, { h: '名称', flex: 2 }, { h: '最新价' }, { h: '涨跌幅' }, { h: '成交额' }]}
          rows={marketQuotes.map((q) => [
            q.symbol,
            q.name,
            <Mono key="l">{q.last}</Mono>,
            <Mono key="c" className={q.up ? 'up' : 'down'}>{q.change}</Mono>,
            q.vol ?? '—',
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">沪深300 ETF · 日内走势</span>
        <div className="bars">
          {bars.map((h, i) => (
            <div key={i} className="bar" style={{ height: h, background: i % 2 === 0 ? 'rgba(240,68,56,0.7)' : 'rgba(46,107,255,0.6)' }} />
          ))}
        </div>
      </Card>
    </>
  )
}

// ---- 11. TradeX·资讯 ----
export function News() {
  return (
    <>
      <PageTitle title="市场资讯" sub="TradeX 资讯 · 实时财经新闻与深度解读" />
      <div className="chips">
        <Chip active>全部</Chip>
        <Chip>要闻</Chip>
        <Chip>宏观</Chip>
        <Chip>行业</Chip>
        <Chip>公司</Chip>
      </div>
      {newsList.map((n) => (
        <Card key={n.title}>
          <span className="card-title">{n.title}</span>
          <span className="text2">{n.summary}</span>
          <span className="text3"><span className="primary">{n.source}</span> · {n.time}</span>
        </Card>
      ))}
    </>
  )
}

// ---- 12. 账户/设置 ----
export function Account() {
  return (
    <>
      <PageTitle title="账户设置" sub="个人信息与交易权限管理" />
      <Card>
        <span className="card-title">个人信息</span>
        <div className="form-row"><span className="text2" style={{ width: 140 }}>姓名</span><span>王经理</span></div>
        <div className="form-row"><span className="text2" style={{ width: 140 }}>机构</span><span>民营证券股份有限公司</span></div>
        <div className="form-row"><span className="text2" style={{ width: 140 }}>联系方式</span><span>138****8000</span></div>
        <div className="form-row"><span className="text2" style={{ width: 140 }}>客户类型</span><span>合格机构投资者</span></div>
      </Card>
      <Card>
        <span className="card-title">交易模式权限</span>
        <div className="form-row"><span style={{ width: 200 }}>普通模式 · 香草期权买入与行权</span><span className="pill on">已开通</span></div>
        <div className="form-row"><span style={{ width: 200 }}>专家模式 · 复杂结构与多腿组合</span><span className="pill on">已开通</span></div>
        <div className="form-row"><span style={{ width: 200 }}>销售模式 · 代理客户询价与撮合</span><span className="pill off">未开通</span></div>
      </Card>
      <Card>
        <span className="card-title">安全与通知</span>
        <span className="text2">登录密码：••••••••　修改</span>
        <span className="text2">交易确认短信：已开启</span>
        <span className="text2">询价提醒推送：已开启</span>
      </Card>
    </>
  )
}

// ---- 13. 询价详情/成交单 ----
export function RfqDetail() {
  const { id } = useParams()
  return (
    <>
      <PageTitle title={`询价详情 · ${id ?? 'RFQ-2026-1108-01'}`} sub="销售模式 · 报价对比与成交确认" />
      <Card>
        <span className="card-title">询价信息</span>
        <div className="form-row">
          <span className="text2">客户：张总</span>
          <span className="text2">标的：沪深300 ETF</span>
          <span className="text2">结构：香草看涨</span>
          <span className="text2">期限：1M</span>
          <span className="text2">名义本金：¥500 万</span>
        </div>
      </Card>
      <Card>
        <span className="card-title">报价对比</span>
        <Table
          cols={[{ h: '对手方', flex: 2 }, { h: '报价(vol)' }, { h: '权利金' }, { h: '有效期' }, { h: '操作' }]}
          rows={counterQuotes.map((r) => [
            r.cp,
            <Mono key="v" className={r.best ? 'down' : 'up'}>{r.vol}</Mono>,
            <Mono key="p">{r.premium}</Mono>,
            r.valid,
            <span key="o" className={r.best ? 'down' : 'primary'}>选择</span>,
          ])}
        />
      </Card>
      <Card>
        <span className="card-title">成交确认</span>
        <div className="form-row">
          <span className="text2">最优报价</span>
          <Mono className="down">华泰证券 · 18.6% · ¥46,500</Mono>
        </div>
        <div className="form-row">
          <Button>确认成交</Button>
          <Button secondary>拒绝</Button>
        </div>
      </Card>
    </>
  )
}
