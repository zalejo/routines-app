import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function DetailsAccesories({ includedGroups, copyToClipboard }) {
  return (
    <Box
      sx={{ borderRadius: "10px", marginBottom: "3px" }}
      className="detailsAccesories"
      onClick={() => {
        copyToClipboard(includedGroups, "Grupos");
      }}
    >
      <Typography variant="h6" align="center" className="detailSubtitle">
        Grupos Accesorios
      </Typography>
      <Typography variant="subtitle1">{includedGroups}</Typography>
    </Box>
  );
}
