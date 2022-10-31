import { useNavigation } from "@react-navigation/native";
import {
  FormControl,
  Input,
  Stack,
  Text,
  Flex,
  Button,
  useToast,
  Box,
  Toast,
} from "native-base";
import React, { useState } from "react";
import { Layout } from "../components";
import { signIn } from "../firebase";

export function LoginScreen() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
  });

  const nav = useNavigation();

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
          onPress={() => nav.navigate("Signup")}
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
          isLoading={loading}
          colorScheme="teal"
          variant="solid"
          onPress={() => {
            setLoading(true);

            signIn({
              params: userDetails,
              onIncorrectPassword() {
                setLoading(false);
                Toast.show({
                  title: "Incorrect password. Please try again.",
                  bg: "danger.600",
                });
              },
              onSuccess() {
                setLoading(false);
                nav.navigate("Home");
              },
              onError() {
                setLoading(false);
                Toast.show({
                  title: "An error occurred. Please try again.",
                  bg: "danger.600",
                });
              },
            });
          }}
        >
          <Text fontFamily="poppins">Login</Text>
        </Button>
      </Flex>
    </Layout>
  );
}
