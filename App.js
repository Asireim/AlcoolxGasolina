import React, {Component} from 'react';
import {
  Text, 
  View,
  Modal,
  Image,
  TextInput
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import styles from './src/styles.js';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      modalVisivel: false,
      texto: 'teste',
      precoAlcool: '',
      precoGas: ''
    };

    this.sair = this.sair.bind(this);
    this.calculo = this.calculo.bind(this);
  }

  sair(visivel){
    this.setState({ modalVisivel: visivel });
  }

  calculo(){
    this.setState({modalVisivel: true});

    const precoAlcool = parseFloat(this.state.precoAlcool);
    const precoGas = parseFloat(this.state.precoGas);

    if (!isNaN(precoAlcool) && !isNaN(precoGas)) {
      const calculo = precoAlcool / precoGas;
      if (calculo <= 0.7) {
        this.setState({texto: 'Compensa usar Álcool'});
      } else {
        this.setState({texto: 'Compensa usar Gasolina'});
      }
    } else {
      this.setState({ texto: 'Valores inválidos' });
    }
  }  

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.viewImg}>
          <Image 
          source={require('./src/logo.png')}
          style={styles.imagem}  
          />
        </View>

        <View>
          <Text style={styles.textoPrinc}>Qual a melhor opção?</Text>
        </View>

        <View style={styles.viewTexto}>

          <Text style={styles.texto}>Álcool (preço por litro):</Text>
          <TextInput 
            style={styles.cxTexto} 
            keyboardType="numeric"
            onChangeText={ (valorAlcool) => this.setState({precoAlcool: valorAlcool})}  
          />
          <Text style={styles.texto}>Gasolina (preço por litro):</Text>
        
          <TextInput 
          style={styles.cxTexto} 
          keyboardType="numeric"
          onChangeText={ (valorGas) => this.setState({precoGas: valorGas})}
          />

        </View>
        
        <TouchableOpacity
          style={styles.botao}
          onPress={this.calculo}>
          <Text style={styles.textoBtn}>Calcular</Text>
        </TouchableOpacity>

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisivel}>
          <View style={styles.container}>

                <View style={styles.viewImg}>
                  <Image 
                    source={require('./src/gas.png')}
                    style={styles.imagem}  
                  />
                </View>  

                <View>
                    <Text style={styles.textoCalculo}>{this.state.texto}</Text>
                </View>

                <View>
                    <Text style={styles.subTexto}>Com os preços:</Text>
                </View>

                <View>
                  <Text style={styles.textoPreco}>Álcool: R$ {this.state.precoAlcool}</Text>
                  <Text style={styles.textoPreco}>Gasolina: R$ {this.state.precoGas}</Text>
                </View>

                <TouchableOpacity
                  style={styles.botaoCalcNov}
                  onPress={ ()=> this.sair(false)}
                >
                  <Text style={styles.txtBtnCalcNov}>Calcular novamente</Text>
                </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

