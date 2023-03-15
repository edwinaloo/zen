// boyraf code
// number 3
function maxNum(num1,num2){
    let result;
    return result = Math.max(num1,num2);
}
maxNum(78,69);
//number 9
function num9(name) {
    let len = name.length;
    for (let i = 0; i < len / 2; i++) {
        if (name[i] !== name[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
num9("dad")