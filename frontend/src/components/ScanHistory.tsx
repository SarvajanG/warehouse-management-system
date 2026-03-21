'use client';

import { useState, useEffect } from "react";
import ItemContainer from "./ItemContainer";
import ScanHistoryEntry from "./ScanHistoryEntry";
import ScanHistoryLabels from "./ScanHistoryLabels";
import { supabase } from "@/lib/supabase";

interface ScanHistoryProps {
  sku: string;
}

export default function ScanHistory({ sku }: ScanHistoryProps) {
  const [scans, setScans] = useState<any[]>([]);

  useEffect(() => {
    if (!sku) return;
    const fetchScans = async () => {
      // TODO: replace with API call to GET /api/scans/serial/{serialId}
      // const { data: { session } } = await supabase.auth.getSession();
      // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/scans/serial/${serialId}`, {
      //   headers: { Authorization: `Bearer ${session?.access_token}` }
      // });
      // const data = await res.json();
      // setScans(data);
    };
    fetchScans();
  }, [sku]);

  if (!sku) return null;

  return (
    <ItemContainer className="scrollable-inventory" maxHeight="100%" maxWidth="100%" overflow="auto">
      <ScanHistoryLabels />
      {scans.map((scan, index) => (
        <ScanHistoryEntry key={index} serial={scan.serial} inTime={scan.inTime} outTime={scan.outTime} />
      ))}
    </ItemContainer>
  );
}