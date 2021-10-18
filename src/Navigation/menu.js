import { IonContent, IonFooter, IonGrid, IonHeader, IonPage , IonToolbar ,IonBackButton ,IonButtons,IonTitle, IonMenu, IonList, IonMenuButton, IonMenuToggle, IonItem, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';


const Menu = () => {

	

	return (
		<IonMenu side="start"  contentId="main"  >
<IonHeader >
<IonToolbar color= "light">
    <IonTitle>
        Menu
    </IonTitle>
</IonToolbar>
</IonHeader>
<IonContent>
    <IonList>
        <IonMenuToggle autoHide="false">
            <IonItem button routerLink ={"/"} >
                <IonLabel>
                    Home
                </IonLabel>
            </IonItem>
            <IonItem button routerLink ={"/LogHistory"}>
                <IonLabel>
                    Log History 
                </IonLabel>
            </IonItem>

            

        </IonMenuToggle>
    </IonList>
</IonContent>
        </IonMenu>
		
	);
};

export default Menu;
