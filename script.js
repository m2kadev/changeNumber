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

console.log(changeMmToEngNum('၄၄၃၃၂'))
console.log(changeEngToMmNum(33333))


