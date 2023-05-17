import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/store/reducers/data'
import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Image,
  Text,
  Box,
  Tab,
  Tabs,
  TabPanel,
  TabPanels,
  TabList,
  TabIndicator
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import ProductColors from '../ProductColors/ProductColors'

import ProductCounter from '../ProductCounter/ProductCounter'

export default function ProductDetails({ id }) {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(fetchData())
    }
  }, [])

  const product = data && data.find(product => product.id === parseInt(id))
  const handleAdd = qty => {
    alert(`se agregó ${qty} al carrito`)
  }

  return (
    <>
      {product ? (
        <Card
          direction={{ base: 'column', lg: 'row' }}
          overflow='hidden'
          variant='outline'
          padding='1rem'
          width='100vw'
          margin='2rem auto'
          border='none'
          maxWidth='90vw'
        >
          <Image
            src={product.api_featured_image}
            alt='product image'
            borderRadius='lg'
            boxSize='md'
            padding='0px'
            margin='0px auto'
            maxWidth='%'
          />
          <Stack>
            <CardBody padding='0px'>
              <Text py='2'>{product.brand.toUpperCase()}</Text>
              <Heading size='md'>{product.name}</Heading>
              <Box
                display='flex'
                mt='2'
                alignItems='center'
              >
                <Box>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < product.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  {product.product_colors.length > 0 ? (
                    <>
                      <ProductColors colors={product.product_colors} />
                    </>
                  ) : null}
                </Box>
              </Box>
              <Text
                color='#1A1A1A'
                fontSize='2xl'
                fontWeight='bold'
              >
                ${product.price}
              </Text>

              <ProductCounter
                initial={1}
                stock={10}
                onAdd={n => handleAdd(n)}
              />
            </CardBody>

            <CardFooter
              padding='0px'
              maxWidth={{ base: '100%', md: '100%', lg: '50%' }}
            >
              <Tabs
                isFitted
                variant='unstyled'
                defaultIndex={0}
              >
                <TabList>
                  <Tab>Details</Tab>
                  <Tab>Reviews</Tab>
                </TabList>
                <TabIndicator
                  mt='-1.5px'
                  height='2px'
                  bg='#C42F6D'
                  borderRadius='1px'
                />
                <TabPanels>
                  <TabPanel padding='0px'>
                    <Text
                      py='2'
                      minHeight='200px'
                    >
                      {product.description}
                    </Text>
                  </TabPanel>
                  <TabPanel padding='0px'>
                    <Text
                      py='2'
                      minHeight='200px'
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam aut fuga incidunt ad ratione accusantium nam ipsa
                      nisi veniam in aliquam magni amet, similique impedit.
                      Assumenda repudiandae, doloribus deleniti nobis officia
                      blanditiis quod minima nemo, distinctio aliquid dolorum.
                      Laboriosam, odio recusandae? Asperiores molestiae beatae
                      nesciunt, eius natus ad numquam. Nulla?
                    </Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </CardFooter>
          </Stack>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
