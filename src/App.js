import "./styles.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MicIcon from "@mui/icons-material/Mic";
import SongList from "./SongList";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper
}));

const GundamHeader = () => {
  return <h3>건담</h3>;
};

const GundamTitle = () => {
  return <h2>건담 DB</h2>;
};

/*const getList = () => {
  return (
    <div>
      <Grid item xs={12} md={6}>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Avatar with text and icon
        </Typography>
        <Demo>
          <List dense={dense}>
            {generate(
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            )}
          </List>
        </Demo>
      </Grid>
    </div>
  );
};*/

export default function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar>
          <MicIcon sx={{ mr: 1 }} />
          <Typography variant="h6" noWrap>
            노래방 애창곡
          </Typography>
        </Toolbar>
      </AppBar>
      <SongList />
    </div>
  );
}
