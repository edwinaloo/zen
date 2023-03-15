function reverseString(str) {
    let splitString = str.split("");
        console.log(splitString)
    let reverseSplitString = splitString.reverse();
        console.log(reverseSplitString)
    let joinReverseSplitString = reverseSplitString.join("");
        console.log(joinReverseSplitString)

    return joinReverseSplitString;
}
    reverseString("Hello World");
