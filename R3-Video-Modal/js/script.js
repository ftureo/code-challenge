function toggleClass() {
    var trailer = document.querySelector('.trailer')
    var video = document.querySelector('video')
    trailer.classList.toggle('active')
    video.pause()
    video.currentTime = 0

}

var colores = ['rojo', 'violeta', 'amarillo']
colores.pop()
console.log(colores)


const percentageOfNumber  = (x, multiplicator, percentage) => {
    const factor = percentage / 100
    const result = x * multiplicator * factor  
    return result
}

const average  = (x, y, z) => {
    const sum = x + y + z
    const result = sum / 3  
    return result
}
console.log("Funcion Flecha: " + average(1, 2, 3))

var actuallyDate = new Date()
var actuallyYear = actuallyDate.getFullYear()
console.log(actuallyYear)

const intPart  = (x, multiplicator) => {
    const result = Math.trunc((x * multiplicator))
    return result
}
console.log (intPart(2.6, 2))

// const redirect = () => {
//     window.location="https://www.google.com"
// }

// redirect()


var actuallyDate = new Date()
var actuallyYear = actuallyDate.getFullYear()

const verifyYear = (actuallyYear) => {
    (actuallyYear % 2 === 0) ? actuallyYear : undefined
}

verifyYear(actuallyYear)

const createArr = () => {
    emptyArr = []
    return(emptyArr[0])
}

createArr()

const factorial = (x) =>  {
    if ( x === 1) {
        return 1
    }

    var defaultValue = 1 
        for ( i = defaultValue; i <= x; i++ ){
            defaultValue = defaultValue * i
        }
    return defaultValue
}

factorial(4)


const promises = [
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK')
        }, 5000)
    }), 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('FAIL')
        }, 5000)
    })
]
console.log(promises)
Promise.all(promises).then((result) => {
    console.log(result)
}).catch (e => console.log(e))

async function f() {
    const promise = Promise.resolve(1), 
    result = await promise
}
f()


// var numero = prompt('Ingrese un número')
//     if(numero > 1000){
//         alert('Numero mayor o igual a 1000')
//     }
    
// var saludo = prompt('Ingrese Hola')
//     if(saludo == 'Hola') {
//         alert(saludo)
//     } else {
//         alert('algo falló')
//     }

