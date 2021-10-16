import React from "react";
import dialogsCss from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogItems}>
                <div className={dialogsCss.dialog}>
                    Andrey
                </div>
                <div className={dialogsCss.dialog}>
                    Valera
                </div>
                <div className={dialogsCss.dialog}>
                    Oleg
                </div>
                <div className={dialogsCss.dialog}>
                    Vova
                </div>
                <div className={dialogsCss.dialog}>
                    Dima
                </div>
            </div>
            <div className={dialogsCss.message}>
                hello
            </div>
            <div className={dialogsCss.message}>
                how are you?
            </div>
            <div className={dialogsCss.message}>
                Where are you from?
            </div>
            <div className={dialogsCss.message}>
                How old are you?
            </div>
            <div className={dialogsCss.message}>
                What is the cool t-shirt?
            </div>

        </div>
    )
}

export default Dialogs;