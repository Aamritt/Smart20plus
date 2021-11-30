import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Alert,
    TouchableOpacity,
} from 'react-native';

import {
    TextInput,
    Button
} from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./../screens/AuthScreens/authStyle";
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

const DashBoard = ({ navigation }) => {


    const [userData, setUserData] = useState({});
    const [board, setBoard] = useState("");
    const [sclass, setSClass] = useState("");
    const [subject, setSubject] = useState("");
    const [chapter, setChapter] = useState("");
    const [concept, setConcept] = useState("");
    const [subConcept, setSubConcept] = useState("");
    const [subSubConcept, setSubSubConcept] = useState("");
    const [level, setLevel] = useState("");
    const [usage, setUsage] = useState("");

    //   const fetchToken = async () => {
    //     const userToken = await AsyncStorage.getItem('token');

    //     fetch('http://10.0.2.2:3000/', {
    //       headers: new Headers({
    //         Authorization: `Bearer ${userToken}`
    //       })
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         console.log(data);
    //         setUserData(data.data);

    //       })
    //       .catch(err => console.log('Error - ', err));
    //   }

    //   useEffect(() => {
    //     fetchToken();
    //   }, []);




    return (

        <KeyboardAvoidingWrapper>
            <View style={{ padding: 40, backgroundColor: 'white', justifyContent: 'center', }}>

                <TextInput
                    label="Board"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={board}
                    onChangeText={(inputText) => setBoard(inputText)}
                />
                <TextInput
                    label="Class"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={sclass}
                    onChangeText={(inputText) => setSClass(inputText)}
                />
                <TextInput
                    label="Subject"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={subject}
                    onChangeText={(inputText) => setSubject(inputText)}
                />
                <TextInput
                    label="Chapter"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={chapter}
                    onChangeText={(inputText) => setChapter(inputText)}
                />
                <TextInput
                    label="Concept"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={concept}
                    onChangeText={(inputText) => setConcept(inputText)}
                />
                <TextInput
                    label="Sub Concept"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={subConcept}
                    onChangeText={(inputText) => setSubConcept(inputText)}
                />
                <TextInput
                    label="Sub Sub Concept"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={subSubConcept}
                    onChangeText={(inputText) => setSubSubConcept(inputText)}
                />
                <TextInput
                    label="Level"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={level}
                    onChangeText={(inputText) => setLevel(inputText)}
                />
                <TextInput
                    label="Usage"
                    // mode="outlined"
                    theme={{
                        colors: {
                            primary: "blue",
                        },
                    }}
                    style={styles.textInput}
                    autoCapitalize="none"
                    value={usage}
                    onChangeText={(inputText) => setUsage(inputText)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10, }}>
                    <Button
                        mode="contained"
                        style={styles.button}
                        onPress={() => {
                            if (board === "" || sclass === "" || subject === "" || chapter === "" || concept === "" || subConcept === "" || subSubConcept === "" || level === "" || usage === "") {
                                return Alert.alert("Please fill the above fields properly.");
                            }

                            sendCredentials();
                        }}
                    >
                        Submit
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.button}
                    >
                        Cancel
                    </Button>
                </View>


            </View>
        </KeyboardAvoidingWrapper>

    );
}


export default DashBoard;