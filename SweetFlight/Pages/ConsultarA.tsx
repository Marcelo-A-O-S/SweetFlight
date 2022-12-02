import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'


export default function ConsultarA({route}:any){
    const {registro} = route.params
    var armazenar;
    const [obterConsulta, setConsulta ] = useState();
    const [nomeA, setNomeA] = useState()
    function ListaEncontrada(){
        if(obterConsulta == undefined){
            return <Text style={estilos.label}>Digite o nome comercial para prosseguir</Text>
        }else{
            return obterConsulta.map((item:any)=>{
                return <Text style={estilos.label}>O avião comercial {item.nomeComercial} está registrado!</Text>
            })
        }
    }
    function Buscar(){
        armazenar = registro.registros.filter(x=> x.nomeComercial == nomeA)
        if(armazenar == 0){
            alert("Não existe avião comercial com esse nome!")
            return armazenar
        }else{
            console.log(armazenar)
            return setConsulta(armazenar)
        }
    }
    return(
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Consultar Avião Comercial</Text>
            <Text style={estilos.label}>Informe o Avião comercial que deseja consultar no registro:</Text>
            <TextInput
            style={estilos.input}
            placeholder='Digite o nome Comercial do Avião'
            value={nomeA}
            onChangeText={(e:any)=>setNomeA(e)}
            />
            <TouchableOpacity 
            style={estilos.btn}
            onPress={()=>Buscar()}
            >
            <Text style={estilos.label}>Consultar</Text>
            </TouchableOpacity>
            <Text style={estilos.titulo}>Relatório</Text>
            {ListaEncontrada()}
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
        width:100,
    },
    form:{
        alignContent:"center",
        justifyContent:"center",
        backgroundColor: "#f1950b",
        alignItems:"center",
        height:'100%',
    
    },
    input:{
        flexWrap:'nowrap',
        backgroundColor: "#ffffff",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
        width:"50%",
    },
    titulo:{
        color:"#ffffff",
        fontFamily: "bold",
        fontSize:20,
    },
    label:{
        fontSize:15,
        fontFamily: "Cochin",
        color:"#ffffff",
    }
})