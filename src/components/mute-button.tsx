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
      _text={{ color: "white", fontSize: "lg" }}
      variant="ghost"
      maxH="50px"
      maxW="150px"
      _icon={{ size: "18px", color: "white" }}
      px={8}
      {...rest}
    >
      {title}
    </Button>
  );
};
