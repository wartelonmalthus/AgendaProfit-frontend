import axios from 'axios'

const http = axios.create({
  baseURL: 'https://localhost:7253/',
  //baseURL:'https://agendaprofit-backend.onrender.com/', 
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http