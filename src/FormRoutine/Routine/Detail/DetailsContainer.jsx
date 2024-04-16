import { DetailsAccesories } from "./DetailsAccesories";
import { DetailsTechnique } from "./DetailsTechnique";
import { DetailsErrors } from "./DetailsErrors";
import Box from "@mui/material/Box";

export function DetailsContainer({
  includedGroups,
  technique,
  commonErrors,
  copyToClipboard,
}) {
  return (
    <Box
      sx={{ borderRadius: "10px", marginRight: "3px", borderColor: "#333" }}
      className="detailsContainer"
    >
      <DetailsAccesories
        includedGroups={includedGroups}
        copyToClipboard={copyToClipboard}
      />
      <DetailsTechnique
        technique={technique}
        copyToClipboard={copyToClipboard}
      />
      <DetailsErrors
        commonErrors={commonErrors}
        copyToClipboard={copyToClipboard}
      />
    </Box>
  );
}
