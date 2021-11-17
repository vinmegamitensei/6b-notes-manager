import { Grid, Card, Typography, Button } from "@mui/material";
import { NoteData } from "../types/form";

const wrapperStyle = {
  display: "flex",
  flexDirection: "column" as "column",
  justifyContent: "center",
  alignItems: "center",
};

const cardStyle = {
  width: "250px",
  height: "250px",
  border: "2px dashed transparent",
  backgroundColor: "#FFF7E4",
  fontSize: "60px",
  color: "#000",
};

const titleStyle = {
  paddingLeft: "12px",
  fontSize: "32px",
  marginBottom: "0px",
};

const labelStyle = {
  paddingLeft: "12px",
  fontSize: "18px",
  marginBottom: "32px",
  fontWeight: 400,
};

interface ExistingNoteProps {
  data: NoteData;
}

export const ExistingNote = ({ data }: ExistingNoteProps) => {
  return (
    <Grid item sx={wrapperStyle} key={data.id}>
      <Card sx={cardStyle}>
        <div>
          <Typography sx={titleStyle}>{data.title}</Typography>
          <Typography sx={labelStyle}>{data.subtitle}</Typography>
          <Typography sx={labelStyle}>{data.date}</Typography>
        </div>
        <Button onClick={() => console.log("Edit")}>Edit</Button>
        <Button onClick={() => console.log("Delete")}>Delete</Button>
      </Card>
    </Grid>
  );
};
