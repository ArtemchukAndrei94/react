import React from "react";
import {newMessageTextActionCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsCont = () => {


    return <StoreContext.Consumer>
        {
        (store) => {
            let dialogsPage = store.getState().dialogsPage;
            let sendMsg = () => {
                return store.dispatch(sendMessageCreator());
            };

            let onChangeMsg = (msg) => {
                store.dispatch(newMessageTextActionCreator(msg));
            };
            return <Dialogs
                updateNewMessageBody={onChangeMsg}
                sendMessage={sendMsg}
                dialogsPage={dialogsPage}
            />
        }

    }
    </StoreContext.Consumer>

};

export default DialogsCont;