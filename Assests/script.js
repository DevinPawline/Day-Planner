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