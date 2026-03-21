import { Box, Typography } from "@mui/material";

interface ScanHistoryEntryProps {
  serial: string;
  inTime: string;
  outTime: string;
  onClick?: () => void;
}

export default function ScanHistoryEntry({ serial, inTime, outTime, onClick }: ScanHistoryEntryProps) {
  function toVancouverTime(utcString: string) {
    if (!utcString) return "";
    try {
      return new Date(utcString).toLocaleString("en-CA", {
        timeZone: "America/Vancouver",
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    } catch {
      return utcString;
    }
  }

  return (
    <Box onClick={onClick} sx={{
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      padding: "1rem 0.5rem",
      width: "100%",
      backgroundColor: "orange",
      color: "black",
      margin: "0.5rem 0",
      borderRadius: "10px",
    }}>
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{serial}</Typography>
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{toVancouverTime(inTime)}</Typography>
      <Typography fontSize="clamp(0.8rem, 0.5vw + 0.5rem, 2.5rem)" sx={{ flex: 1, textAlign: "center" }}>{toVancouverTime(outTime)}</Typography>
    </Box>
  );
}