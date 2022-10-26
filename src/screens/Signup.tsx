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

export function SignupScreen({ navigation }: any) {
  return (
    <Layout title="Signup">
      <FormControl isRequired mb={4}>
        <Stack w="100%">
          <FormControl.Label>
            <Text fontFamily="poppins">Email</Text>
          </FormControl.Label>
          <Input type="text" fontFamily="poppins" placeholder="email" />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Your email is required to signup.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isRequired my={4}>
        <Stack>
          <FormControl.Label>
            <Text fontFamily="poppins">Password</Text>
          </FormControl.Label>
          <Input type="password" fontFamily="poppins" placeholder="password" />

          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <FormControl isRequired my={4}>
        <Stack>
          <FormControl.Label>
            <Text fontFamily="poppins">Confirm Password</Text>
          </FormControl.Label>
          <Input
            type="password"
            fontFamily="poppins"
            placeholder="confirm password"
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            <Text fontFamily="poppins">Passwords don't match.</Text>
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <Flex mt={8}>
        <Button
          onPress={() => navigation.push("Login")}
          mb={4}
          w="100%"
          colorScheme="blue"
          variant="link"
        >
          <Text fontFamily="poppins">Or log in instead</Text>
        </Button>

        <Button w="100%" colorScheme="blue" variant="solid">
          <Text fontFamily="poppins">Signup</Text>
        </Button>
      </Flex>
    </Layout>
  );
}
