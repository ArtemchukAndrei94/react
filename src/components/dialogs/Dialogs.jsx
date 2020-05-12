import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";

const Dialogs = (props) => {
    debugger
    let dialogsEl = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesEl = props.state.messages.map(m => <Message message={m.message}/>);

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