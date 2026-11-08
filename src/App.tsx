import { Routes, Route, Navigate } from 'react-router-dom'
import { Shell } from './ui'
import {
  Login,
  Home,
  BuyVanilla,
  Exercise,
  ExpertTrading,
  ExpertPositions,
  SalesRfq,
  WikiList,
  WikiDetail,
  Market,
  News,
  Account,
  RfqDetail,
} from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Shell />}>
        <Route path="/home" element={<Home />} />
        <Route path="/buy" element={<BuyVanilla />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/expert-trading" element={<ExpertTrading />} />
        <Route path="/expert-positions" element={<ExpertPositions />} />
        <Route path="/sales-rfq" element={<SalesRfq />} />
        <Route path="/wiki" element={<WikiList />} />
        <Route path="/wiki/:id" element={<WikiDetail />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<News />} />
        <Route path="/account" element={<Account />} />
        <Route path="/rfq/:id" element={<RfqDetail />} />
      </Route>
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}
