    export function format(n) {
    n = formatNumber(n)
    return n.startsWith(",") ? n.substring(1, n.length) : n
}

function formatNumber(n) {
    if(Math.floor((n / 1000)) > 0) {
        let div = Math.floor(n / 1000)
        let mod = Math.floor(n % 1000)
        mod = mod === 0 ? '000' : mod

        return formatNumber(div) + ',' + getZeros('' + mod)
    }
    else {
        return n > 0 ? n : ''
    }
}

function getZeros(n) {
    let formattedN = n
    for(let i = 0 ; i < 3 - n.length; i++) {
        formattedN = '0' + formattedN
    }
    return formattedN
}