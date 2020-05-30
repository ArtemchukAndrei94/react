import React from "react";
import {newMessageTextActionCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsCont = (props) => {
    let dialogsPage = props.store.getState().dialogsPage;
    let sendMsg = () => {
        return props.store.dispatch(sendMessageCreator());
    };

    let onChangeMsg = (msg) => {
        props.store.dispatch(newMessageTextActionCreator(msg));
    };

    return (
        <Dialogs
            updateNewMessageBody={onChangeMsg}
            sendMessage={sendMsg}
            dialogsPage={dialogsPage}
        />
    );
};

export default DialogsCont;