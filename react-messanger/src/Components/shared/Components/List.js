import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Utilites from '../../shared/Utils/Utils';


export default function CustomList( { list }) {
    return (
        <List>
            {
                list.map(( user,i ) => 
                    <ListItem key={user._id}>
                        <Avatar src={`file/${user.avatar.name}`}/>
                        <Box pl={1}>
                            <ListItemText  primary={user.userName} secondary={Utilites.getCreatedAt(user.created_at)} />
                        </Box>
                    </ListItem>
                )   
            }
         
        </List>
      );
};