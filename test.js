// const isVerified = "";
// // if(isVerified === true){
// //     console.log("user is verified")
// // }else{
// //     console.log('user is not verified')
// // }
// console.log(`${isVerified === false ? "user is verified": "user is NOT verified"}`)

function getTimeString(time){
    const hour = parseInt(time/3600);
    const remindtime = time % 3600;
    const minute = parseInt( remindtime /60);
    const second = time/60;
    return (`${hour} hour ${minute} minute ${second} second`)

}
console.log(getTimeString(7320))