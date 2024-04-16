import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function DetailsErrors({ commonErrors, copyToClipboard }) {
  return (
    <Box
      sx={{ borderRadius: "10px" }}
      className="detailsErrors"
      onClick={() => {
        copyToClipboard(commonErrors, "Errores");
      }}
    >
      <Typography variant="h6" align="center" className="detailSubtitle">
        Errores comunes
      </Typography>
      <Typography variant="subtitle1">{commonErrors}</Typography>
    </Box>
  );
}
