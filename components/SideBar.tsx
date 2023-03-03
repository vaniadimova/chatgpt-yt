'use client'

import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react"
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat"


function SideBar() {
    const { data: session } = useSession();

    const [chats, loading, error] = useCollection(
      session && 
      query(
        collection(db, 'users',session.user?.email!, 'chats'),
        orderBy("createdAt", "asc")
  )
);

return (
    <div className="flex flex-col h-screen p-2">
      <div className="flex-1">
        <div>
           {/*Newchat  */} 
           <NewChat /> 
           <div  className="hidden sm:inline">
            {/* ModelSelection */}
         <ModelSelection />   
      </div>

      <div className="flex flex-col my-2 space-y-2">
      {loading && (
              <div className="text-center text-white animate-pulse">
                <p>Loading Chats...</p> 
      </div>
      )}

    {/* Map through the ChatRows */}
    {chats?.docs.map(chat => (
       <ChatRow key={chat.id} id={chat.id} />
    ))}
        </div>
      </div>
   </div>   
      {session && (
          <img
                onClick={() => signOut()} 
                src={session?.user?.image!}
                alt="Profile pic"
                className="w-12 h-12 mx-auto mb-2 rounded-full cursor-pointer hover:opacity-50"
          />
        )}
    
    </div>
  )
}

export default SideBar