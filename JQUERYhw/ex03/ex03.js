$(document).ready(function () {
    const first = $("#first");
    const second = $("#second");
    $("button").click((event) => {
        event.preventDefault()
        for (let i = (first.val()); i <= (second.val()); i++) {
            $("select").append(`<option> ${i} <option>`)
        }
    })

})