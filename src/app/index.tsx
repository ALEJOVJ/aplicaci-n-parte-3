import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function app(){
  return(
    <view style={styles.container}>
    <text style={styles.titulo}> 
      pedidos sena
    </text>
    

    <view style={styles.tarjeta}>
    <text style={styles.producto}> 
      hamburgesa
    </text>

    <text style={styles.precio}> 
      $15000
    </text>

    </view>
    </view>
    
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60,
    textAlign:'center'
  
  },
  titulo:{
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222222'

  },

  tarjeta :{
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 15,

  },
  producto: {
    fontSize: 20,
    fontWeight:'bold'
  },

  precio: {
    fontSize:20,
    color:'#222222',
    marginTop:5,

  }
});