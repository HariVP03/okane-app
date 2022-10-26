import {
  FormControl,
  Input,
  Stack,
  Text,
  Flex,
  Button,
  useToast,
  Box,
} from "native-base";
import React, { useState } from "react";
import { Layout } from "../components";
import { signIn } from "../firebase";

export function LoginScreen({ navigation }: any) {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const toast = useToast();

  const updateProperty = (key: string) => (value: string) => {
    setUserDetails((prev) => ({ ...prev, [key]: value }));
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout title="Login">
      <FormControl isRequired mb={4}>
        <Stack w="100%">
          <FormControl.Label>
            <Text fontFamily="poppins">Email</Text>
          </FormControl.Label>
          <Input
            value={userDetails.email}
            onChangeText={updateProperty("email")}
            type="text"
            fontFamily="poppins"
            placeholder="email"
          />
        </Stack>
      </FormControl>

      <FormControl isRequired my={4}>
        <Stack>
          <FormControl.Label>
            <Text fontFamily="poppins">Password</Text>
          </FormControl.Label>
          <Input
            value={userDetails.password}
            onChangeText={updateProperty("password")}
            type="password"
            fontFamily="poppins"
            placeholder="password"
          />
        </Stack>
      </FormControl>

      <Flex mt={8}>
        <Button
          onPress={() => navigation.push("Signup")}
          mb={4}
          w="100%"
          colorScheme="blue"
          variant="link"
        >
          <Text fontFamily="poppins">Or sign up instead</Text>
        </Button>

        <Button
          isDisabled={
            !userDetails.password ||
            !userDetails.email ||
            userDetails.password.length < 6
          }
          w="100%"
          colorScheme="blue"
          variant="solid"
          onPress={() => {
            setLoading(true);

            signIn({
              email: userDetails.email,
              password: userDetails.password,
            }).then((user) => {
              if (user) {
                navigation.push("Home");
                toast.show({
                  render: () => {
                    return (
                      <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                        Logged into your account!
                      </Box>
                    );
                  },
                });
              } else {
                toast.show({
                  render: () => {
                    return (
                      <Box bg="red.200" px="2" py="1" rounded="sm" mb={5}>
                        An error occured while logging into your account
                      </Box>
                    );
                  },
                });
              }
            });
          }}
        >
          <Text fontFamily="poppins">Login</Text>
        </Button>
      </Flex>
    </Layout>
  );
}
