import { Text, View , TouchableOpacity , StyleSheet, BackHandler, Alert} from "react-native";

export default function Config(){
    function Sair(){
        Alert.alert("Sair", "Tem certeza de que quer sair?", [
            {
              text: "Cancelar",
              onPress: () => null,
              style: "cancel"
            },
            { text: "Sim", onPress: () => BackHandler.exitApp()}
          ]);
          return true;
    }
    return(
        <View>
                <TouchableOpacity 
                    style={estilos.btnSair}
                    onPress={Sair}
                    >
                    <Text style={estilos.label}>Sair</Text>
                </TouchableOpacity>
        </View>
    )
}
const estilos = StyleSheet.create({
    btnSair:{
        width:'100%',
        backgroundColor:'#ebe0e0',
        height:'25%',
        alignItems:'center',
        justifyContent:'center',
    },
    label:{
        fontFamily:"bold",
        fontSize:20,
    }
})