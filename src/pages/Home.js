import {
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonTextarea,
  IonItem,
  IonBackButton,
  IonTitle,
  IonLabel,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { addPastLogs } from "../store/PastLogStore";
import { trim, handleZero } from "../utils/Helpers";
import styles from "./Home.module.css"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Home = () => {
  

  const [Equa, setEqua] = useState("");
  const handleClick = async (e, operator) => {
    if (operator === "C") {
      setEqua("0");
    } else if (operator === "=") {
      addPastLogs(`${trim(Equa)} = ${eval(Equa)}`);

      setEqua(eval(Equa).toString());
    } else if (Equa[0] === "0") {
      setEqua(operator);
    } else {
      setEqua(Equa + operator);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <Header />
      </IonHeader>

      <IonContent fullscreen>
        <IonTextarea disabled>
          {Equa.length < 5 ? (
            <IonLabel className={styles.sumContainerhead}>
              {Equa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </IonLabel>
          ) : Equa.length < 15 ? (
            <IonLabel className={styles.sumContainerhead2}>
              {Equa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </IonLabel>
          ) : Equa.length < 18 ? (
            <IonLabel className={styles.sumContainerhead3}>
              {Equa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </IonLabel>
          ) : (
            <IonLabel className={styles.sumContainerhead4}>
              {Equa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </IonLabel>
          )}
        </IonTextarea>
      </IonContent>

      <Footer data={handleClick} />
    </IonPage>
  );
};

export default Home;


