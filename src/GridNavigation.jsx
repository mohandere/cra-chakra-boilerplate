import React from 'react'
import { SimpleGrid, LinkOverlay, LinkBox } from '@chakra-ui/react'
import { Link as RlLink } from 'react-location'

export const GridNavigation = ({ links = [] }) => {
  return (
    <>
      <SimpleGrid minChildWidth="160px" spacing="40px">
        {links.map(({ to, title }) => (
          <LinkBox
            as="article"
            maxW="sm"
            p="5"
            borderWidth="1px"
            rounded="md"
            bg="gray.200"
            textAlign="center"
          >
            <LinkOverlay as={RlLink} to={to}>
              {title}
            </LinkOverlay>
          </LinkBox>
        ))}
      </SimpleGrid>
    </>
  )
}
