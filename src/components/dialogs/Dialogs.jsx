import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Vika"}
    ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Fine!!"}
    ];

    let dialogsEl = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesEl = messagesData.map(m => <Message message={m.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesEl}
                </div>
            </div>
        </div>
    );
};

export default Dialogs;