// save reference to important DOM elements
var taskContainer = $('.container');
var currentDay = $('#currentDay');

var workingHours = ["9:00", "10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00"]

// handle displaying the time
function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
  currentDay.text(rightNow);
}

// handle printing project data to the page
function printTaskData() {
  var rightNow = moment().format('H');
  for (let index = 0; index < workingHours.length; index++) {
    var hourEl = workingHours[index];
    var taskEl = $('<tr>').addClass('row');
 

  var timeEl = $('<td>').addClass('col-2 hour').text(hourEl);
  
  var textArea = $('<textarea style="padding-left:20px" />')
  textArea.text('');

  var nowHour = Number(rightNow.split(":")[0]);
  var hourElHour = Number(hourEl.split(":")[0]);

   
  if(nowHour > hourElHour) {
    textArea.addClass('past')
  } 
  if (nowHour < hourElHour) {
    textArea.addClass('future')
  }
  if (nowHour === hourElHour) {
    textArea.addClass('present')
  }

  var noteEl = $('<td>').addClass('col-8 description ');
  noteEl.append(textArea);
  
  var saveTaskBtn = $('<td>')
    .addClass('col-2 saveBtn text-center')
    .text('Save');

  // By listing each `<td>` variable as an argument, each one will be appended in that order
  taskEl.append(
    timeEl,
    noteEl,
    saveTaskBtn
  );

  taskContainer.append(taskEl);
  }


  
}

setInterval(displayTime, 1000);


printTaskData();
