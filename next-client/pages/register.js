import { useState } from "react";
import Base from "../layouts/Base";
import { useRouter } from "next/router";
import ErrorMessage from "../components/ErrorMessage";

import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    Text,
    InputGroup,
    InputRightElement,
    Center
} from '@chakra-ui/react';
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons'

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            console.log(response)

            if (response.status === 400) {

                setError('user with this email already exists');
                setIsLoading(false);

                await router.push('/register')

            } else {
                setEmail('');
                setPassword('');

                setIsLoading(false);
                setShowPassword(false);

                await router.push('/login')
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false);
            setEmail('');
            setPassword('');
            setShowPassword(false);
        }
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Base>
            <Center height='100vh'>
                <Flex width="full" align="center" justifyContent="center">
                    <Box
                        p={8}
                        maxWidth="500px"
                        borderWidth={1}
                        borderRadius={8}
                        boxShadow="md"
                    >

                        <Box textAlign="center">
                            <Heading>Register</Heading>
                        </Box>
                        <Box my={4} textAlign="left">
                            <form onSubmit={handleSubmit}>
                                {error && <ErrorMessage message={error} />}
                                <FormControl isRequired>
                                    <FormLabel>Name</FormLabel>
                                    <Input
                                        type="text"
                                        placeholder="Name"
                                        size="lg"
                                        onChange={event => setName(event.currentTarget.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired mt={6}>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="test@test.com"
                                        size="lg"
                                        onChange={event => setEmail(event.currentTarget.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired mt={6}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="*******"
                                            size="lg"
                                            onChange={event => setPassword(event.currentTarget.value)}
                                        />
                                        <InputRightElement width="3rem">
                                            <Button
                                                h='1.5rem'
                                                size="sm"
                                                onClick={handlePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <ViewIcon name="view-off" />
                                                ) : (
                                                    <ViewOffIcon name="view" />
                                                )}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    variant="outline"
                                    type="submit"
                                    width="full"
                                    mt={4}
                                >
                                    {isLoading ? (
                                        <CircularProgress
                                            isIndeterminate
                                            size="24px"
                                            color="teal"
                                        />
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </Center>
        </Base>
    )
}