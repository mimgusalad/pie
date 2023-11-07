import React, { useState } from "react";

export default function Avatar(props){
 const { message, userId, onDeleteMessage, onUpdateMessage } = props;
    const avatar = message.sender.plainProfileUrl ?  message.sender.plainProfileUrl : 'https://yt3.ggpht.com/ytc/AKedOLQc1OCf9gztVmcVnmI_41uN9axrRP8wd4a-GflFRQ=s900-c-k-c0x00ffffff-no-rj';


}