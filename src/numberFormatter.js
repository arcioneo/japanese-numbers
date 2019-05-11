

export function format(n) {
    n = formatNumber(n)
    return n.startsWith(",") ? n.substring(1, n.length) : n
}

function formatNumber(n) {
    if(n / 1000 > 0) {
        let div = Math.floor(n / 1000)
        let mod = Math.floor(n % 1000)
        mod = mod === 0 ? '000' : mod

        return formatNumber(div) + ',' + mod
    }
    else {
        return n > 0 ? n : ''
    }
}