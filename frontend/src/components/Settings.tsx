import { Button, IconButton } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Settings() {
  const router = useRouter();
  const [settingsVisible, setSettingsVisible] = useState(false);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      router.replace("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <IconButton
        sx={{
          height: "4rem",
          width: "4rem",
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          color: "orange",
          "&:hover": { backgroundColor: "rgba(255, 165, 0, 0.1)" },
        }}
        onClick={() => setSettingsVisible(!settingsVisible)}
      >
        <ManageAccountsIcon sx={{ fontSize: "3rem" }} />
      </IconButton>
      {settingsVisible && (
        <div className="settings">
          <IconButton
            sx={{
              height: "4rem",
              width: "4rem",
              position: "absolute",
              top: "1rem",
              right: "1rem",
              color: "purple",
              "&:hover": { backgroundColor: "rgba(38, 0, 255, 0.27)" },
            }}
            onClick={() => setSettingsVisible(false)}
          >
            <HighlightOffIcon sx={{ fontSize: "3rem" }} />
          </IconButton>
          <Button
            variant="contained"
            sx={{ backgroundColor: "purple", width: "80%", height: "3rem" }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
}