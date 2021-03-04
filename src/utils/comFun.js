export function randomColor() {
    let colorList = ['rgba(4, 108, 0, .8)', 'rgba(0, 105, 157, .8)', 'rgba(171, 154, 0, .8)', 'rgba(214, 93, 0, .8)', 'rgba(157, 0, 0, .8)']
    return colorList[Math.floor((Math.random()*colorList.length))]
}