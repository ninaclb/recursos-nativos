import { View, StyleSheet} from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCallback, useEffect, useState } from "react";
import * as Contacts from "expo-contacts";
import { FlatList } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#B0E0E6",
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    color: "white",
    alignContent: "center",
    marginTop: 200,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#B0E0E6",
    padding: 10,
    margin: 10,
    color: "#6750A4",
  },
  botao: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    gap: 10,
    alignContent: "center",
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState([]);

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [
        Contacts.Fields.Emails,
        Contacts.Fields.PhoneNumbers],
    })
    setContacts(data);
    console.log(contacts);
  }



  useEffect((
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          carregarContatos();
        }
      })();
    })
  ), []);


 
  return (
    <View style={styles.container}>
      <Header title={"Contatos"} style={styles.titulo} />
      <View>{
        contacts
        ? <FlatList
        style={{flex: 1, gap: 10}}
        data={contacts}
        KeyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          <Items 
            item={item}
          />
        }}
        />
        :<></>
      }
        

        
      </View>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
