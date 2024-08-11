// src/components/TitleAtom.tsx
import React from "react";
import { Title, TitleOrder } from "@mantine/core";

type TitleAtomProps = {
  order?: number;
  children: React.ReactNode;
};

const TitleAtom: React.FC<TitleAtomProps> = ({ order, children, ...props }) => {
  return (
    <Title order={order as TitleOrder} {...props}>
      {children}
    </Title>
  );
};
export default TitleAtom;
