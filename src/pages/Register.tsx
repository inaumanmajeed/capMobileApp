import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonItemDivider,
  IonList,
  IonPage,
  IonRoute,
  IonText,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./styles.css";
import Logo from "../assets/main/Logo.svg";
import bg from "../assets/main/BackgroundImage.svg";
import CustomInput from "../components/shared/input/input";
import CustomButton from "../components/shared/button/Button";
import fb from "../assets/login/logo-facebook.svg";
import { logIn } from "ionicons/icons";

const Register: React.FC = () => {
  const onClick = () => {
    console.log("Login clicked");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonImg class="Logo__main" src={Logo} className="logo" />
      </IonHeader>
      <IonImg class="bg__main" src={bg} />
      <IonContent className="ion-padding content-center">
        <IonText class="heading-main">
          <h1>SIGN UP</h1>
        </IonText>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>Sign up with email address</IonCardTitle>
            <form>
              <CustomInput
                label="User Name"
                type="text"
                placeholder="User Name"
              />
              <CustomInput
                label="Email"
                type="email"
                placeholder="Email"
                clearInput={true}
              />
              <CustomInput
                label="Password"
                type="password"
                placeholder="Password"
              />
            </form>
            <CustomButton
              rippleColor="custom-parent"
              title="Sign Up"
              onClick={onClick}
            />
            <h6 className="divider" />
            <IonText class="content-other">Already have an account?</IonText>
            <IonList>
              <CustomButton title="Login" background="#3B2063" routeTo='/login' />
            </IonList>
            <IonText class="content-terms">
              By registering you with our
              <span className="link__terms">Terms and Conditions</span>
            </IonText>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
