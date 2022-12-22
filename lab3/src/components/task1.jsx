
import {useEffect, useState} from "react";
import ListComponent from "../components/ListComponent";
import {List} from "@mui/material";

function Task1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(data => data.json())
            .then(res => setData(res.splice(0,100)))
    }, [])

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map(item =>
                item.title.length > 7
                    ? <ListComponent key={item.id} data={item}/>
                    : false
            )}
        </List>
    );
}

export default Task1;