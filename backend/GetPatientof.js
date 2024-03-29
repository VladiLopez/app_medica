import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Constants } from 'expo-constants';

const GetPatientof = async( cedula ) => {
  const Url = "http://192.168.3.181:5000";
  const register = `${Url}/drPatient?cedulaDoc=`+ cedula.cedula;
  try {
    const response = await fetch(register);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
    };


export default GetPatientof