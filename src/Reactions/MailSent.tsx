import React from "react";

interface IMailSent{

}

const MailSent:React.FunctionComponent<IMailSent> = ()=>{
    return(
        <div id="mail-sent-message">
<img src="https://hawkemedia.com/wp-content/uploads/Email-Gif.gif" id="mail-sent-img"/>
        </div>
    )
}
export default MailSent;