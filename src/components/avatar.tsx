import { Menu, Pressable, Avatar as NativeBaseAvatar } from "native-base";
import React from "react";

interface AvatarDropDownOptionsType {
  name: string;
  onPress: () => void;
  isDisabled?: boolean;
}

const AvatarDropDownOptions: AvatarDropDownOptionsType[] = [
  {
    name: "Profile",
    onPress: () => {},
  },
  {
    name: "Your transactions",
    onPress: () => {},
  },
  {
    name: "Settings",
    onPress: () => {},
  },
  {
    name: "Logout",
    onPress: () => {},
  },
];

export const Avatar = () => {
  return (
    <Menu
      w="190px"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <NativeBaseAvatar
              source={{
                uri: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
              }}
              size="35px"
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
