import { useState } from 'react'
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  useTheme
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import { fetchData } from '@/store/reducers/data'
import { useDispatch } from 'react-redux'

export const SearchBar = () => {
  const theme = useTheme()
  const textColor = theme.colors.custom.text
  const primaryColor = theme.colors.custom.primary
  const [value, setValue] = useState([])
  const dispatch = useDispatch()

  const onChange = e => {
    setValue(e.target.value)
  }

  const handleSearch = () => {
    dispatch(fetchData(value))
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <>
      <InputGroup
        maxW='50%'
        name='search'
        size='sm'
        as='form'
        onSubmit={handleOnSubmit}
      >
        <InputLeftElement pointerEvents='none' />
        <Input
          type='text'
          name='search'
          placeholder='Search...'
          value={value}
          onChange={onChange}
          color='inherit'
          borderColor='transparent'
          bg='transparent'
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
        />

        <InputRightAddon
          p={0}
          bg='none'
          borderColor='transparent'
          textColor={textColor}
        >
          <IconButton
            icon={
              <Search2Icon
                size='40px'
                color={textColor}
              />
            }
            color='inherit'
            type='submit'
            borderColor='transparent'
            bg='transparent'
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
          />
        </InputRightAddon>
      </InputGroup>
    </>
  )
}
