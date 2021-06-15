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
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Base = (props) => {
    const router = useRouter()

    const logout = async () => {
        await fetch('http://localhost:8000/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })

        await router.push('/login')

    }

    console.log(props.auththenticated)

    return (
        <div>
            <main>

                <Flex margin='10px'>
                    <Box p="2">
                        <Heading size="lg">
                            <Link href='/'>Podlr</Link>
                        </Heading>
                    </Box>
                    <Spacer />

                    <HStack spacing="20px">


                        {props.auththenticated ? (
                            <>
                                <Link href='profile'>
                                    <Button colorScheme="blackAlpha" variant="link" size='md'>
                                        Profile
                                    </Button>
                                </Link>
                                <Link href='podcasts'>
                                    <Button colorScheme="blackAlpha" variant="link" size='md'>
                                        Podcasts
                                    </Button>
                                </Link>
                                <Link href='lists'>
                                    <Button colorScheme="blackAlpha" variant="link" size='md'>
                                        Lists
                                    </Button>
                                </Link>
                                <Button onClick={() => logout()} colorScheme="blue" variant="link" size="md">
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Link href='podcasts'>
                                    <Button colorScheme="blackAlpha" variant="link" size='md'>
                                        Podcasts
                                    </Button>
                                </Link>
                                <Link href='lists'>
                                    <Button colorScheme="blackAlpha" variant="link" size='md'>
                                        Lists
                                    </Button>
                                </Link>
                                <Link href='/login'>
                                    <Button colorScheme="blue" variant="link" size="md">
                                        Login
                                    </Button>
                                </Link>
                                <Link href='/register'>
                                    <Button colorScheme="blue" variant="link" size="md">
                                        Register Account
                                    </Button>
                                </Link>
                            </>
                        )}

                        <InputGroup size="sm" variant="outline" width='150px' >
                            <Input rounded='20px' />
                            <InputRightElement children={<SearchIcon  color="blue.500" />} />
                        </InputGroup>

                    </HStack>
                </Flex>

                {props.children}

                {/*<div className={styles.grid}>*/}
                {/*    {podcasts.map(podcast => (*/}
                {/*        <a key={podcast.id} href={podcast.link} className={styles.card}>*/}
                {/*            <img src={podcast.image} alt="podcast logo and branding"/>*/}
                {/*            <h3>{podcast.title}</h3>*/}
                {/*            <p>{podcast.description}</p>*/}
                {/*        </a>*/}
                {/*    ))}*/}
                {/*</div>*/}
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

export default Base;


