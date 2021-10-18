import {
    IonContent,
    IonFooter,
    IonGrid,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonTextarea,
    IonButton,
    IonItem,
    IonBackButton,
    IonTitle,
    IonIcon,
    IonMenuButton
  } from "@ionic/react";
 import {NavButtons} from '../../Navigation/navbuttons'
 import styles from "./Header.module.css";
 import { menuOutline } from 'ionicons/icons';
  const Header = () => {
 
    return (
    
         <IonHeader >
        <IonToolbar>
       
    
      <IonMenuButton slot="start" color="light" />
         
        </IonToolbar>
      </IonHeader>
  
     
  
  
    );
  };
  
  export default Header;
