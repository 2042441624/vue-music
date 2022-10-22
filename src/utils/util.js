export function toHttps(url) {
    if (!url) {
        return url
    }
    return url.replace('http://', 'https://')
}



const withoutRepetition = function withoutRepetition(Min, List) {
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
//单个随机数
const RandomNum = function RandomNum(Min, Max = 0) {

    var num = Min + Math.round(Math.random() * (Max - Min));
    return num;
}
const exclude = function exclude(arr) {
    console.log('工具类>排除' + arr);
    let newobj = {};
    return arr.reduce((preVal, curVal) => {
        newobj[curVal.id] ? '' : newobj[curVal.id] = preVal.push(curVal);
        return preVal
    }, [])
}


export default {
    RandomNum,
    withoutRepetition,
    exclude
}