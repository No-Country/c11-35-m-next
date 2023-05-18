import React from 'react'
import { Flex, Box } from '@chakra-ui/react'

export default function ProductColors({ colors }) {
  /* {colors.map(color => ({<li>{color.colour_name}</li>}))}
   */
  console.log(colors)
  return (
    <>
      <Flex wrap='wrap'>
        {colors.map(color => (
          <Box
            key={color.hex_value}
            p='4'
            bg={color.hex_value}
            color='white'
            borderRadius='50%'
            margin='15px'
            marginLeft='0px'
          />
        ))}
      </Flex>
    </>
  )
}
