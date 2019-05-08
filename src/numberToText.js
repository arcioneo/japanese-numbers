import { units } from './numbers'

export function getNumberAsText(n) {
    let value;
    if (n <= 10) {
        return units[n]
    } else if (isDivisibleBy(n, 10000)) {
        if (getDivision(n, 10000) >= 10) {
            return getNumberAsText(getDivision(n, 10000)) + '-man' + getText(n, 10000)
        } else {
            return units[getDivision(n, 10000)] + '-man' + getText(n, 10000)
        }
    } else if (isDivisibleBy(n, 1000)) {
        value = getDivision(n, 1000)
        if (value == 1) {
            return 'sen' + getText(n, 1000)
        } else if (value == 3) {
            return units[value] + '-zen' + getText(n, 1000)
        } else if (value == 8) {
            return 'has-sen' + getText(n, 1000)
        } else {
            return units[value] + '-sen' + getText(n, 1000)
        }
    } else if (isDivisibleBy(n, 100)) {
        value = getDivision(n, 100)
        if (value == 1) {
            return 'hyaku' + getText(n, 100)
        } else if (value == 3) {
            return units[value] + 'byaku' + getText(n, 100)
        } else if (value == 6) {
            return 'rop-pyaku' + getText(n, 100)
        } else if (value == 8) {
            return 'hap-pyaku' + getText(n, 100)
        } else {
            return units[value] + '-hyaku' + getText(n, 100)
        }
    } else if (isDivisibleBy(n, 10)) {
        value = getDivision(n, 10)
        if (value == 1) {
            return 'jū' + getText(n, 10)
        } else {
            return units[value] + '-jū' + getText(n, 10)
        }
    }
}


function getText(n, divisor) {
    return n % divisor > 0 ? ' ' + getNumberAsText(n % divisor) : ''
}

function isDivisibleBy(n, divisor) {
    return Math.floor(n / divisor) > 0
}

function getDivision(n, divisor) {
    return Math.floor(n / divisor)
}