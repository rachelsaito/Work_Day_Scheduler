$("#currentDay").text(moment().format('dddd') + ", " + moment().format("MMM Do YY"))
var H = moment().format("H")
var Timeblocks = document.querySelectorAll(".time-block")

for (let i = 0; i < Timeblocks.length; i++) {
    if (H > i + 9) {
        Timeblocks[i].classList.add("past")
    } if (H < i + 9) {
        Timeblocks[i].classList.add("future")
    } if (H == i + 9) {
        Timeblocks[i].classList.add("present")
    }
    Timeblocks[i].value=localStorage.getItem(i+9)
}

$(".saveBtn").on("click", function(e){
    e.preventDefault()
   localStorage.setItem($(this).siblings("p").attr("id"), $(this).siblings("input").val())
})

