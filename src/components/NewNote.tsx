import { ChangeEvent, ReactNode, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormData } from "../types/form";

const style = {
  color: "#000",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F6edca",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const titleStyle = {
  fontSize: "32px",
  marginBottom: "12px",
};

const labelStyle = {
  fontSize: "18px",
  fontWeight: 400,
};

const inputStyle = {
  backgroundColor: "#fff",
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
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h2"
        sx={labelStyle}
      >
        {title}
      </Typography>
      <TextField
        sx={inputStyle}
        id="outlined-basic"
        variant="outlined"
        placeholder={title}
        value={value}
        fullWidth
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          onChange(ev.target.value)
        }
      />
    </>
  );
}

export function NewNote({
  button,
  data,
  open,
  handleClose,
  onCreate,
}: NewNoteProps) {
  const [title, setTitle] = useState(data ? data?.title : "");
  const [subtitle, setSubtitle] = useState(data ? data?.subtitle : "");
  const [content, setContent] = useState(data ? data?.content : "");

  const resetForm = () => {
    setTitle("");
    setSubtitle("");
    setContent("");
  };

  const onClose = () => {
    onCreate({ title, subtitle, content });
    handleClose();
    resetForm();
  };

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
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            sx={titleStyle}
          >
            Edit/Add
          </Typography>
          <FormItem title="Title" value={title} onChange={setTitle} />
          <FormItem title="Subtitle" value={subtitle} onChange={setSubtitle} />
          <FormItem title="Description" value={content} onChange={setContent} />
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={onClose}>Submit</Button>
        </Box>
      </Modal>
    </div>
  );
}
