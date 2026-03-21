'use client';

import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import InputField from "./InputField";
import { Button, Box, Typography, IconButton } from "@mui/material";
import Container from "./Container";
import ScanHistory from "./ScanHistory";
import { supabase } from "@/lib/supabase";

interface SkuViewProps {
  sku: string;
  name: string;
  quantity: number;
  onClick?: () => void;
  onUpdate?: () => void;
  onDelete?: () => void;
}

export default function SkuView({ sku, name, quantity, onClick, onUpdate, onDelete }: SkuViewProps) {
  const [editName, setEditName] = useState(name);
  const [editQuantity, setEditQuantity] = useState(quantity);

  const handleUpdate = async () => {
    // TODO: replace with API call to PUT /api/skus/{skuId}
    // const { data: { session } } = await supabase.auth.getSession();
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skus/${skuId}`, {
    //   method: "PUT",
    //   headers: { Authorization: `Bearer ${session?.access_token}`, "Content-Type": "application/json" },
    //   body: JSON.stringify({ name: editName, quantity: editQuantity })
    // });
    alert("Update coming soon!");
    if (onUpdate) onUpdate();
  };

  const handleDelete = async () => {
    // TODO: replace with API call to DELETE /api/skus/{skuId}
    // const { data: { session } } = await supabase.auth.getSession();
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skus/${skuId}`, {
    //   method: "DELETE",
    //   headers: { Authorization: `Bearer ${session?.access_token}` }
    // });
    alert("Delete coming soon!");
    if (onDelete) onDelete();
  };

  return (
    <Container position="fixed" zIndex={100}>
      <IconButton sx={{ height: "4rem", width: "4rem", position: "absolute", top: "1rem", right: "1rem", color: "orange", "&:hover": { backgroundColor: "rgba(255, 165, 0, 0.1)" } }} onClick={onClick}>
        <HighlightOffIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
      <Typography color="white" fontWeight="bold" fontSize="clamp(1rem, 4vw + 1rem, 2.5rem)" textAlign="center">SKU View</Typography>
      <Box sx={{ height: "70%", width: "100%", padding: "0 1rem" }}>
        <Box sx={{ height: "100%", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", padding: "1rem", backgroundColor: "orange", borderRadius: "25px", "@media (max-width:900px)": { flexDirection: "column", height: "auto", alignItems: "stretch", gap: "1rem" } }}>
          <Box sx={{ height: "100%", width: "50%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", padding: "0 2rem", backgroundColor: "purple", color: "white", borderRadius: "25px", "@media (max-width:900px)": { width: "100%", padding: "2rem 1rem" } }}>
            <Box sx={{ width: "100%" }}>
              <Typography>SKU</Typography>
              <InputField label={sku} disabled />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography>Name</Typography>
              <InputField label={name} onChange={(e) => setEditName(e.target.value)} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography>Quantity</Typography>
              <InputField label={String(quantity)} onChange={(e) => setEditQuantity(Number(e.target.value))} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%", padding: "1rem 0" }}>
              <Button variant="contained" sx={{ backgroundColor: "orange", width: "30rem", height: "4rem", marginRight: "1rem" }} onClick={handleUpdate}>UPDATE</Button>
              <Button variant="contained" sx={{ backgroundColor: "red", width: "30rem", height: "4rem", marginLeft: "1rem" }} onClick={handleDelete}>DELETE</Button>
            </Box>
          </Box>
          <Box sx={{ height: "100%", width: "50%", display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem 1rem", backgroundColor: "purple", borderRadius: "25px", "@media (max-width:900px)": { width: "100%", padding: "2rem 0" } }}>
            <ScanHistory sku={sku} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}