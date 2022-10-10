console.log(['1', '2', '3'].map(parseInt));//[ 1, NaN, NaN ]
console.log([typeof null, null instanceof Object]);//object false
console.log([[3, 2, 1, 2].reduce(Math.pow)]);//81
// console.log([].reduce(Math.pow));//TypeErr
var val = 'smg'
//运算符优先级
console.log('Value is ' + val === 'smg' ? 'Something' : 'Nothing');
console.log('Value is ' + (val === 'smg' ? 'Something' : 'Nothing'));


var name = 'World!';
(function () {
    if (typeof name === 'undefined') {
        var name = 'jack'
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello' + name);
    }
})()

var ENDMaxINT = Math.pow(2, 53)
var START = ENDMaxINT - 100
var count = 0;
var now = 0
for (let index = START; index < ENDMaxINT; index++) {
    now = index
    count++

}
console.log(count, now, Math.pow(2, 53));

//不重复随机数
function withoutRepetition(Min, List) {
    let arr = []
    let newarr = []
    for (let i = 0; arr.length !== List.length; i++) {
        let nowNum = RandomNum(Min, List.length - 1)
        if (!arr.includes(nowNum)) {
            arr.push(nowNum)
            newarr.push(List[nowNum])
        }
    }
    return newarr.length ? newarr : [];
}
let songList = ['a', 'b', 'c', 'd']
let ranArr = withoutRepetition(0, songList)
//index.lock
console.log(ranArr);