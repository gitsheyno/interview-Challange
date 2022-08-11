export function isBalance(str) {
    let res = null
    res = [...str]
    let controller = true
    res.forEach((element, index) => {
        if (element == '(' && controller == true) {
            let bool1 = findPranateses(res, index)
            if (bool1 == false) {
                controller = false
            }
        }
        if (element == '{' && controller == true) {
            let bool1 = findCuurlyBracket(res, index)
            if (bool1 == false) {
                controller = false
            }
        }
        if (element == '[' && controller == true) {
            let bool1 = findBracket(res, index)
            if (bool1 == false) {
                controller = false
            }
        }
    });

    if (controller == true) {
        return "yes"
    }
    return "no"
}

function findPranateses(str, index) {
    for (let i = index; i < str.length; i++) {
        if (str[i] == ')') {
            return true
        }
    }
    return false
}

function findCuurlyBracket(str, index) {
    for (let i = index; i < str.length; i++) {
        if (str[i] == '}') {
            return true
        }
    }
    return false
}

function findBracket(str, index) {
    for (let i = index; i < str.length; i++) {
        if (str[i] == ']') {
            return true
        }
    }

    return false
}


