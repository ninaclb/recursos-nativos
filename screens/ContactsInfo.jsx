import { View, StyleSheet, FlatList, TextInput, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCallback, useState } from "react";
import * as Contacts from "expo-contacts";
import * as Notification from "expo-notifications";
import Items from "../components/Items";
import { useFocusEffect } from "@react-navigation/native";

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
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState();
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchText, setSearchText] = useState("");


  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });
    setContacts(data);
    setFilteredContacts(data);
  }

  const filterContacts = (text) => {
    setSearchText(text);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  async function notiMensagem() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Nome do contato",
        subtitle: "Numero do contato",
        body: "...",
      },
      trigger: { seconds: 3 },
    });
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          await carregarContatos();
        }
      })();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Header title={"Contatos"} style={styles.titulo} />
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Filtrar por nome"
          value={searchText}
          onChangeText={filterContacts}
        />
        <View style={styles.container}>
          {filteredContacts.length > 0 ? (
            <FlatList
              style={{ flex: 1, gap: 10 }}
              data={filteredContacts}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => 
              <Items item={item} notiMensagem={notiMensagem}/>}//ele fala que a função nao existe sendo que era apenas ele puxar a função de outro arquivo
            />
          ) : (
            <Text>Nenhum contato listado ... </Text>
          )}
        </View>
      </View>
      <Footer onPress={() => navigation.back()} />
    </View>
  );
}
