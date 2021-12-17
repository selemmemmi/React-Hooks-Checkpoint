import * as React from "react";
import { Button, Fab, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalCard({addCard}) {
  const [Card, setCard] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setCard({...Card,[e.target.name] : e.target.value});
  };

  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={handleOpen} />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h1>Add A Movi</h1>
          </Typography>
          <h3>Name</h3>
          <TextField onChange={handleChange} id="outlined-basic" name="Name" variant="outlined" />
          <h3>Image</h3>
          <TextField id="outlined-basic" onChange={handleChange} name="Image" variant="outlined" />
          <h3>Date</h3>
          <TextField id="outlined-basic" onChange={handleChange} name="Date" variant="outlined" />
          <h3>Type</h3>
          <TextField id="outlined-basic" onChange={handleChange} name="Type" variant="outlined" />
          <h3>Description</h3>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={handleChange}
            name="Description"
          />
          <h3>Rating</h3>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="rating"
              onChange={handleChange}
            />
          </Box>
          <Button variant="contained" endIcon={<SendIcon />} onClick={addCard}>
            Send
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
