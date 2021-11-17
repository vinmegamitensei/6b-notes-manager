import { ChangeEvent, ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormData } from "../types/form";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface NewNoteProps {
  button: ReactNode;
  data?: FormData;
  open: boolean;
  handleClose: () => void;
  onCreate: (data: FormData) => void;
}

interface FormItemProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
}

function FormItem({ title, value, onChange }: FormItemProps) {
  return (
    <>
      <Typography id="modal-modal-title" variant="h5" component="h2">
        {title}
      </Typography>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder={title}
        value={value}
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          onChange(ev.target.value)
        }
      />
    </>
  );
}

export function NewNote({ button, data, open, handleClose }: NewNoteProps) {
  const [title, setTitle] = useState(data ? data?.title : "");
  const [subtitle, setSubtitle] = useState(data ? data?.subtitle : "");
  const [content, setContent] = useState(data ? data?.content : "");
  return (
    <div>
      {button}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h2" component="h2">
            Edit/Add
          </Typography>
          <FormItem title="Title" value={title} onChange={setTitle} />
          <FormItem title="Subtitle" value={subtitle} onChange={setSubtitle} />
          <FormItem title="Content" value={content} onChange={setContent} />
          <Button onClick={() => console.log({ title, subtitle, content })}>
            Submit
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
