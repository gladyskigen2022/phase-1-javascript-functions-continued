// code your solution here
//function saturdayFun(roller_skate)
//{
   // return "This Saturday, I want to roller-skate!" 
//}
function saturdayFun(saturdayFunActivity = "roller-skate")
{
    return `This Saturday, I want to ${saturdayFunActivity}!`
}

function mondayWork(mondayActivity = "go to the office")
{
    return `This Monday, I will ${mondayActivity}.`}

    function wrapAdjective(visualFlair = "*"){
        return function(talent="special") {return `You are ${visualFlair}${talent}${visualFlair}!`}
    }