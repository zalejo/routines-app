import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function DetailsTechnique({ technique, copyToClipboard }) {
  return (
    <Box
      sx={{ borderRadius: "10px", marginBottom: "3px" }}
      className="detailsTechnique"
      onClick={() => {
        copyToClipboard(technique, "Tecnica");
      }}
    >
      <Typography variant="h6" align="center" className="detailSubtitle">
        Tecnica Correcta
      </Typography>
      <Typography variant="subtitle1">{technique}</Typography>
    </Box>
  );
}
