import type { ReactNode } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { indices } from './data'

// ---- navigation config ----
const NAV = [
  { label: '首页', to: '/home' },
  { label: '交易大厅', to: '/expert-trading' },
  { label: '持仓管理', to: '/expert-positions' },
  { label: '询价中心', to: '/sales-rfq' },
  { label: '场外百科', to: '/wiki' },
  { label: '行情', to: '/market' },
  { label: '资讯', to: '/news' },
]

const MODES = [
  { label: '普通', to: '/buy' },
  { label: '专家', to: '/expert-trading' },
  { label: '销售', to: '/sales-rfq' },
]

const META: Record<string, { title: string; nav: number; mode: string }> = {
  '/home': { title: '首页', nav: 0, mode: '专家' },
  '/buy': { title: '买入香草期权', nav: 1, mode: '普通' },
  '/exercise': { title: '行权管理', nav: 2, mode: '普通' },
  '/expert-trading': { title: '交易台', nav: 1, mode: '专家' },
  '/expert-positions': { title: '持仓管理', nav: 2, mode: '专家' },
  '/sales-rfq': { title: '代理询价', nav: 3, mode: '销售' },
  '/wiki': { title: '场外百科', nav: 4, mode: '专家' },
  '/market': { title: '行情 · TradeX', nav: 5, mode: '专家' },
  '/news': { title: '资讯 · TradeX', nav: 6, mode: '专家' },
  '/account': { title: '账户设置', nav: 0, mode: '专家' },
}

function getMeta(pathname: string) {
  if (META[pathname]) return META[pathname]
  if (pathname.startsWith('/wiki')) return { title: '场外百科', nav: 4, mode: '专家' }
  if (pathname.startsWith('/rfq')) return { title: '询价详情', nav: 3, mode: '销售' }
  return { title: 'OptionApp', nav: 0, mode: '专家' }
}

export function Shell() {
  const { pathname } = useLocation()
  const meta = getMeta(pathname)
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <span className="name">OptionApp</span>
          <span className="sub">场外期权交易平台</span>
        </div>
        <div className="mode-label">交易模式</div>
        <div className="mode-seg">
          {MODES.map((m) => (
            <Link key={m.label} className={`mode-btn ${m.label === meta.mode ? 'active' : ''}`} to={m.to}>
              {m.label}
            </Link>
          ))}
        </div>
        <nav className="nav">
          {NAV.map((n, i) => (
            <Link key={n.label} className={`nav-item ${i === meta.nav ? 'active' : ''}`} to={n.to}>
              <span className="dot" />
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="spacer" />
        <div className="user">
          <span className="avatar">王</span>
          <span className="meta">
            <span className="name">王经理 · {meta.mode}</span>
            <span className="org">民营证券</span>
          </span>
        </div>
      </aside>
      <div className="main">
        <header className="topbar">
          <span className="title">{meta.title}</span>
          <div className="search">搜索合约 / 标的</div>
          <div className="spacer" />
          {indices.map((ix) => (
            <div key={ix.symbol} className="ticker">
              <span className="lbl">{ix.symbol}</span>
              <span className={`val mono ${ix.up ? 'up' : 'down'}`}>
                {ix.last} {ix.change}
              </span>
            </div>
          ))}
          <span className="avatar">王</span>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

// ---- primitives ----
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>
}

export function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      {sub && <span className="sub">{sub}</span>}
    </div>
  )
}

export interface Col {
  h: string
  flex?: number
}

export function Table({ cols, rows }: { cols: Col[]; rows: ReactNode[][] }) {
  return (
    <div className="table">
      <div className="table-head">
        {cols.map((c, i) => (
          <span key={i} className="cell" style={{ flex: c.flex ?? 1 }}>
            {c.h}
          </span>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={i} className="table-row">
          {r.map((cell, j) => (
            <span key={j} className="cell" style={{ flex: cols[j]?.flex ?? 1 }}>
              {cell}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export function StatCard({ label, value, sub, color }: { label: string; value: string; sub: string; color?: string }) {
  return (
    <div className="card stat-card">
      <span className="label">{label}</span>
      <span className="value mono">{value}</span>
      <span className={`sub ${color ?? ''}`}>{sub}</span>
    </div>
  )
}

export function Button({ children, secondary = false, className = '' }: { children: ReactNode; secondary?: boolean; className?: string }) {
  return <button className={`btn ${secondary ? 'secondary' : ''} ${className}`}>{children}</button>
}

export function Tag({ children, color }: { children: ReactNode; color: string }) {
  return <span className={`tag ${color}`}>{children}</span>
}

export function Chip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return <button className={`chip ${active ? 'active' : ''}`}>{children}</button>
}

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="field">
      <span className="label">{label}</span>
      <div className="select">{value}</div>
    </div>
  )
}

export function Mono({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`mono ${className}`}>{children}</span>
}
