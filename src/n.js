export function getN() {
    const min=0
    const max=1000000
    const mid = Math.floor((max - min) / 2)

    //let n = getRandomNumber(min, max)
    //n = n >= mid ? getRandomNumber(min, max) : mid

    return getRandomNumber(min, max)
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min
}