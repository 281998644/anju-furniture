const debounce = function (fn, delay) {
    let flag = null;
    return function () {
        if (flag != null) {
            clearTimeout(flag)
        }
        flag = setTimeout(() => {
            fn.call(this)
        }, delay);
    }
}
export default debounce 