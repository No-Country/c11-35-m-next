import { Flex, Button, Box, Text, Square } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ProductCounter({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial)
  const decreaseCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  const increaseCounter = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }
  console.log('render')
  return (
    <Flex
      justifyContent='space-between'
      maxWidth={{ base: '100%', md: '100%', lg: '50%' }}
      margin={{ base: '20px auto', md: '20px auto', lg: '20px 0px' }}
      gap='10px'
    >
      <Flex>
        <Box
          as='button'
          onClick={decreaseCounter}
          backgroundColor='#D9D9D9'
          width='30px'
          height='100%'
          color='#1A1A1A'
          fontSize='2xl'
          fontWeight='bold'
        >
          -
        </Box>
        <Square>
          <Text
            color='#1A1A1A'
            fontSize='1x1'
            fontWeight='bold'
            marginEnd='20px'
            marginStart='20px'
          >
            {counter}
          </Text>
        </Square>
        <Box
          as='button'
          onClick={increaseCounter}
          backgroundColor='#D9D9D9'
          width='30px'
          height='100%'
          color='#1A1A1A'
          fontSize='2xl'
          fontWeight='bold'
        >
          +
        </Box>
      </Flex>
      <Button
        onClick={() => {
          onAdd(counter)
        }}
        variant='solid'
        backgroundColor='#C42F6D'
        color='#FAFAFA'
        width='200px'
      >
        Add to cart
      </Button>
    </Flex>
  )
}
