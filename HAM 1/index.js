// function processConfirm(answer) {
//     let result = "";
//     if (answer) {
//         result = "Excellent. We'll play a nice game of chess";
//     } else {
//         result = "Maybe later then";
//     }
//     return result;
// }
// let confirmAnswer = confirm("Shall we play a game?");
// let theAnswer = processConfirm(confirmAnswer);
// alert(theAnswer);


// function convert(num){
//     num = parseFloat(num);
//     document.getElementById("cel").innerHTML = (num-32)/1.8;
// }

function getMin(array) {
    if(array.length ==0)
        alert("mảng rỗng");
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
let arr1 =[];
let min = getMin(arr1);
alert(min);