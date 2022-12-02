import React, {useState} from 'react'
import {Text, TextInput, View ,TouchableOpacity, StyleSheet} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Passageiro from '../Models/Passageiro';

export default function RegistarP({ route }:any){
    const { registro }= route.params;
    var armazenar
    const [obterRegistro, setRegistro] = useState()
    const [passageiros, setPassageiros] = useState<Passageiro[]>()
    const [nome, setNome] = useState<string>("")
    const [select, setSelect] = useState("Selecione um nome Comercial")
    const interarSelect = () =>{
        return registro.registros.map((item :any )=>
             <Picker.Item key={item.numeroId} label={item.nomeComercial} value={item.nomeComercial}/>
         )
    }
    function Buscar(item:any){
        armazenar = registro.registros.find((x:any) => x.nomeComercial == item)
        return armazenar
    }
    function Cadastrar(obterRegistro:any){
        if(obterRegistro == undefined || obterRegistro == "Selecione um nome Comercial"){
            alert("Selecione o nome Comercial antes de continuar")
        }else{
            console.log(obterRegistro)
            if(obterRegistro.passageiros.length < obterRegistro.quantidadeDeAssentos){
                const passageiro = new Passageiro(obterRegistro.passageiros.length +1, nome)
                obterRegistro.AdicionarPassageiro(passageiro)
                setPassageiros(obterRegistro.passageiros)
                console.log(obterRegistro)
                alert('Passagem registrada com sucesso')
            }else{
                alert('Já foi registrado o maximo de passageiros')
            }  
        }
 
    }
    const renderPassageiros = () =>{
        if(passageiros == null){
            return <Text>Nenhum Passageiro Cadastrado</Text>
        }else{
            passageiros.map((item)=>{
                return <Text>{item.id}{item.nome}</Text>
            })
        }
    }
    return(
        <View style={estilos.form} >
                <Text style={estilos.titulo}>Reservas</Text>
                <Text style={estilos.label}>Selecione o nome comerial do avião para registrar:</Text>
                
                <Picker
                style={estilos.picker}
                selectedValue={select}
                onValueChange={(item,itemindex)=>{
                    setSelect(item)
                    console.log(select)
                    console.log(item)
                    armazenar = Buscar(item)
                    return setRegistro(armazenar)
                }}
                >   
                    <Picker.Item  label={"Selecione um nome Comercial"} value={"Selecione um nome Comercial"}/>             
                    {interarSelect()}
                </Picker>
                <Text style={estilos.label}>Digite o nome do passageiro para reservar a passagem:</Text>
                <TextInput
                style={estilos.input}
                value={nome}
                placeholder="Registre aqui o nome passageiro" 
                onChangeText={(e)=>setNome(e)}
                />
                <TouchableOpacity 
                    style={estilos.btn}
                    onPress={()=>Cadastrar(obterRegistro)}
                >
                    <Text style={estilos.label} >Cadastrar Passageiro</Text>
                </TouchableOpacity>
                {renderPassageiros}
        </View>
    )
}
const estilos = StyleSheet.create({
    picker:{
        backgroundColor: "#fff",
        width:'50%',
        height:'10%',
        padding:10,
        borderColor:'#000000',
        borderWidth: 1,
        borderRadius:7,
    },
    btn:{
        alignSelf:'center',
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
