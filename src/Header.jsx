import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-location'

export const Header = () => {
  return (
    <>
      <Heading as="h1" size="xl" isTruncated mb="8">
        <Link to="/">MyFDM(My Family Details Manager)</Link>
      </Heading>
    </>
  )
}
