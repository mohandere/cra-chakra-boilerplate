import React from 'react'
import { GridNavigation } from './GridNavigation'

export const PrimaryNavigation = () => {
  const links = [
    {
      to: '/',
      title: 'Home',
    },
    {
      to: '/about',
      title: 'About',
    },
  ]
  return <GridNavigation links={links} />
}
