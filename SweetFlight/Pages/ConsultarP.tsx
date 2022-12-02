import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'


export default function ConsultarP({route}:any){
    const {registro} = route.params
    var armazenar;
    var result;
    const [obterConsulta, setConsulta ] = useState();
    const [nomeP, setNomeP] = useState()
    function ListaEncontrada(){
        if(obterConsulta == undefined){
            return <Text style={estilos.label}>Digite o nome do passageiro para prosseguir</Text>
        }else{
            return obterConsulta.map((item:any)=>{
                var aviao = item.nomeComercial
                var passageiro = item.passageiros.map((x:any)=>{
                    if(x.nome == nomeP){
                        return x.nome
                    }
                })
                result = passageiro.map((item:any)=>{ 
                    if(item != undefined){
                        return <Text>O passageiro {item} está registrado no aviao comercial:{aviao}</Text>
                    }
                    })
                
                return result
            })
        }
    }
    function Buscar(){
        armazenar = registro.registros.filter(x=> x.passageiros.find(x=> x.nome == nomeP))
        if(armazenar == 0){
            alert("Não existe passageiro com esse nome!")
            return armazenar
        }else{
            console.log(armazenar)
            return setConsulta(armazenar)
        }
    }
    return(
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Consultar Passageiro</Text>
            <Text style={estilos.label}>Informe o passageiro que deseja consultar no registro:</Text>
            <TextInput
            style={estilos.input}
            placeholder='Digite aqui o nome do passageiro'
            value={nomeP}
            onChangeText={(e:any)=>setNomeP(e)}
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