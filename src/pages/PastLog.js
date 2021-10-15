import { IonContent, IonFooter, IonGrid, IonHeader, IonItem
	,IonPage , IonToolbar,IonButton ,IonLabel
	,IonListHeader,IonBackButton ,IonButtons,IonTitle, IonList } from '@ionic/react';
import { useEffect, useState } from 'react';

import styles from "./PastLog.module.css";
import { NavButtons } from '../Navigation/navbuttons';
import { useStoreState } from 'pullstate';
import { PastLogStore } from '../store';
import { getPastLogs } from '../store/Selectors';


const Home = () => {

	const saved = useStoreState(PastLogStore, getPastLogs);
	console.log(saved)

	return (
		<IonPage >
			<IonHeader >
		<IonToolbar className={styles.header}  color="yellow">
		 <IonButtons slot="start" className={styles.menu}>
		<NavButtons />
		 </IonButtons>
	 </IonToolbar>
	</IonHeader>
  <IonContent fullscreen>
  <IonListHeader  className={styles.ListHeader} >
      <IonLabel>Log History</IonLabel>
    </IonListHeader>


  <IonList >
			{saved.map(item =>{
				return   <IonItem lines="full" >
					{item}
					 </IonItem>

			})}

</IonList>

  </IonContent>



		
		</IonPage>
	);
};

export default Home;
