import {
   TextField,
   Box,
   Button,
   List,
   Paper,
   ListItem,
   ListItemText,
   IconButton
} from "@mui/material";

import React, { useState } from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MusicVideo from "@mui/icons-material/MusicVideo";
import DeleteIcon from "@mui/icons-material/Delete";

const SongList = () => {
   const [songName, setSongName] = useState("");
   const [songs, setSongs] = useState(["어디에도"]);

   const addSong = (e) => {
      e.preventDefault();
      console.log(songName);
      setSongs([...songs, songName]);
   };

   //List에 하나의 아이템 반환 함수
   const SongListItem = (props) => {
      return (
         <Paper>
            <ListItem
               Button
               component="a"
               href={`https://www.youtube.com/results?search_query=노래방+${props.title}`}
               target="_blank"
               sx={{ mb: 1, backgroundColor: "beige" }}
               secondaryAction={
                  <IconButton
                     edge="end"
                     onClick={(e) => {
                        const deleted = [...songs];
                        deleted.splice(props.idx, 1);
                        setSongs(deleted);
                        e.preventDefault();
                     }}
                  >
                     <DeleteIcon />
                  </IconButton>
               }
            >
               <ListItemAvatar>
                  <Avatar>
                     <MusicVideo />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText
                  primary={props.title}
                  secondary={`https://www.youtube.com/results?search_query=노래방+${props.title}`}
               />
            </ListItem>
         </Paper>
      );
   };

   //Return SongList : Main 반환하는 느낌
   return (
      <>
         <Box component="form" sx={{ mt: 3 }} onSubmit={addSong}>
            <TextField
               required
               //autofocus
               fullWidth
               label="노래 제목"
               name="SongInput"
               id="SongInput"
               value={songName}
               onChange={(e) => setSongName(e.currentTarget.value)}
            />
            <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{ mt: 1, mb: 3 }}
            >
               노래 추가
            </Button>
         </Box>

         <List>
            {songs.map((song, index) => (
               <SongListItem key={index} idx={index} title={song} />
            ))}
         </List>
      </>
   );
};

export default SongList;
