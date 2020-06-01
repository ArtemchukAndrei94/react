import React from "react";
import {newMessageTextActionCreator, sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"

/*const DialogsCont = () => {


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

};*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (msg) => {
            dispatch(newMessageTextActionCreator(msg));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

const DialogsCont = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsCont;