var todayDate = dayjs().format('dddd, MMM D YYYY, h:mm:ss a');
$("#currentDay").html(todayDate);


$(".saveBtn").on("click", function () {
  // description in JQuery
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
  console.log(time)
})

function timeTracker() {
  //hours.
  var CurrentTime = dayjs().hour();


  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);

    // background color codes

    if (blockTime < CurrentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (blockTime === CurrentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");

    }
  })
}

// Get item from local storage if any
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

timeTracker();



