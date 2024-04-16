import ListItem from "@mui/material/ListItem";

export function GroupItem({
  name,
  updatePosiciones,
  selectedRow,
  setSelectedRow,
  copyToClipboard,
}) {
  function groupClickHandle(e) {
    const text = e.target.innerHTML;
    setSelectedRow({
      ...selectedRow,
      group: e.target.innerHTML,
    });
    const groupName = e.target.innerHTML.toUpperCase();
    updatePosiciones(groupName);
    copyToClipboard(text, false);
  }

  if (name == undefined) return;
  const cleanName = name.charAt(0) + name.slice(1).toLowerCase();
  return (
    <ListItem
      sx={{
        borderRadius: "8px",
        ":hover": {
          boxShadow: 5,
          backgroundColor: "lightgray",
        },
        marginBottom: "4px",
        backgroundColor:
          selectedRow.group == cleanName ? "lightblue" : "rgb(245, 245, 245)",
      }}
      className="rowGroupItem"
      onClick={groupClickHandle}
    >
      {cleanName}
    </ListItem>
  );
}
