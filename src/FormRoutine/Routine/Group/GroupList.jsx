import { GroupItem } from "./GroupItem";
import List from "@mui/material/List";

export function GroupList({
  groups,
  updatePosiciones,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  return (
    <List
      sx={{
        width: "200px",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: "100%",
        borderRadius: "10px",
        marginRight: "3px",
      }}
    >
      {groups.length === 0 && "No people added yet"}
      {groups.map((group) => {
        return (
          <GroupItem
            {...group}
            key={group.id}
            updatePosiciones={updatePosiciones}
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            copyToClipboard={copyToClipboard}
          />
        );
      })}
    </List>
  );
}
