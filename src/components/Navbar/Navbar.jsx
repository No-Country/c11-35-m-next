import { useState } from 'react'
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  useBreakpointValue,
  Text,
  useTheme
} from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0/client'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useDispatch } from 'react-redux'
import { fetchData } from '@/store/reducers/data'
import { BsCart2 } from 'react-icons/bs'
import { SearchBar } from '../SearchBar/SearchBar'

export default function Navbar() {
  const theme = useTheme()
  const textColor = theme.colors.custom.text
  const primaryColor = theme.colors.custom.primary
  const { user } = useUser()
  const dispatch = useDispatch()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const isMobile = useBreakpointValue({ base: true, lg: false, sm: false })

  const handleClick = itemName => {
    // console.log(itemName)
    dispatch(fetchData(itemName))
  }

  return (
    <>
      {isMobile && (
        <>
          {isSidebarOpen && (
            <Flex
              as='nav'
              direction='column'
              align='flex-start'
              justify='flex-start'
              padding={4}
              bg={primaryColor}
              height='100%'
              width='50%'
              position='fixed'
              top={0}
              left={0}
              zIndex={10}
            >
              <Flex
                direction='column'
                alignItems='flex-start'
              >
                <Box
                  w='100%'
                  justifyContent='flex-start'
                >
                  <Flex
                    width='100%'
                    marginTop='10px'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    <Button
                      style={{
                        background: 'none'
                      }}
                      color={textColor}
                      ml={2}
                      fontFamily='Playfair'
                      size='xxl'
                    >
                      SUNKISS
                    </Button>
                    <IconButton
                      color={textColor}
                      icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
                      variant='ghost'
                      onClick={toggleSidebar}
                      aria-label='Toggle Sidebar'
                      marginLeft='50%'
                    />
                  </Flex>
                </Box>
                <Flex
                  direction='column'
                  marginTop='30px'
                  alignItems='flex-start'
                >
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                  >
                    <NextLink href='/home'>
                      <Text
                        fontFamily='Playfair'
                        color={textColor}
                      >
                        Home
                      </Text>
                    </NextLink>
                  </Button>

                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Blush')}
                  >
                    Blush
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Bronzer')}
                  >
                    Bronzer
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Eyebrow')}
                  >
                    Eyebrow
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Eyeliner')}
                  >
                    Eyeliner
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Eyeshadow')}
                  >
                    Eyeshadow
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Foundation')}
                  >
                    Foundation
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Lip liner')}
                  >
                    Lip liner
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Lipstick')}
                  >
                    Lipstick
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Mascara')}
                  >
                    Mascara
                  </Button>
                  <Button
                    style={{
                      background: 'none',
                      padding: 0,
                      margin: 10
                    }}
                    fontFamily='Playfair'
                    colorScheme='gray'
                    onClick={() => handleClick('Nail polish')}
                  >
                    Nail polish
                  </Button>
                </Flex>
              </Flex>
              <Box
                mt='auto'
                px={4}
              >
                {!user ? (
                  <Button>
                    <NextLink href='/api/auth/login'>
                      <Text color={textColor}>Login</Text>
                    </NextLink>
                  </Button>
                ) : (
                  <Menu>
                    <MenuButton
                      as={Flex}
                      alignItems='center'
                    >
                      <Flex>
                        <Image
                          src={user.picture}
                          alt='user picture'
                          boxSize={10}
                          borderRadius='full'
                          mr={2}
                        />
                        <Text
                          paddingTop={2}
                          paddingLeft={2}
                          color={textColor}
                          fontFamily='Playfair'
                        >
                          My account
                        </Text>
                      </Flex>
                    </MenuButton>
                    <MenuList>
                      <NextLink href='/api/auth/logout'>
                        <MenuItem color='blackAlpha.700'>Logout</MenuItem>
                      </NextLink>
                      <NextLink href='/profile'>
                        <MenuItem color='blackAlpha.700'>Profile</MenuItem>
                      </NextLink>
                    </MenuList>
                  </Menu>
                )}
              </Box>
            </Flex>
          )}
          <Box
            minH='73px'
            as='nav'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            width='100%'
            height='8%'
            padding={4}
            bg={primaryColor}
            color='white'
            zIndex={1}
            position='fixed'
          >
            <IconButton
              color={textColor}
              size='lg'
              icon={isSidebarOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant='ghost'
              onClick={toggleSidebar}
              aria-label='Toggle Sidebar'
              position='absolute'
              left={0}
            />
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              width='100%'
            >
              <SearchBar />
            </Box>
            <IconButton
              color={textColor}
              size='lg'
              icon={<BsCart2 />}
              variant='ghost'
              onClick={toggleSidebar}
              aria-label='Toggle Sidebar'
              position='absolute'
              right={0}
            />
          </Box>
        </>
      )}
      {!isMobile && (
        <Flex
          as='nav'
          align='center'
          padding={4}
          bg={primaryColor}
          color='white'
          justifyContent='space-between'
        >
          <Flex gap={5}>
            <NextLink href='/home'>
              <Text color={textColor}>Home</Text>
            </NextLink>
            <Menu>
              <MenuButton
                as={Flex}
                alignItems='center'
                color={textColor}
              >
                Product type
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => handleClick('Blush')}
                  color='blackAlpha.700'
                >
                  Blush
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Bronzer')}
                  color='blackAlpha.700'
                >
                  Bronzer
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Eyebrow')}
                  color='blackAlpha.700'
                >
                  Eyebrow
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Eyeliner')}
                  color='blackAlpha.700'
                >
                  Eyeliner
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Eyeshadow')}
                  color='blackAlpha.700'
                >
                  Eyeshadow
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Foundation')}
                  color='blackAlpha.700'
                >
                  Foundation
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Lip liner')}
                  color='blackAlpha.700'
                >
                  Lip liner
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Lipstick')}
                  color='blackAlpha.700'
                >
                  Lipstick
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Mascara')}
                  color='blackAlpha.700'
                >
                  Mascara
                </MenuItem>
                <MenuItem
                  onClick={() => handleClick('Nail polish')}
                  color='blackAlpha.700'
                >
                  Nail polish
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
          >
            <SearchBar />
          </Box>
          <Flex alignItems='center'>
            {!user ? (
              <Button>
                <NextLink href='/api/auth/login'>Login</NextLink>
              </Button>
            ) : (
              <Menu>
                <MenuButton
                  as={Flex}
                  alignItems='center'
                >
                  <Image
                    src={user.picture}
                    alt='user picture'
                    boxSize={10}
                    borderRadius='full'
                    mr={2}
                  />
                </MenuButton>
                <MenuList>
                  <NextLink href='/api/auth/logout'>
                    <MenuItem color='blackAlpha.700'>Logout</MenuItem>
                  </NextLink>
                  <NextLink href='/profile'>
                    <MenuItem color='blackAlpha.700'>Profile</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            )}
          </Flex>
        </Flex>
      )}
    </>
  )
}
