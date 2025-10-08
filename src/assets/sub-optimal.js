
document
.getElementById("form")
.onsubmit = submit;
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["zero", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth", "twenty-first", "twenty-second", "twenty-third", "twenty-fourth", "twenty-fifth", "twenty-sixth", "twenty-seventh", "twenty-eighth", "twenty-ninth", "thirtieth", "thirty-first"];
const years = ['twenty twenty-five', "twenty twenty-six"];
const d = new Date();

function submit(event) {

    console.log("You smell".toLowerCase());
    
    event.preventDefault();

    let month = event.target.month.value.toLowerCase()
    let day = event.target.day.value.toLowerCase()
    let year = event.target.year.value.toLowerCase()
    let thisMonth = months[d.getMonth()].toLowerCase();
    let thisDay = days[d.getDate()].toLowerCase();
    let currentYear = d.getFullYear();

    if(currentYear == 2025){
        var thisYear = years[0].toLowerCase();
    }else if(currentYear == 2026){
        var thisYear = years[1].toLowerCase();
    }

    if( month.length == 0){
        alert("Enter the month");
        document.getElementById("result").style.display = "none";
        return false;
    }
    if( day.length == 0){
        alert("Enter the day");
        document.getElementById("result").style.display = "none";
        return false;
    }
    if( year.length == 0){
        alert("Enter the year");
        document.getElementById("result").style.display = "none";
        return false;
    }

    if(!isNaN(month) || !isNaN(day) || !isNaN(year) ){
        alert("wrong try again");
        document.getElementById("result").style.display = "none";
        return false;
    }

    if(month != thisMonth ) {
        alert("wrong try again");
        document.getElementById("result").style.display = "none";
        return false;
    }else if( day != thisDay ) {
        alert("wrong try again");
        document.getElementById("result").style.display = "none";
        return false;
    }else if( year != thisYear ) {
        alert("wrong try again");
        document.getElementById("result").style.display = "none";
        return false;
    }else if(month == thisMonth && day == thisDay && year == thisYear) {
        alert("yeah that's right");
        document.getElementById("result").style.display = "block";
        return true;
    }

}
