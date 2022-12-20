var container = document.getElementById('container');
var text = document.querySelector('.textId');
var currentDayHeader = moment('11.12.2022', 'DD.MM.YYYY').format('MMM Do YYYY');
$('#currentDay').text(currentDayHeader);



function displayPlan (){
    $('.textId').each(function () {
        var time = $(this).parent().parent().children('.time-block').attr('id');
        var plan = localStorage.getItem(time);

        if(plan){
            $(this).val(plan); 
        } 
        
    })
   
}
displayPlan();
// var time = $(this).parent().parent().children('.time-block').attr('id');
//         var plan = localStorage.getItem(time);
//         $(this).val(plan);

// function to colour code plans accordingly
$('.description').each(function () {
    var currentTime = this.previousElementSibling.id
    if (currentTime < moment().hour()) {
        $(this).attr({
            class: 'past'
        })
    } else if (currentTime > moment().hour()) {
        $(this).attr({
            class: 'future'
        })
    } else if (currentTime === moment().hour()) {
        $(this).attr({
            class: 'present'
        })
    }

})

//function to save plan to local storage
$('.saveBtn').on('click', function (event) {
    var textValue = $(event.currentTarget).parent().children('.past').children('.textId').val();
    var time = $(event.currentTarget).parent().children('.time-block').attr('id');
    
    localStorage.setItem(time, textValue);
    //getPlan();
    console.log(textValue);
    console.log(time);
})







//To create structure of Planner

// var time = moment(09, 'HH');
// var eachRow = $('<section>').attr({
//     class: 'row'
// });
// $('.container').append(eachRow);

// var time = moment(09, 'HH');

// while (time.hour() < 18) {
    
//     var eachRow = $('<section>').attr({
//         class: 'row'
//     });
//     $('.container').append(eachRow);
  
    
//     //for time
//     var eachHour = $('<div>').text(time.format('hh:mm a')).attr({
//         class: 'col-md-2 hour time-block'

//     });
//     eachHour.attr('id', time.format('H'));
   

//     //for textarea
//     var eachPlan = $('<div>').attr({
//         class: 'col-md-9 description'
//     })

//     var hourText = $('<textarea>').attr({
//         class: 'textId'

//     });
//     eachPlan.append(hourText);
    

//     //for button
//     var eachBtn = $('<button>').attr({
//         class: 'col-md-1 saveBtn',

//     });
//     var btnIcon = $("<i class='far fa-save fa-lg'></i>");
//     eachBtn.append(btnIcon);
    
   
//     time.add(1, 'hour');
   
    
    
    
// }
// $('.row').append(eachHour, eachPlan, eachBtn);

