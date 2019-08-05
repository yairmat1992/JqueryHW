$(document).ready(function () {
    const buttons = $("button")
    buttons.click((event) => {
        const father = $(event.target).parent("td").parent("tr")
        const input = father.find("input")
        input.hide()
        const span = father.find("span")
        span.html(input.val())
    });
})
