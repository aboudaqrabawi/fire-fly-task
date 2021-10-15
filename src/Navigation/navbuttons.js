import { IonButton, IonMenuButton } from "@ionic/react";
import  { useEffect, useState } from 'react';

export const NavButtons =() =>{

const [mQuery,setMQuery] = useState({
    matches: window.innerWidth > 768 ? true : false,
});

useEffect(()=>{
    window.matchMedia("(min-width: 768px)").addListener(setMQuery)
})

console.log(mQuery.matches)

return (
    <div >
        {mQuery && !mQuery.matches ? (
            <IonMenuButton/>
        ) :(

            <>
                <IonButton routerLink ={"/"} > Home </IonButton>
                <IonButton routerLink ={"/LogHistory"} > Home </IonButton>



            </>
        )}


    </div>
)

}