import Vue from 'vue'
import axios from 'axios'
// import Qs from 'qs'

Vue.prototype.baseUrl = 'http://localhost:8080/'

const instance = axios.create({
  baseURL: Vue.prototype.baseUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

Vue.prototype.axios = instance
