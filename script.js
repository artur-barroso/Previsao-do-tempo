const chave = "9669cedd6830bccad97db982cd0dea2c"

function colocardadosnatela(dados){
   document.querySelector(".cidade").innerHTML = 'Tempo em ' +dados.name
   document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
   document.querySelector(".txt").innerHTML = dados.weather[0].description
   document.querySelector(".umidade").innerHTML = 'Umidade: ' +dados.main.humidity+ '%'
   document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarcidade(cidade){
   const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric `).then(resposta => resposta.json())
   colocardadosnatela(dados)

}



function apertei(){
   const cidade = document.querySelector(".input-cidade").value

   buscarcidade(cidade)
}