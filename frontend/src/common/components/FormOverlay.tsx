import { Box, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

interface FormOverlayProps {
  isLoading: boolean;
}

const FormOverlay: React.FC<FormOverlayProps> = ({ isLoading }) => {
  const [visible] = useDisclosure(isLoading);
  console.log("isLoading", isLoading);
  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={visible}
          loaderProps={{ children: "Loading..." }}
        />
        {/* ...other content */}
      </Box>
    </>
  );
};

export default FormOverlay;
