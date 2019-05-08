export function getN() {
    var min=0; 
    var max=900000;
    return Math.floor(Math.random() * (+max - +min)) + +min;
}