// import secod from '../second/second'
import main from '../main'
import '../main.scss'
import '../assets/scss/home.scss'
import api from '../util/apiUrl'
import TestData from '../util/test_data'

$(document).ready(function(){
  main.ajax(api.GETHOME_API).then(res=>{
    console.log(res,'ss')
  })
  
})