import React from "react";
import classes from "./Dialogs.module.css";
import Dialog from "./dialog/Dialog";
import Message from "./message/Message";
import {newMessageTextActionCreator, sendMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
    let dialogsEl = state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesEl = state.messages.map(m => <Message message={m.message}/>);

    let onChangeMsg = (event) => {
        let msg = event.target.value;
        let action = newMessageTextActionCreator(msg);
        props.store.dispatch(action);
    };
    let sendMsg = () => {
        return props.store.dispatch(sendMessageCreator());
    };

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={classes.messages}>
                <div>
                    <div>{messagesEl}</div>
                    <div><textarea onChange={onChangeMsg}
                                   placeholder='Enter your msg'
                                   value={state.newMessageText}/></div>
                    <div><button onClick={sendMsg}>Save message</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;