import React from "react";
import { Text, TextProps } from "@mantine/core";
import {
  TEXT_SIZES,
  FONT_WEIGHTS,
  TEXT_COLORS,
  TEXT_DECORATIONS,
} from "src/common";

type TextAlign = "left" | "center" | "right" | "justify";
type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

type TextAtomProps = {
  size?: string;
  weight?: keyof typeof FONT_WEIGHTS;
  style?: React.CSSProperties;
  color?: keyof typeof TEXT_COLORS;
  align?: TextAlign; // Update this type
  transform?: TextTransform; // Update this type
  decoration?: keyof typeof TEXT_DECORATIONS;
  italic?: boolean;
  children: React.ReactNode;
} & TextProps;

const TextAtom: React.FC<TextAtomProps> = ({
  size = TEXT_SIZES.md,
  weight,
  style,
  color,
  align,
  transform,
  decoration,
  italic,
  children,
  ...props
}) => {
  return (
    <Text
      size={size}
      w={weight}
      c={color}
      ta={align} // Update this line
      tt={transform} // Update this line
      td={decoration}
      style={{ fontStyle: italic ? "italic" : "normal", ...style }}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextAtom;
