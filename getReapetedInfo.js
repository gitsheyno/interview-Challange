
export function getReapetedNumber(number) {

    let result = null
    let str = ''
    let arr = [...number.toString()]
    result = Object.create({})

    for (let j = 0; j < arr.length; j++) {
        str = ''
        for (let i = 1; i <= parseInt(arr[j]); i++) {
            str += arr[j].toString()
        }
        if (result[arr[j].toString()]) {
            result[arr[j].toString()] += str
        }
        else {
            result[arr[j].toString()] = str
        }
    }

    return result
}

