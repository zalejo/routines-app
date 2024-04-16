import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export function Home() {
  const buttons = {
    "New Person": "/newPerson",
    "See People": "/people",
  };
  return (
    <>
      <Box>
        {Object.keys(buttons).map((button) => (
          <Link to={buttons[button]} key={buttons[button]}>
            <Button>{button}</Button>
          </Link>
        ))}
      </Box>
    </>
  );
}
