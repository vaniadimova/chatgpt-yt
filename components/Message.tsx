import { DocumentData } from "firebase/firestore";

type Props = {
    message: DocumentData;
};


function Message({message} : Props) {
    const isChatGPT = message.user.name === "ChatGPT";
  return (
    <div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
       <div className="flex max-w-2xl px-10 space-x-5 max-auto ">
       <img src={message.user.avatar} 
            alt=""
            className="w-8 h-8"
             />
       <p className="pt-1 text-sm">{message.text}</p> 
         
       </div>
    </div>
  )
}

export default Message