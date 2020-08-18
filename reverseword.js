function reverseWord(str) {
    var strLama = str;
    var strBaru = '';

    for (let i = str.length - 1; i >= 0; i--) {
        strBaru = strBaru + strLama[i];
    }

    return strBaru;
}