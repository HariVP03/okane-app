import { useNavigation } from "@react-navigation/native";
import {
  FormControl,
  Input,
  Stack,
  WarningOutlineIcon,
  Text,
  Flex,
  Button,
  useToast,
  Box,
  Pressable,
  Toast,
} from "native-base";
import React, { useState } from "react";
import { Layout } from "../components";
import { signUp } from "../firebase";

export function SignupScreen() {
  const [userDetails, setUserDetails] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const toast = useToast();
  const nav = useNavigation();

  const updateProperty = (key: string) => (value: string) => {
    setUserDetails((prev) => ({ ...prev, [key]: value }));
  };

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <Layout title="Signup">
      <FormControl isRequired mb={4}>
        <Stack w="100%">
          <FormControl.Label>
            <Text fontFamily="poppins">Email</Text>
          </FormControl.Label>
          <Input
            type="text"
            value={userDetails.email}
            fontFamily="poppins"
            onChangeText={updateProperty("email")}
            placeholder="email"
          />

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
          <Input
            type="password"
            value={userDetails.password}
            onChangeText={updateProperty("password")}
            fontFamily="poppins"
            placeholder="password"
          />

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
            value={userDetails.confirmPassword}
            fontFamily="poppins"
            placeholder="confirm password"
            onChangeText={updateProperty("confirmPassword")}
          />

          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            <Text fontFamily="poppins">Passwords don't match.</Text>
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>

      <Flex mt={8}>
        <Button
          onPress={() => nav.navigate("Login")}
          mb={4}
          w="100%"
          colorScheme="blue"
          variant="link"
        >
          <Text fontFamily="poppins">Or log in instead</Text>
        </Button>

        <Button
          onPress={() => {
            setLoading(true);

            signUp({
              params: userDetails,
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
          w="100%"
          colorScheme="blue"
          isLoading={loading}
          variant="solid"
          isDisabled={
            userDetails.password.length < 6 ||
            userDetails.confirmPassword !== userDetails.password
          }
        >
          <Text fontFamily="poppins">Signup</Text>
        </Button>
      </Flex>
    </Layout>
  );
}
