
var plannerText = $(".planner-text");
var saveBtn = $(".saveBtn");
// var $plannerOutput = $(".planner-output");
var $currentDayElem = $("#currentDay");


var plans = [];
storage();
saveinput();
currentDayf();


function currentDayf () {
        var currentDay = moment();
        $currentDayElem.text(currentDay.format("MMMM Do, YYYY"));
};

function storage (){
    plans = JSON.parse(localStorage.getItem("plans"));
    if(plans == null){
        plans = [" ", " "," ", " ", " ", " ", " ", " "];
    }
};

function saveinput () {
    for (var i = 0; i < plans.length; i++){
        var position = $("#"+i)
        position.val(plans[i]);
    }
}


  saveBtn.click(function() {
      var value = ($(this).attr("value"));
      //variable input is pulling the value of "the thing you clicked on" below
      var input = $("#"+value)
      console.log(input);
      //plans is the array where we're hold the input
    plans[value] = input.val();
    localStorage.setItem("plans", JSON.stringify(plans));
  });