import { Typography, Grid } from "@mui/material";
import Button from "@mui/material/Button";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignItems: "center",
};

const buttonStyle = {
  width: "250px",
  height: "250px",
  border: "2px dashed #333",
  color: "#fff",
  fontSize: "60px",
};

const subtitleStyle = {
  color: "#fff",
  fontWeight: 300,
};

interface NewNoteButtonProps {
  onClick: () => void;
  hasData: boolean;
}

export const NewNoteButton = ({ onClick, hasData }: NewNoteButtonProps) => {
  return (
    <Grid item sx={wrapperStyle}>
      <Button onClick={onClick} sx={buttonStyle}>
        +
      </Button>
      {!hasData && (
        <Typography sx={subtitleStyle}>You don't have any notes</Typography>
      )}
    </Grid>
  );
};
