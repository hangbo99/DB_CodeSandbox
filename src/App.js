import "./styles.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MicIcon from "@mui/icons-material/Mic";
import SongList from "./SongList";

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
