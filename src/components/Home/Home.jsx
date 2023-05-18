import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '@/store/reducers/data'
import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import ProductCard from '@/components/Card/Card'
import Pagination from '../Pagination/Pagination'
import { useRouter } from 'next/router'
import { SearchBar } from '../SearchBar/SearchBar'

export default function Home() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.data.data)
  const router = useRouter()

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    if (typeof window !== 'undefined') {
      dispatch(fetchData())
    }
  }, [])

  const cardColumns = useBreakpointValue({ base: 1, sm: 2, md: 4 })
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  // const [searchedData, setSearchedData] = useState(null) // Nuevo estado para los datos de búsqueda
  const currentItems = data && data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil((data && data.length) / itemsPerPage)

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const handleClick = productId => {
    console.log(productId)
    router.push(`/product-details/${productId}`)
  }

  return (
    <>
      <main
        className='main'
        style={{ width: '100%' }}
      >
        <Box width='100%'>
          <Image
            src='images/carousel1.jpg'
            alt='Descripción de la imagen'
          />
          <SimpleGrid
            columns={cardColumns}
            spacing={10}
            margin='50px'
          >
            {currentItems &&
              currentItems.map(item => (
                <ProductCard
                  onClick={() => handleClick(item.id)}
                  key={item.name}
                  title={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image_link}
                />
              ))}
          </SimpleGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          <Text
            textAlign='center'
            mt={2}
            marginBottom='20px'
          >
            Page {currentPage} of {totalPages}
          </Text>
        </Box>
      </main>
    </>
  )
}
