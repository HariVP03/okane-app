import { Button } from "native-base";
import { IButtonProps } from "native-base/lib/typescript/components/primitives/Button/types";
import React from "react";

interface MuteButtonProps extends Partial<IButtonProps> {
  title: string;
}

export const MuteButton: React.FC<MuteButtonProps> = ({ title, ...rest }) => {
  return (
    <Button
      colorScheme="gray"
      bg="mute"
      borderWidth={1}
      borderColor="teal.400"
      _text={{ color: "white", fontSize: "xl", fontFamily: "poppins" }}
      variant="ghost"
      h="100px"
      maxW="150px"
      _icon={{ size: "18px", color: "white" }}
      px={8}
      {...rest}
    >
      {title}
    </Button>
  );
};
