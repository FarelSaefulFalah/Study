document.title = 'Js Jagung Susu'
console.log(document.title)

const body = document.body
body.append('HELLO AGAIN')

const kocak = document.createElement('h1')
kocak.textContent = 'PKE JS BIAR GANTENG URATNYA'

const nama = document.createElement('p')
nama.innerHTML = '<marquee>WOOOOOOOOO</marquee>'

const resing = document.createElement('b')
resing.innerText = 'Pindah Python aja bwang'

body.append(nama)
body.append(kocak)
body.append(resing)

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.style.border = 'none'
btn1.style.background = 'red'
btn1.style.color = 'white'
btn1.style.padding = '10px'

btn2.style.border = 'none'
btn2.style.background = 'blue'
btn2.style.color = 'white'
btn2.style.padding = '10px'