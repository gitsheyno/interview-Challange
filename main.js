import { encoder } from './encoder.js'
import { getReapetedNumber } from './getReapetedInfo.js'
import { poetry } from './poetry.js'
import { isBalance } from './isBalance.js'
import { removeRepetetive } from './removeRepetetive.js'

console.log(encoder({ inputString: 'abz', repeatCount: 2 }))
console.log(getReapetedNumber(534432577))
console.log(poetry('نهان شد از گل زردی گلی سپید که ما - سپید جامه و از هر گنه مبرائیم'))
console.log(isBalance('[()]()[()()()]{}'))
console.log(removeRepetetive(['A', 'A', 'B', 'B', 'B', 'b', 'A', 'C', 'B']))