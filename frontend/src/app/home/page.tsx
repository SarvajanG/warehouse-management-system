'use client';

import { useRouter } from "next/navigation";
import Settings from "@/components/Settings";
import CommonButton from "@/components/CommonButton";
import useAuthChecker from "@/hooks/useAuthChecker";
import BarcodeReaderIcon from "@mui/icons-material/BarcodeReader";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Typography } from "@mui/material";
import Container from "@/components/Container";
import ItemContainer from "@/components/ItemContainer";
import BarcodeStringGenerator from "@/components/BarcodeStringGenerator";

export default function HomePage() {
  const router = useRouter();
  useAuthChecker();

  return (
    <Container>
      <BarcodeStringGenerator />
      <Typography
        color="white"
        fontWeight="bold"
        fontSize="clamp(1rem, 4vw + 1rem, 2.5rem)"
        textAlign="center"
      >
        Select an Operation
      </Typography>
      <ItemContainer height="40%">
        <CommonButton
          startIcon={<BarcodeReaderIcon sx={{ color: "#008fff" }} />}
          text="SCAN IN"
          onClick={() => router.push("/scan-in")}
        />
        <CommonButton
          startIcon={<BarcodeReaderIcon sx={{ color: "red" }} />}
          text="SCAN OUT"
          onClick={() => router.push("/scan-out")}
        />
        <CommonButton
          startIcon={<InventoryIcon sx={{ color: "purple" }} />}
          text="VIEW INVENTORY"
          onClick={() => router.push("/inventory")}
        />
      </ItemContainer>
      <Settings />
    </Container>
  );
}