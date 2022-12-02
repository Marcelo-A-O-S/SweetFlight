import * as React from 'react';
import { useRoute } from '@react-navigation/native';
import { TextInput, Button , Text, StyleSheet, View  , TouchableOpacity } from 'react-native'
import Aviao from '../Models/Aviao';



export default function RegistrarA({route}:any){
    const Rotas = useRoute()
    const { registro } = route.params;
    const [numeracao, setNumeracao] = React.useState<string>()
    const [nomeComercial, setNomeComercial] = React.useState<string>()
    const [quantidadeAssentos, setQuantidadeAssentos] = React.useState<string>()
    function CadastroNumero(e:any){      
        setNumeracao(e)
    }
    function Cadastrar(){
        const aviao = new Aviao(parseInt(numeracao ,10), nomeComercial,parseInt(quantidadeAssentos, 10))
        registro.AdicionarRegistro(aviao)
        console.log(registro)
        console.log(registro.registros.length)
    }
    return(
        <View style={estilos.form}>
            <Text style={estilos.titulo}>Registro de Avião Comercial</Text>
            <Text style={estilos.label}>Registre o numero</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Registre aqui o numero" 
            value={numeracao}
            keyboardType="numeric"
            onChangeText={(e)=>CadastroNumero(e)}
            />
            <Text style={estilos.label}>Registre o nome comercial</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Registre aqui o nome" 
            value={nomeComercial}
            onChangeText={(e)=>setNomeComercial(e)}
            />
            <Text style={estilos.label}>Registre a quantidade</Text>
            <TextInput 
            style={estilos.input}
            placeholder="Registre a quantidade de assentos"
            value={quantidadeAssentos}
            keyboardType="numeric"
            onChangeText={(e)=>setQuantidadeAssentos(e)}
            />
            <TouchableOpacity 
            style={estilos.btn}
            onPress={()=>Cadastrar()}
            >
            <Text style={estilos.label}>Cadastrar</Text>
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