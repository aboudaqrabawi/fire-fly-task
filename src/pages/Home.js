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
} from "@ionic/react";
import { useEffect, useState } from "react";
import { trim, handleZero } from "../utils/Helpers";
import ButtonRow from "../components/ButtonRow";
import styles from "./Home.module.css";
import { NavButtons } from "../Navigation/navbuttons";
import { buttons } from "../utils/Buttons";

import Button from "../components/Button";
import { addPastLogs } from "../store/PastLogStore";

const Home = () => {
  const [Equa, setEqua] = useState("");

  const handleClick = async (e, operator) => {
    if (operator === "C") {
      setEqua("0");
    } else if (operator === "=") {
      addPastLogs(`${trim(Equa)} = ${eval(Equa)}`);

      setEqua(eval(Equa));
    } else if (Equa[0] === "0") {
      setEqua(operator);
    } else {
      setEqua(Equa + operator);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={styles.header} color="yellow">
          <IonButtons slot="start" className={styles.menu}>
            <NavButtons />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem className={styles.sumContainer} lines="none" color="yellow">
          <IonTextarea className={styles.sumcon}>
            {Equa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </IonTextarea>
        </IonItem>
      </IonContent>

      <IonFooter>
        <IonGrid className={styles.calculatorContainer}>
          {buttons.map((buttonRow, index) => {
            return (
              <ButtonRow key={index}>
                {buttonRow.map((button) => {
                  return (
                    <Button
                      key={button.value}
                      value={button.value}
                      special={button.special}
                      clickEvent={handleClick}
                    />
                  );
                })}
              </ButtonRow>
            );
          })}
        </IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
