export function encoder({ inputString, repeatCount }) {
    let resault = null
    resault = [...inputString]
    let finalEncodeString = ''

    for (let counter = 0; counter < repeatCount; counter++) {

        let temp = resault[resault.length - 1]
        let x = resault.length

        for (let i = 0; i < resault.length; i++) {
            resault[x - 1] = resault[x - 2]
            x--
        }
        resault[0] = temp

        let asqCode = encodePartOne(resault)
        let finalEncodeArray = encodePartTwo(asqCode)

        resault = [...finalEncodeArray]

        finalEncodeString = finalEncodeArray.join('')
    }

    return finalEncodeString

}

function encodePartOne(arr) {
    let newArr = arr.map((el) => {
        let asq = null
        return (
            asq = el.charCodeAt(0) + 1,
            asq < 123 ? asq : 97
        )
    })

    return newArr
}

function encodePartTwo(arr) {
    let newArr = arr.map((el) => {
        return (
            String.fromCharCode(el)
        )
    })
    return newArr
}




