import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GridNavigation } from '../../GridNavigation'

export const Insurances = () => {
  const links = [
    {
      to: '/insurances',
      title: 'Insurances',
    },
    {
      to: '/insurances/health',
      title: 'Health',
    },
    {
      to: '/insurances/bikes',
      title: 'Bikes',
    },
    {
      to: '/insurances/cars',
      title: 'Cars',
    },
  ]
  return (
    <>
      <Heading as="h2" size="lg" isTruncated mb="8">
        Insurances
      </Heading>
      <GridNavigation links={links} />
    </>
  )
}
