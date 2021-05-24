import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Pisos from './Pisos';
import Pintura from './Pintura';
import { SafeAreaView, ScrollView, Alert, Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native';

export default function App() {
  const [modalVisiblePisos, setModalVisiblePisos] = useState(false);
  const [modalVisiblePintura, setModalVisiblePintura] = useState(false);

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePisos}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pisos></Pisos>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisiblePisos(!modalVisiblePisos);
              }}>
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisiblePintura}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pintura></Pintura>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => {
                setModalVisiblePintura(!modalVisiblePintura);
              }}>
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>


     

      <ScrollView style={styles.scrollView}>
        <Image
          style={styles.tinyLogo}
          source={require('./assets/logo.jpg')}
        />
        <Text style={styles.title}>
          Calculadora de Insumos
        </Text>
    
        <TouchableOpacity
          onPress={() =>  {
            setModalVisiblePisos(true);
          }}
          style={{ backgroundColor: '#0099ff', marginTop: 50, borderRadius: 20}}>
          <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center',  paddingTop: 15, paddingBottom: 15 }}>Pisos</Text>
        </TouchableOpacity>

      
        <TouchableOpacity
          onPress={() =>  {
            setModalVisiblePintura(true);
          }}
          style={{ backgroundColor: '#1bb52a', marginTop:50, paddingTop: 15, paddingBottom: 15 , borderRadius: 20}}>
          <Text style={{ fontSize: 30, color: '#fff', textAlign: 'center' }}>Pintura</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
  },
  tinyLogo: {
    alignItems:'center',
    justifyContent: 'center',
    width: 250,
    height: 250,
  },
});