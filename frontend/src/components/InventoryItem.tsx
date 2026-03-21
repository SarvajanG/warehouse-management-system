import { Box, Typography } from "@mui/material";

interface InventoryItemProps {
  sku: string;
  name: string;
  quantity: number;
  onClick?: () => void;
}

export default function InventoryItem({ sku, name, quantity, onClick }: InventoryItemProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "1rem 0.5rem",
        width: "100%",
        backgroundColor: "orange",
        margin: "0.5rem 0",
        borderRadius: "10px",
        cursor: "pointer",
      }}
    >
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{sku}</Typography>
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{name}</Typography>
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{quantity}</Typography>
    </Box>
  );
}