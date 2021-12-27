import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-location'
import { GridNavigation } from '../../GridNavigation'
export const Investments = () => {
  const links = [
    {
      to: '/investments/gold',
      title: 'Jewelry/Digial Gold',
    },
    {
      to: '/investments/mutual-funds',
      title: 'Mutual Funds',
    },
    {
      to: '/investments/stocks-bonds',
      title: 'Stocks/Bonds',
    },
    {
      to: '/investments/ppf',
      title: 'PPF',
    },
  ]
  return (
    <>
      <Heading as="h2" size="lg" isTruncated mb="8">
        Investments
      </Heading>
      <GridNavigation links={links} />
      <Outlet />
    </>
  )
}
