import styles from '../styles/Home.module.css'
import {
  Flex,
  Spacer,
  Heading,
  Button,
  Box,
  HStack,
  Input,
  InputGroup,
  IconButton,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

export default function Home({ podcasts }) {
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <Flex>
          <Box p="2">
            <Heading size="lg">Podlr</Heading>
          </Box>
          <Spacer />

          <HStack spacing="20px">
            <Button colorScheme="blackAlpha" variant="link" size='md'>
              Podcasts
            </Button>
            <Button colorScheme="blackAlpha" variant="link" size='md'>
              Lists
            </Button>
            <Button colorScheme="blue" variant="link" size="md">
              Login
            </Button>
            <Button colorScheme="blue" variant="link" size="md">
              Register Account
            </Button>
            <InputGroup size="sm" variant="outline" width='150px' >
              <Input rounded='20px' />
              <InputRightElement children={<SearchIcon  color="blue.500" />} />
            </InputGroup>

          </HStack>
        </Flex>

        <div className={styles.grid}>
          {podcasts.map(podcast => (
              <a key={podcast.id} href={podcast.link} className={styles.card}>
                <img src={podcast.image} alt="podcast logo and branding"/>
                <h3>{podcast.title}</h3>
                <p>{podcast.description}</p>
              </a>
          ))}


        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Run by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/api/podcast/')
  const podcasts = await res.json()

  return {
    props: {
      podcasts
    }
  }
}
