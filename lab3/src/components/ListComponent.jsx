import React from 'react';
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

const ListComponent = (item) => {
    const {title, thumbnailUrl: url} = item.data
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src={url}  sx={{ width: 50, height: 50 }} onClick={() => window.open(url)}/>
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    );
};

export default ListComponent;