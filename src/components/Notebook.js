import React from "react";
import { useForm, Controller, SubmitHandler} from "react-hook-form";
import {TextField, Checkbox, Input, Button} from "@material-ui/core";
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
                name="from"
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextField
                        id="outlined-multiline-static"
                        label="From:"
                        rows={1}
                        variant="outlined"
                    {...field} />}
            />{'  '}

            <Controller
                name="to"
                control={control}
                defaultValue=""
                render={({ field }) =>
                    <TextField
                        id="outlined-multiline-static"
                        label="To:"
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
                        label="Note:"
                        multiline
                        rows={10}
                        variant="outlined"
                        {...field} />}
            /><br/><br/>

            <Button
                type="submit"
                variant="contained"
                color="primary">
                Submit
            </Button>
        </form>
        </div>

    );
}

export default Notebook;