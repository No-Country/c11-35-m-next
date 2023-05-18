import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { BsCart2 } from 'react-icons/bs'

export default function ProductCard({
  title,
  description,
  price,
  image,
  onClick
}) {
  return (
    <Card onClick={onClick}>
      <Flex
        direction='column'
        align='center'
      >
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <CardBody
          _hover={{
            cursor: 'pointer'
          }}
        >
          <Stack
            mt='6'
            spacing='3'
          >
            <Heading size='md'>{title}</Heading>
            <Text
              color='#1A1A1A'
              fontSize='2xl'
            >
              ${price}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <ButtonGroup
            spacing='2'
            ml='auto'
          >
            <IconButton
              icon={<BsCart2 />}
              bg='#C43F6D'
              textColor='#FAFAFA'
            />
          </ButtonGroup>
        </CardFooter>
      </Flex>
    </Card>
  )
}
