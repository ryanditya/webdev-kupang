function getValue(arr, find) {
    var hasil;
    if (arr.length != 0 && arr.length > find) {
        hasil = arr[find];
    } else if (arr.length == 0) {
        hasil = 'panjang array minimal 1';
    } else if (arr.length != 0 && arr.length <= find) {
        hasil = 'array tidak memiliki index ke-' + find;
    }
    return hasil;
}