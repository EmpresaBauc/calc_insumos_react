import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {TextInput, StyleSheet, Button, Text, Image, Alert, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

export default function Pisos() {
  const [valueX, onChangeTextX] = React.useState('1.5');
  const [valueY, onChangeTextY] = React.useState('1.5');
  const [qtdPecas, onChangeQtdPecas] = React.useState('0');
  const [qtdArgamassa, onChangeQtdArgamassa] = React.useState('0');
  const [tempoPed, onchangeTempoPed] = React.useState('0');
  const [tempoAjud, onChangeTempoAjud] = React.useState('0');
  

  function conversaoTempo(quantidade){
    let quantidadeMinutos = 0
    let quantidadeHoras = 0;
    let tempo = "";
    quantidadeMinutos = quantidade * 60;

    if(quantidadeMinutos>60){
      quantidadeHoras = quantidadeMinutos/60;
      quantidadeMinutos = quantidadeMinutos%60;
    }

    quantidadeHoras = parseInt(quantidadeHoras);
    quantidadeMinutos = parseInt(quantidadeMinutos);
    
    if(quantidadeHoras == 0){
      tempo = quantidadeMinutos+" minutos";
    }else{
      tempo = quantidadeHoras+" horas e "+quantidadeMinutos+" minutos";
    }
    return(tempo);
  }

  function calculaPisos(){
    var valorX = 0;
    var valorY = 0;
    var area = 0;
    var quantidadePecas = 0;
    var quantidadeArgamassa = 0;
    var tempoPedreiroDec = 0;
    var tempoPedreiro = 0;
    var tempoAjudanteDec = 0;
    var tempoAjudante = 0;

    valorX = parseFloat(valueX);
    valorY = parseFloat(valueY);
    area = valorX*valorY;
    quantidadePecas = area/2.25;


    //calculando quantidade de argamasa
    quantidadeArgamassa = area * 4.40;

    //calculando quantidade de tempos
    tempoPedreiroDec = area*0.44;
    tempoPedreiro = conversaoTempo(tempoPedreiroDec);
    tempoAjudanteDec = area*0.22;
    tempoAjudante = conversaoTempo(tempoAjudanteDec);
    
    onChangeQtdPecas(Math.round(quantidadePecas.toFixed(2))+" uni");
    onChangeQtdArgamassa(quantidadeArgamassa+" Kg");
    onchangeTempoPed(tempoPedreiro);
    onChangeTempoAjud(tempoAjudante);
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Pisos
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/porcelanato.jpg')}
        />
        <Text>Porcelanato 150cmx150cm</Text>
        <Text style={{marginTop:15}}>Lado X Ambiente Metros:</Text>
        <TextInput
          style={{ width: 250, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
          numeric
          keyboardType={'numeric'}
          onChangeText={text => onChangeTextX(text)}
          value={valueX}
        />
        <Text style={{marginTop:15}}>Lado Y Ambiente Metros:</Text>
        <TextInput
          style={{ width: 250, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10 }}
          numeric
          keyboardType={'numeric'}
          onChangeText={text => onChangeTextY(text)}
          value={valueY}
        />

        <TouchableOpacity
          onPress={() =>  {
            calculaPisos();
          }}
          style={{ backgroundColor: '#0099ff', marginTop: 25, borderRadius: 20}}>
          <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center',  paddingTop: 15, paddingBottom: 15 }}>Calcular</Text>
        </TouchableOpacity>

        <Text style={{paddingTop:15, fontSize:20, textAlign:'center'}}>
          Insumos
        </Text>
        <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginTop:15, marginBottom:15, paddingBottom:10, paddingTop:10, paddingLeft:10, paddingRight:10 }}>
          <Text>Quantidade de Peças:</Text>
          <Text>{qtdPecas}</Text>
          <Text style={{paddingTop:10}}>Quantidade de Argamassa:</Text>
          <Text>{qtdArgamassa}</Text>
          <Text style={{paddingTop:10}}>Tempo Pedreiro:</Text>
          <Text>{tempoPed}</Text>
          <Text style={{paddingTop:10}}>Tempo Ajudante:</Text>
          <Text>{tempoAjud}</Text>
        </View>
        

        

      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  tinyLogo: {
    alignItems:'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
  },
});
