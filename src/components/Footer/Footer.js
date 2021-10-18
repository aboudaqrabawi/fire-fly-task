import {
    IonHeader,
    IonToolbar,
    IonMenuButton,
    IonFooter,
    IonGrid,
    IonCol,
    IonRow,
    IonButton
} from "@ionic/react";
import styles from './Footer.module.css'
import ButtonRow from "../../components/ButtonRow";
import { buttons } from "../../utils/Buttons";
import Button from "../../components/Button";


const Footer = (props) => {


    return (

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
                clickEvent={props.data}
              />
            );
          })}
        </ButtonRow>
      );
    })}
  </IonGrid>
</IonFooter>



    );
};



  
  

export default Footer;
