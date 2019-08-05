$(document).ready(function () {
    const blues = $(".blue")
    const reds = $(".red")
    const btn = $("#button")
    reds.html("red"); reds.css("background-color", "red")
    blues.html("blue"); blues.css("background-color", "blue")
//lkjlkjlkkjkjh
    btn.click(() => {
        blues.fadeToggle(2000)
    })
})


