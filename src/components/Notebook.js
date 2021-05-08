import React from "react";
import { useForm, Controller, SubmitHandler} from "react-hook-form";
import { TextField, Checkbox, Input } from "@material-ui/core";
import ReactDOM from "react-dom";
import Select from "react-select";
import { NFTStorage, Blob } from 'nft.storage'
import Header from './Header';

require('dotenv').config()

const Notebook = () => {

    const { control, handleSubmit } = useForm();
    const client_id = process.env.REACT_APP_CLIENT_ID;

    const onSubmit = async (data) => {
        alert(JSON.stringify(data));
        mintNote(data)
    };

    async function mintNote(data) {
        const apiKey = client_id;
        const client = new NFTStorage({token: apiKey});
        //const content = new Blob([data], {type:"text/json"});
        const content = new Blob([JSON.stringify(data)], {type:"text/json"});
        const cid = await client.storeBlob(content);
    }

    return (
        <div>
            <Header />
            <br/><br/><br/><br/><br/>

            <form onSubmit={handleSubmit(onSubmit)}>

            <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextField
                        id="outlined-multiline-static"
                        label="First Name"
                        rows={1}
                        variant="outlined"
                    {...field} />}
            />{'  '}

            <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextField
                        id="outlined-multiline-static"
                        label="Last Name"
                        rows={1}
                        variant="outlined"
                        {...field} />}
            /><br/><br/>

            <Controller
                name="note"
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextField
                        id="outlined-multiline-static"
                        label="Note"
                        multiline
                        rows={4}
                        variant="outlined"
                        {...field} />}
            /><br/><br/>

            <input type="submit" />
        </form>
        </div>

    );
}

export default Notebook;