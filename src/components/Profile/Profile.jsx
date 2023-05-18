import { useUser } from '@auth0/nextjs-auth0/client'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
  Flex
} from '@chakra-ui/react'

export default function Profile() {
  const { user } = useUser()
  console.log(user)

  return (
    <Flex
      direction='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      bg='gray.100'
    >
      <Card
        maxWidth='500px'
        width='100%'
        bg='white'
        boxShadow='lg'
      >
        <CardBody>
          <Stack
            spacing={4}
            align='center'
          >
            <Image
              src={user.picture}
              alt={user.name}
              borderRadius='full'
              boxSize='150px'
            />
            <Heading
              as='h2'
              size='lg'
            >
              {user.name}
            </Heading>
            <Text>{user.email}</Text>
            <Divider />
            <Text>Additional profile information goes here...</Text>
          </Stack>
        </CardBody>
        <CardFooter>
          <Button colorScheme='blue'>Edit Profile</Button>
        </CardFooter>
      </Card>
    </Flex>
  )
}
