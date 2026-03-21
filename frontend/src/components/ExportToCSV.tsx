'use client';

import { Button } from "@mui/material";
import { supabase } from "@/lib/supabase";

export default function ExportToCSV() {
  function formatToVancouverTime(timeStr: string) {
    if (!timeStr) return "";
    return new Date(timeStr).toLocaleString("en-CA", { timeZone: "America/Vancouver" });
  }

  function getDurationMinutes(scanIn: string, scanOut: string) {
    if (!scanIn || !scanOut) return "";
    const diffMs = new Date(scanOut).getTime() - new Date(scanIn).getTime();
    if (isNaN(diffMs) || diffMs < 0) return "";
    return Math.round(diffMs / 60000);
  }

  async function exportScanHistoryToCSV() {
    // TODO: replace with API calls to Spring Boot
    // const { data: { session } } = await supabase.auth.getSession();
    // const skusRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/skus`, {
    //   headers: { Authorization: `Bearer ${session?.access_token}` }
    // });
    // const skus = await skusRes.json();
    // ... fetch scans per serial and build CSV
    alert("Export coming soon!");
  }

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "orange",
        width: "8rem",
        height: "2rem",
        fontSize: "clamp(0.9rem, 1.2vw, 1.2rem)",
        position: "fixed",
        top: "2rem",
        left: "2rem",
      }}
      onClick={exportScanHistoryToCSV}
    >
      Export
    </Button>
  );
}