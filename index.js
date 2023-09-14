// code your solution here
function superbowlWin(arr){
    let obj = arr.find(element => element.result === 'W')
    return obj ? obj.year : undefined
}