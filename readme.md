# Aplikacja mobilna Oceń Kierowcę

## Skład grupy
- Adam Mitręga - zarządzanie projektem, design
- Artur Ulfig 
- Maciej Ślusarek 
- Wojciech Michalik

## Opis projektu

Aplikacja służąca dodawaniu opinii o kierowcach spotykanych na drogach po numerze tablic rejestracyjnych.

## Stos technologiczny
- React Native
- Expo CLI
- reactn
- firebase
- react-navigation
## Kontrola wersji i zarządzanie projektem

Do kontroli wersji aplikacji używamy Git'a, ze zdalnym repozytorium na serwisie GitHub.com
Link do repozytorium: https://github.com/amitrega01/OcenKierowce/
Zarządzanie projektem odbywa się za pomocą serwisu Trello.

## Struktura projektu

Aplikacja została podzielona na komponenty:

- **Screens** – zawiera głowne ekrany będące "kontenerami" na resztę komponentów
- **Containers** – zawiera tzw. "Dummy components", czyli komponenty bez szczególnej funkcjolnalności, używane do przechowywania mniejszych komponentów np. elementów listy
- **Components –** inne komponenty – przyciski, nagłowki itp.
- **Consts –** pliki zwierające stałe typu kolory, ciągi znaków i style


![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559768605581_image.png)



# Backend

W ramach backend’u użyliśmy Google Firebase, a dokłądniej bazę danych Realtime Database, Firebase Storage oraz obsługę rejestracji uzytkowników Google Firebase Authentication.


## Baza danych

**Oceny uzytkowników w bazie danych są przechowywane w nastepującej formie**

![](https://paper-attachments.dropbox.com/s_81F72DA69723EF0838B7DCD3778ED7F76043C603C34B3E7CC2548969091F2274_1559768474089_image.png)


**Dane użytkownika**

![](https://paper-attachments.dropbox.com/s_81F72DA69723EF0838B7DCD3778ED7F76043C603C34B3E7CC2548969091F2274_1559768516456_image.png)

## Design aplikacji

Ekran startowy. 

![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559768820495_image.png)


Ekran do rejestracji.

![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559771226512_image.png)


Ekran logowania.

![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559771347694_image.png)


Ekran dodawania nowej wiadomości.

![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559771402108_image.png)


Ekran główny dla anonimowego użytkownika.

![](https://paper-attachments.dropbox.com/s_F40F21A887B88E3739368B4CD66463054F46D58B3B626E94E83FC43FC631120E_1559769077499_image.png)



## Działanie aplikacji

**Logowanie i rejestracja**
Logowanie może odbyć się anonimowo lub przez email. Logujący się anonimowo nie mają dostępu do ocen wystawionych na ich numer rejestracyjny. Osoba zalogowana przez adres email, po wstępnej konfiguracji konta zostaje wpisana do bazy użytkowników oraz generowany jest dla niej klucz ID. Po zalogowaniu osoba zostaje zapamiętana w pamięci lokalnej telefonu, przez co nie będzie już konieczne wpisywanie ponowne danych logowania.

**Ekran główny**
Na ekranie głównym użytkownik widzi opinie o jego numerze rejestracyjnym, opinie z okolicy oraz przycisk do dodawania nowej opinii. Postawiliśmy na minimalizm i praktyczność, nie implementując zbędnych funkcji, aby obsługa aplikacji była prosta i intuicyjna. 

**Dodawanie oceny**
Użytkownik po wypełnieniu formularza, wysyła dane na serwer gdzie zdjęcie, jeśli zostało dołączone, ma generowaną miniaturę, która będzie wyświetlana na liście opinii, natomiast reszta danych zostaje zapisana w bazie z nowym kluczem ID.


## Przykładowe fragmenty kodu

**Komponent** ****
Przycisk z opinią, znajdujący się na ekranie głównym.

    import React, { Component } from 'react';
    import { TouchableOpacity, Text, StyleSheet } from 'react-native';
    class Opinion extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        var color;
        switch (this.props.opinion.type) {
          case 'UPVOTE': {
            color = '#02e053';
            break;
          }
          case 'DOWNVOTE': {
            color = '#ed0000';
            break;
          }
        }
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.wrapper, { backgroundColor: color }]}
            onPress={this.props.onPress}>
            <Text style={styles.text}>{this.props.opinion.message}</Text>
          </TouchableOpacity>
        );
      }
    }
    export default Opinion;
    const styles = StyleSheet.create({
      wrapper: {
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        elevation: 4,
        borderRadius: 20,
        padding: 20,
      },
      text: {
        fontWeight: 'normal',
        color: '#fff',
        fontSize: 15,
      },
    });
    

**Ekran**
Ekran domowy.

    import React from 'reactn';
    import {
      Text,
      KeyboardAvoidingView,
      TouchableOpacity,
      View,
      Platform,
    } from 'react-native';
    import Styles from '../consts/Styles';
    import RecentAlerts from '../containers/RecentAlerts';
    import Footer from '../containers/Footer';
    import { Constants, Location, Permissions } from 'expo';
    import * as firebase from 'firebase';
    import AboutYou from '../containers/AboutYou';
    import SearchBar from '../containers/SearchBar';
    export class HomeScreen extends React.Component {
      static navigationOptions = {
        header: null,
      };
      constructor(props) {
        super(props);
      }
      componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
          console.log(
            'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
          );
        } else {
          console.log('GETTING LOCATION');
          this._getLocationAsync();
        }
      }
      _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          console.log('NO PERMISSION');
        }
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        let addres = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        console.log(addres);
        this.setGlobal({ region: addres[0].region });
      };
      render() {
        if (firebase.auth().currentUser.isAnonymous) {
          return (
            <KeyboardAvoidingView behavior='padding' style={Styles.wrapper}>
              {/* wariant dla anonimowych */}
              <SearchBar callback={() => this.props.navigation.navigate('About')} />
              <RecentAlerts
                callback={() => this.props.navigation.navigate('OpinionDetails')}
              />
              <Footer
                style={{ position: 'fixed', bottom: 0 }}
                bigButtonPress={() => this.props.navigation.navigate('NewMessage')}
              />
            </KeyboardAvoidingView>
          );
        } else {
          return (
            <KeyboardAvoidingView behavior='padding' style={Styles.wrapper}>
              <SearchBar callback={() => this.props.navigation.navigate('About')} />
              <AboutYou />
              <RecentAlerts
                callback={() => this.props.navigation.navigate('OpinionDetails')}
              />
              <Footer
                style={{ position: 'fixed', bottom: 0 }}
                bigButtonPress={() => this.props.navigation.navigate('NewMessage')}
              />
            </KeyboardAvoidingView>
          );
        }
      }
    }
    export default HomeScreen;
    

