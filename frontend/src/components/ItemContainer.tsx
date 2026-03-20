import { Box } from "@mui/material";

interface ItemContainerProps {
  children: React.ReactNode;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  overflow?: string;
  className?: string;
}

export default function ItemContainer({
  children,
  height,
  maxWidth = "25rem",
  maxHeight,
  overflow,
  className,
}: ItemContainerProps) {
  return (
    <Box
      className={className}
      sx={{
        height: height,
        width: "100%",
        maxWidth: maxWidth,
        maxHeight: maxHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0 1rem",
        overflow: overflow,
      }}
    >
      {children}
    </Box>
  );
}