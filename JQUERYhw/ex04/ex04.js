$(document).ready(function () {
    const numbers = $(".numdiv")
    $("button").click(() => {
        $.each(numbers, (i) => {
            const val = i + 1
            numbers.slice(i).html(val)
        })
    })
})