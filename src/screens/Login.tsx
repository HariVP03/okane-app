import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Text,
  Flex,
  Button,
} from "native-base";
import React from "react";
import { Layout } from "../components";

export function LoginScreen({ navigation }: any) {
  return (
    <Layout title="Login">
      <FormControl isRequired mb={4}>
        <Stack w="100%">
          <FormControl.Label>
            <Text fontFamily="poppins">Email</Text>
          </FormControl.Label>
          <Input type="text" fontFamily="poppins" placeholder="email" />
        </Stack>
      </FormControl>

      <FormControl isRequired my={4}>
        <Stack>
          <FormControl.Label>
            <Text fontFamily="poppins">Password</Text>
          </FormControl.Label>
          <Input type="password" fontFamily="poppins" placeholder="password" />
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

        <Button w="100%" colorScheme="blue" variant="solid">
          <Text fontFamily="poppins">Login</Text>
        </Button>
      </Flex>
    </Layout>
  );
}
