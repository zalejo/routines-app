import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function CopiedSnackAlert({ state, text, setSnackbarState }) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarState({
      state: false,
      text: text,
    });
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={state} autoHideDuration={600} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {text} Copied!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
