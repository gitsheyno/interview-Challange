const poems = [
    'به لاله نرگس مخمور گفت وقت سحر - که هر که در صف باغ است صاحب هنریست',
    'کبوتر بچه‌ای با شوق پرواز - بجرئت کرد روزی بال و پر باز',
    'جهاندیده کشاورزی بدشتی - بعمری داشتی زرعی و کشتی',
    'وقت سحر، به آینه‌ای گفت شانه‌ای - کاوخ! فلک چه کجرو و گیتی چه تند خوست',
    'روزی گذشت پادشهی از گذرگهی - فریاد شوق بر سر هر کوی و بام خاست',
    'مرغی نهاد روی بباغی ز خرمنی - ناگاه دید دانهٔ لعلی به روزنی',
    'شنیده‌اید که آسایش بزرگان چیست - برای خاطر بیچارگان نیاسودن',
    'دید موری در رهی پیلی سترگ - گفت باید بود چون پیلان بزرگ',
    'نهال تازه رسی گفت با درختی خشک - که از چه روی، ترا هیچ برگ و باری نیست',
    'سحرگه، غنچه‌ای در طرف گلزار - ز نخوت، بر گلی خندید بسیار'
]

export function poetry(str) {
    let words = str.split(' ')
    let lastWord = words[words.length - 1]
    let lastChar = lastWord[lastWord.length - 1].trim()

    return findPoem(lastChar)
}

function findPoem(char) {
    let ans = null
    poems.forEach(el => {
        let lastCharPartOne = findFirstChoice(el)

        let lastCharPartTwo = findSecondChoice(el)

        if (lastCharPartOne == char) {

            ans = el
            return ans
        }
        else if (lastCharPartTwo == char) {

            ans = el
            return ans
        }


    })

    return ans
}

function findFirstChoice(el) {
    let words = el.split(' ')

    let lastWord = words[0]

    let lastChar = lastWord[0].trim()


    return lastChar
}

function findSecondChoice(el) {
    let halfs = el.split('-')
    let firstHalf = halfs[0].trim()

    let words = firstHalf.split(' ')

    let lastWord = words[words.length - 1]

    let lastChar = lastWord[lastWord.length - 1].trim()


    return lastChar
}
