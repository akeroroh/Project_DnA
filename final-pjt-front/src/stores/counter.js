import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useCounterStore = defineStore('counter', () => {
  const articles = ref([])
  const API_URL = 'http://127.0.0.1:8000'
  const token = ref(null)
  const isLogin = computed(() => {
    if (token.value === null) {
      return false
    } else {
      return true
    }
  })
  const router = useRouter()

  const getArticles = function () {
    axios({
      method: 'get',
      url: `${API_URL}/api/v1/articles/`,
      headers: {
        Authorization: `Token ${token.value}`
      }
    })
      .then(response => {
        articles.value = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }

  const signUp = function (payload) {
    const { username, password1, password2 } = payload

    axios({
      method: 'post',
      url: `${API_URL}/accounts/signup/`,
      data: {
        username, password1, password2
      }
    })
     .then((response) => {
       console.log('회원가입 성공!')
       const password = password1
       logIn({ username, password })
     })
     .catch((error) => {
       console.log(error)
     })
  }

  const logIn = function (payload) {
    const { username, password } = payload
    axios({
      method: 'post',
      url: `${API_URL}/accounts/login/`,
      data: {
        username, password
      }
    })
      .then((response) => {
        console.log('login success!');
        token.value = response.data.key
        router.push({ name : 'main' })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const logOut = () => {
    axios({
      method: 'post',
      url: `${API_URL}/accounts/logout/`,
    })
    .then((response) => {
      console.log('logout success!');
      token.value = null
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const exchangeInfo = ref(null)
  const exchangeMoney = function() {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:8000/exchanges/'
    })
    .then((response) => {
      exchangeInfo.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return { articles, API_URL, getArticles, signUp, logIn, token, isLogin, logOut, exchangeMoney, exchangeInfo }
}, { persist: true })
