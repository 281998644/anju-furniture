const throttle = function (fn, delay) {
    let flag = true
    return function () {
        if (flag) {
            setTimeout(() => {
                fn.call(this)
                flag = true
            }, delay);
        }
        flag = false
    }
}
export default throttle