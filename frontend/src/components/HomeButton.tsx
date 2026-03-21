import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  return (
    <IconButton
      sx={{
        height: "4rem",
        width: "4rem",
        position: "fixed",
        top: "1rem",
        right: "1rem",
        color: "orange",
        '&:hover': {
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
        },
      }}
      onClick={() => router.push("/home")}
    >
      <HomeIcon sx={{ fontSize: "3rem" }} />
    </IconButton>
  );
}