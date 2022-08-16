// change myanmar number to english number
let changeMmToEngNum = (num) => {
    const mmNum = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉']
    let x = ''
    let strTestNum = num.split('')
    
    for (let i = 0; i < mmNum.length; i++) {
        for (let ii = 0; ii < mmNum.length; ii++) {
            if (strTestNum[i] === mmNum[ii]) {
                x += ii
            }
        }
    }
    if ( x === '')  return x

    return parseFloat(x)
}

//change english number to myanmar number
let changeEngToMmNum = (num) => {
    const mmNum = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉']
    let x = ''

    if(typeof(num) === NaN) {
        return
    } else {
        num = String(num)
    }

    let strTestNum = num.split('')

    for (let i = 0; i < mmNum.length; i++) {
        for (let ii = 0; ii < mmNum.length; ii++) {
            if (strTestNum[i] == ii) {
                x += mmNum[ii]
            }
        }
    }
    return x
}

let audio1 = new Audio('https://www.asiapearltravels.com/language/audio-3/tit.mp3')
let audio2 = new Audio('https://www.asiapearltravels.com/language/audio-3/hnit.mp3')
let audio3 = new Audio('https://www.asiapearltravels.com/language/audio-3/thone3.mp3')
let audio4 = new Audio('https://www.asiapearltravels.com/language/audio-3/lay3.mp3')
let audio5 = new Audio('https://www.asiapearltravels.com/language/audio-3/nga3.mp3')
let audio6 = new Audio('https://www.asiapearltravels.com/language/audio-3/chout.mp3')
let audio7 = new Audio('https://www.asiapearltravels.com/language/audio-3/khoon2-nit.mp3')
let audio8 = new Audio('https://www.asiapearltravels.com/language/audio-3/shit.mp3')
let audio9 = new Audio('https://www.asiapearltravels.com/language/audio-3/ko3.mp3')

const number = document.getElementById('number')
const copyBtn = document.getElementById('copyBtn')
const engNumber = document.getElementById('engNumber')
const engCopyBtn = document.getElementById('engCopyBtn')

window.addEventListener('load', () => {
    number.focus()
})

number.addEventListener('keyup', (e) => {
    if (e.key === '1') audio1.play()
    if (e.key === '2') audio2.play()
    if (e.key === '3') audio3.play()
    if (e.key === '4') audio4.play()
    if (e.key === '5') audio5.play()
    if (e.key === '6') audio6.play()
    if (e.key === '7') audio7.play()
    if (e.key === '8') audio8.play()
    if (e.key === '9') audio9.play()
    const mmNum = document.getElementById('mmNum')
    let numValue = number.value

    let mmValue = changeEngToMmNum(numValue)
    mmNum.innerText = mmValue

    copyBtn.innerText = 'Copy'
    copyBtn.style.color = 'white'

})

engNumber.addEventListener('keyup', e => {
    if (e.key === '1') audio1.play()
    if (e.key === '2') audio2.play()
    if (e.key === '3') audio3.play()
    if (e.key === '4') audio4.play()
    if (e.key === '5') audio5.play()
    if (e.key === '6') audio6.play()
    if (e.key === '7') audio7.play()
    if (e.key === '8') audio8.play()
    if (e.key === '9') audio9.play()
    const engNum = document.getElementById('engNum')
    let numValue = engNumber.value

    let engValue = changeMmToEngNum(numValue)
    engNum.innerHTML = engValue

    engCopyBtn.innerText = 'Copy'
    engCopyBtn.style.color = 'white'
})

copyBtn.addEventListener('click', e => {
    const mmNum = document.getElementById('mmNum').innerText
    navigator.clipboard.writeText(mmNum)

    e.target.innerText = 'Copied'
    e.target.style.color = 'red'
    
})

engCopyBtn.addEventListener('click', e => {

    const engNum = document.getElementById('engNum').innerText
    navigator.clipboard.writeText(engNum)

    e.target.innerText = 'Copied'
    e.target.style.color = 'red'

})

//console.log(changeMmToEngNum('၄၄၃၃၂'))
//console.log(changeEngToMmNum('33333'))


