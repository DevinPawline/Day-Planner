$(init);

function init() {
  // Display current day on top of page
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Color Time blocks, and set interval 
  colorTimeBlocks();
  setInterval(colorTimeBlocks, 60000);

  // Update timeblocks with data in local storage
  $(".time-block").each(function() {
    var blockId = $(this).attr("id");
    // Load data from local storage
    $("#" + blockId + " textarea").text(localStorage.getItem(moment().format("DDDYYYY") + blockId));
  });

  // Attach handler for save buttons 
  $(".saveBtn").on("click", handleSave);
}

function colorTimeBlocks() {
    // For each time block
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
      var currentHour = parseInt(moment().format("H"));
      // remove any class we may have added before
      $(this).removeClass("past present future");
      // color block based on past, present, future class
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  }
  