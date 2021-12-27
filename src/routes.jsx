import React from 'react'
import { Home } from './Home'
import { Insurances } from './app/Insurances/Index'
import { Investments } from './app/Investments/Index'
import { Gold } from './app/Investments/Gold'
import { MutualFunds } from './app/Investments/MutualFunds'
import { StocksBonds } from './app/Investments/StocksBonds'
import { PPF } from './app/Investments/PPF'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/insurances', element: <Insurances /> },
  {
    path: '/investments',
    element: <Investments />,
    children: [
      { path: 'gold', element: <Gold /> },
      { path: 'mutual-funds', element: <MutualFunds /> },
      { path: 'stocks-bonds', element: <StocksBonds /> },
      { path: 'ppf', element: <PPF /> },
    ],
  },
]
