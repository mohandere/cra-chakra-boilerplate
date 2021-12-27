import React from 'react'
import { GridNavigation } from './GridNavigation'

export const PrimaryNavigation = () => {
  const links = [
    {
      to: '/',
      title: 'Home',
    },
    /* {
      to: '/whole-family',
      title: `Whole Family`,
    },
    {
      to: '/mohan-ka-family',
      title: `Mohan's Ka Family`,
    },
    {
      to: '/sagar-ka-family',
      title: `Sagar's Ka Family`,
    }, */
    {
      to: 'investments',
      title: 'Investments',
    },
    {
      to: 'insurances',
      title: 'Insurances',
    },
    {
      to: 'pf',
      title: 'PF',
    },
    {
      to: 'vehicles',
      title: 'Vehicles',
    },
    {
      to: 'land',
      title: 'Land',
    },
    {
      to: 'homes',
      title: 'Homes',
    },
    {
      to: 'tax',
      title: 'Income Tax',
    },
    {
      to: '/knowledge-base',
      title: 'Knowledge Base',
    },
  ]
  return <GridNavigation links={links} />
}
