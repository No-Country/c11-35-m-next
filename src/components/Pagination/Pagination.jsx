import { Button, Flex, HStack } from '@chakra-ui/react'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const renderPageButtons = () => {
    const visiblePages = Math.min(totalPages, 5) // Máximo de 5 páginas visibles
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2)) // Primera página visible
    const endPage = Math.min(startPage + visiblePages - 1, totalPages) // Última página visible

    const pageButtons = []
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <Button
          key={i}
          onClick={() => onPageChange(i)}
          variant={currentPage === i ? 'solid' : 'outline'}
          bg={currentPage === i ? '#C43F6D' : ''}
          textColor={currentPage === i ? '#FAFAFA' : ''}
        >
          {i}
        </Button>
      )
    }
    return pageButtons
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      margin='50px'
    >
      <Button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        mx={2}
      >
        Prev
      </Button>
      <HStack spacing={2}>{renderPageButtons()}</HStack>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        mx={2}
      >
        Next
      </Button>
    </Flex>
  )
}
