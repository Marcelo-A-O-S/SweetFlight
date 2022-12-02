import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Registro from '../Models/Registro'
export default function Home(){
    const registro = new Registro()
    const navigation = useNavigation()
    return(
        <View style={estilos.page}>
            <Text style={estilos.titulo}>Serviços</Text>
                <TouchableOpacity 
                    style={estilos.btn}
                    onPress={()=> navigation.navigate("RegistrarA",{
                        registro,
                    })}
                    >
                    <Text style={estilos.label}>Registrar Aviação Comercial</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={estilos.btn}
                    onPress={()=> navigation.navigate("RegistarP",{
                        registro, 
                    })}
                    >
                    <Text style={estilos.label}>Reservar passagem</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={estilos.btn}
                    onPress={()=> navigation.navigate("ConsultarP",{
                        registro,
                    })}
                    >
                    <Text style={estilos.label}>Consultar Passageiro</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={estilos.btn}
                    onPress={()=> navigation.navigate("ConsultarA",{
                        registro,
                    })}
                    >
                    <Text style={estilos.label}>Consultar Avião</Text>
                </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    btn:{
        alignItems:"center",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:7,
        backgroundColor:"#f10b0b",
        color:"#f9f9f9",
        height:40,
        width:"auto",
        padding:10,
        margin:10,
    },
    titulo:{
        color:"#d80000",
        fontFamily: "bold",
        fontSize:20,
    },
    page:{
        height:'100%',
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
    },
    label:{
        fontSize:15,
        fontFamily: "Cochin",
        color:"#ffffff",
    }
})