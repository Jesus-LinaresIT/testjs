const axios = require('axios');

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // URL de ejemplo

const getData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('Datos recibidos:', response.data);
  } catch (error) {
    console.error('Error al realizar la consulta:', error);
  }
}

getData();

const postData = async () => {
   try {
     const response = await axios.post(API_URL, {
       title: 'foo',
       body: 'bar',
       userId: 1
     });
     console.log('Respuesta del POST:', response.data);
   } catch (error) {
     console.error('Error en el POST:', error);
   }
 }
 
 postData();