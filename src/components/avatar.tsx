import { useNavigation } from "@react-navigation/native";
import {
  Menu,
  Pressable,
  Avatar as NativeBaseAvatar,
  Button,
  useToast,
  Box,
} from "native-base";
import React, { useMemo } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../firebase";

interface AvatarDropDownOptionsType {
  name: string;
  onPress: () => void;
  isDisabled?: boolean;
}

interface AvatarProps {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
}

export const Avatar: React.FC<AvatarProps> = ({ setUser, user }) => {
  const nav = useNavigation();
  const toast = useToast();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(undefined);
    }
  });

  const AvatarDropDownOptions = useMemo<AvatarDropDownOptionsType[]>(
    () => [
      {
        name: "Profile",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Your transactions",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Settings",
        onPress: () => {},
        isDisabled: true,
      },
      {
        name: "Logout",
        onPress: () => {
          signOut(auth)
            .then(() => {
              toast.show({
                render: () => {
                  return (
                    <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                      Signed out successfully!
                    </Box>
                  );
                },
              });
            })
            .catch(() => {
              toast.show({
                render: () => {
                  return (
                    <Box bg="red.300" px="2" py="1" rounded="sm" mb={5}>
                      An error occurred while signing out
                    </Box>
                  );
                },
              });
            });
        },
      },
    ],
    [setUser]
  );

  if (!user) {
    return (
      <Button
        _text={{ fontSize: "xs", color: "white", fontFamily: "body", px: 0 }}
        size="xs"
        minW="0"
        minH="0"
        px={4}
        onPress={() => {
          nav.navigate("Signup");
        }}
        colorScheme="coolGray"
        variant="outline"
      >
        Signup
      </Button>
    );
  }
  console.log(`https://avatars.dicebear.com/api/adventurer/${user.email}.svg`);
  return (
    <Menu
      w="190px"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <NativeBaseAvatar
              source={{
                uri: `https://avatars.dicebear.com/api/big-smile/${user.email}.png`,
              }}
              size="35px"
              display="flex"
              bg="mute"
            />
          </Pressable>
        );
      }}
    >
      {AvatarDropDownOptions.map((option) => (
        <Menu.Item key={option.name} {...option}>
          {option.name}
        </Menu.Item>
      ))}
    </Menu>
  );
};
