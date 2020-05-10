import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name="Andrey" id="1"/>
                <Dialog name="Sveta" id="2"/>
                <Dialog name="Anna" id="3"/>
                <Dialog name="Vika" id="4"/>
            </div>
            <div className={classes.messages}>
                <div>
                    <Message message="Hi" />
                    <Message message="How are you?" />
                    <Message message="Fine!!!" />
                </div>
            </div>
        </div>
    );
};

export default Dialogs;