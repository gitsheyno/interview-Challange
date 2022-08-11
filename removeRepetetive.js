

export function removeRepetetive(chars) {
    let uniqueChars = [];
    chars.forEach((c) => {
        if (!uniqueChars.includes(c)) {
            uniqueChars.push(c);
        }
    });

    return uniqueChars
}


