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
//排除
const exclude = function exclude(arr) {
    let newobj = {};
    return arr.reduce((preVal, curVal) => {
        newobj[curVal.id] ? '' : newobj[curVal.id] = preVal.push(curVal);
        return preVal
    }, [])
}

//筛选有长度的list
const allSongsList = function allSongsList(obj) {
    let all = []
    for (const key in obj) {
        if (obj[key] instanceof Array) {
            const element = obj[key];
            const objList = { name: key }
            objList[key] = obj[key]
            if (element.length) {
                // 加载页面需求的歌单
                all.push(objList)
            }
        }
    }

    return all
}
export default {
    RandomNum,
    withoutRepetition,
    exclude,
    allSongsList
}


