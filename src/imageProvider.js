export function getImgName() {
    const min=1
    const max=11
    return './img/qm' + (Math.floor(Math.random() * (+max - +min)) + +min) + '.png'
}