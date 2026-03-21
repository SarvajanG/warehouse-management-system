'use client';

import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box } from "@mui/material";
import InputField from "./InputField";
import { supabase } from "@/lib/supabase";

export default function BarcodeStringGenerator() {
  const [open, setOpen] = useState(false);
  const [sku, setSku] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [barcodeStrings, setBarcodeStrings] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setBarcodeStrings([]);
    setSku("");
    setQuantity(1);
  };

  function generateSerials(existingSerials: string[], count: number, prefix = "SN") {
    const generated: string[] = [];
    let serialNum = 1;
    existingSerials.forEach((s) => {
      const m = s.match(/^SN-(\d+)$/);
      if (m) serialNum = Math.max(serialNum, parseInt(m[1]) + 1);
    });
    const existingSet = new Set(existingSerials);
    while (generated.length < count) {
      const candidate = `${prefix}-${serialNum}`;
      if (!existingSet.has(candidate)) generated.push(candidate);
      serialNum++;
    }
    return generated;
  }

  const handleGenerate = async () => {
    if (!sku || quantity < 1) return;
    setLoading(true);
    // TODO: replace with API call to GET /api/serials/sku/{skuId}
    // const { data: { session } } = await supabase.auth.getSession();
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/serials/sku/${skuId}`, {
    //   headers: { Authorization: `Bearer ${session?.access_token}` }
    // });
    // const existingSerials = await res.json();
    const existingSerials: string[] = [];
    const newSerials = generateSerials(existingSerials, quantity);
    setBarcodeStrings(newSerials.map((s) => `${sku}|${s}`));
    setLoading(false);
  };

  return (
    <>
      <Button variant="contained" sx={{ backgroundColor: "orange", width: "8rem", height: "2rem", fontSize: "clamp(0.9rem, 1.2vw, 1.2rem)", position: "fixed", top: "2rem", left: "2rem" }} onClick={handleOpen}>
        Barcodes
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: "purple", color: "white" }}>Generate Barcode Strings</DialogTitle>
        <DialogContent sx={{ backgroundColor: "purple" }}>
          <InputField label="SKU" value={sku} onChange={(e) => setSku(e.target.value)} />
          <InputField label="Barcodes to generate" type="number" value={String(quantity)} onChange={(e) => setQuantity(Number(e.target.value))} my={2} />
          <Button variant="contained" onClick={handleGenerate} disabled={!sku || quantity < 1 || loading} sx={{ backgroundColor: "orange" }}>
            Generate
          </Button>
          <Box sx={{ mt: 3 }}>
            {loading && <Typography>Loading...</Typography>}
            {!loading && barcodeStrings.length > 0 && (
              <Box>
                <Typography variant="subtitle1" sx={{ color: "white", mb: 1 }}>Barcode Strings:</Typography>
                <Box sx={{ bgcolor: "#eee", p: 1, borderRadius: 1, fontFamily: "monospace", fontSize: "1rem" }}>
                  {barcodeStrings.map((str) => <div key={str}>{str}</div>)}
                </Box>
              </Box>
            )}
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "purple" }}>
          <Button onClick={() => setOpen(false)} sx={{ backgroundColor: "red", color: "white" }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}