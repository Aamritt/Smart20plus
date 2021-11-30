import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, navigation}) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.header}>
            <MaterialIcons 
                name='menu' 
                size={25} 
                style={styles.icon}
                onPress={openMenu}
            />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left:0
    }

});

export default Header;