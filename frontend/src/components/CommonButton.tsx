import { Button } from "@mui/material";
import React from "react";

interface CommonButtonProps {
  text: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function CommonButton({ text, onClick, startIcon, endIcon }: CommonButtonProps) {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        padding: "1rem",
        width: "100%",
        borderRadius: "25px",
        fontWeight: "bold",
        fontSize: "1rem",
        color: "white",
        backgroundColor: "orange",
      }}
    >
      {text}
    </Button>
  );
}
