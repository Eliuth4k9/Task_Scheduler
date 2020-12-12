
var now = moment();

var current = now.format("MM DD YYYY");

$("currentDay").text("Today's Date: " + current);
$(document).ready(function() {

    hourArr = $('.hour').toArray();
    for (i = 0; i < hourArr.length; i++) {
        $(hourArr[i]).siblings('textarea').text(localStorage.getItem($(hourArr[i]).attr('data-time')));
    }
});

for (i = 0; i < 12; i++) {
  
    var row = $('<div>').addClass('row');
 
    var time = $('<div>').addClass('hour col-md-2').text(moment('5:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    time.attr('data-time', moment('7:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
   
    var task = $('<textarea>').addClass('col-md-9');
   
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    $('.container').append(row);
    
    $(row).append(time);
    
    $(time).after(task);

    $(task).after(saveButton);
        

    
    if (now.isSame(moment('5:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('present');
       
    } else if (now.isBefore(moment('5:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('future');
       
    } else if (now.isAfter(moment('5:00 AM', 'hh:mm A').add(i, 'hours'), 'hour')) {
        $(task).addClass('past');
    }
}
$('.saveBtn').on('click', function() {
    localStorage.setItem($(this).siblings('div.hour').attr('data-time'), $(this).siblings('textarea').val())
});