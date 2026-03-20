import { Box } from "@mui/material";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  position?: string;
  zIndex?: number;
}

export default function Container({ children, position, zIndex }: ContainerProps) {
  return (
    <Box
      sx={{
        position: position as any,
        zIndex: zIndex,
        width: "100vw",
        height: "100vh",
        backgroundColor: "purple",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        overflow: "auto"
      }}
    >
      {children}
    </Box>
  );
}