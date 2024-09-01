import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#333333'
    },
    imagem:{
      width: 200,
      height: 200,
    },
    textoPrinc:{
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 30,
      textAlign:'center'
    },
    cxTexto:{
      backgroundColor: 'white',
      marginTop: 10,
      borderRadius: 10,
      height: 50,
      marginLeft: 15,
      marginRight: 15
    },
    texto:{
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign:'left',
      marginTop: 20,
      marginLeft: 20
    },
    viewImg:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 130
    },
    botao:{
      backgroundColor: '#CC0000',
      borderRadius: 10,
      marginTop: 20,
      borderRadius: 10,
      height: 45,
      marginLeft: 15,
      marginRight: 15
    },
    textoBtn:{
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 5
    },
    viewModal:{
      margin:15,
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    textoCalculo:{
      color: '#008000',
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 30,
      textAlign:'center'
    },
    subTexto:{
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 35,
      textAlign:'center'
    },
    textoPreco:{
      color: '#FFFFFF',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 12
    },
    botaoCalcNov:{
      backgroundColor: '#333333',
      borderRadius: 10,
      marginTop: 20,
      borderRadius: 10,
      borderColor: '#CC0000',
      borderWidth: 2,   
      height: 40,
      marginLeft: 50,
      marginRight: 50
    },
    txtBtnCalcNov:{
      textAlign: 'center',
      color: '#CC0000',
      fontWeight: 'bold',
      fontSize: 17,
      marginTop: 5
    }
    })

    export default styles;