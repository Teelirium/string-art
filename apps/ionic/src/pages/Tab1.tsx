import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Card } from 'ui';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Card href='#' title='fuck off'>
          fuck off
        </Card>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
