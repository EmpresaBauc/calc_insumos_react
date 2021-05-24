import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {TextInput, StyleSheet, Button, Text, Image, Alert, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

export default function Pintura() {
  const [valueX, onChangeTextX] = React.useState('1.5');
  const [valueY, onChangeTextY] = React.useState('1.5');
  const [qtdTinta, onChangeQtdTinta] = React.useState('0');
  const [tempoPint, onchangeTempoPint] = React.useState('0');
  const [tempoAjudPint, onChangeTempoAjudPint] = React.useState('0');
  

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

  function calculaPintura(){
    var valorX = 0;
    var valorY = 0;
    var area = 0;
    var quantidadeTinta = 0;
    var tempoPintorDec = 0;
    var tempoPintor = 0;
    var tempoAjudantePintorDec = 0;
    var tempoAjudantePintor = 0;

    valorX = parseFloat(valueX);
    valorY = parseFloat(valueY);
    area = valorX*valorY;
    quantidadeTinta = area*0.30;


    

    //calculando quantidade de tempos
    tempoPintorDec = area*1.20;
    tempoPintor = conversaoTempo(tempoPintorDec);
    tempoAjudantePintorDec = area*0.30;
    tempoAjudantePintor = conversaoTempo(tempoAjudantePintorDec);
    
    onChangeQtdTinta(quantidadeTinta.toFixed(2).toString().replace(".",",")+" litros");
    onchangeTempoPint(tempoPintor);
    onChangeTempoAjudPint(tempoAjudantePintor);
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>
          Pintura
        </Text>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/tinta.jpg')}
        />
        <Text>Tinta Acrílica Coralar</Text>
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
            calculaPintura();
          }}
          style={{ backgroundColor: '#0099ff', marginTop: 25, borderRadius: 20}}>
          <Text style={{ fontSize: 15, color: '#fff', textAlign: 'center',  paddingTop: 15, paddingBottom: 15 }}>Calcular</Text>
        </TouchableOpacity>

        
        <Text style={{paddingTop:15, fontSize:20, textAlign:'center'}}>
          Insumos
        </Text>
        <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginTop:15, marginBottom:15, paddingBottom:10, paddingTop:10, paddingLeft:10, paddingRight:10 }}>
          <Text>Quantidade de Tinta:</Text>
          <Text>{qtdTinta}</Text>
          <Text style={{paddingTop:10}}>Tempo Pintor:</Text>
          <Text>{tempoPint}</Text>
          <Text style={{paddingTop:10}}>Tempo Ajudante:</Text>
          <Text>{tempoAjudPint}</Text>
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
