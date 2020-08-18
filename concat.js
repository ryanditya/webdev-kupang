function concat() {
    var gabung = '';
    if (arguments.length < 2) {
        gabung = 'argumen yang dimasukkan minimal 2';
    } else if (arguments.length != 0 && arguments.length >= 2) {
        for (let i = 0; i < arguments.length; i++) {
            gabung += arguments[i] + ' ';
        }
    }
    return gabung;

}