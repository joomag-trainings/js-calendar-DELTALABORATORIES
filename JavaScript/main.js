/**
 * Created by death on 7/7/2017.
 */

var monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var inputYear = document.getElementById('inputYear');
var inputMonth = document.getElementById('inputMonth');
var monthNumber;
var year;

inputMonth.addEventListener('change', function() {
    document.getElementById('calendarMain').innerHTML = ' ';
    var month = inputMonth.value;
    monthNumber = monthName.indexOf(month);
    console.log(monthNumber);
    createCalendar();
});
inputYear.addEventListener('change', function() {
    if(inputYear.value>2100 || inputYear.value<1900){
        console.log('wrong')
    }
    else{
        document.getElementById('calendarMain').innerHTML = ' ';
        year = inputYear.value;
        console.log(year);
        createCalendar();
    }
});

function createCalendar() {
    var firstDate = monthName[monthNumber]+' '+1+' '+year;
    var tmp = new Date(firstDate).toDateString();
    var firstDay = tmp.substring(0, 3);
    var dayNumber = dayName.indexOf(firstDay);
    console.log(dayNumber);
    var days = new Date(year, monthNumber+1, 0).getDate();
    console.log(days);
    document.getElementById("date").innerHTML = monthName[monthNumber]+" "+year;
    var calendar = get_calendar(dayNumber, days);
    document.getElementById("calendarMain").appendChild(calendar);
    function get_calendar(day_no, days){
        var table = document.createElement('table');
        var tr = document.createElement('tr');

        for(var c=0; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = "SMTWTFS"[c];
            tr.appendChild(td);
        }
        table.appendChild(tr);

        tr = document.createElement('tr');
        var c;
        for(c=0; c<=6; c++){
            if(c == day_no){
                break;
            }
            var td = document.createElement('td');
            td.innerHTML = "";
            tr.appendChild(td);
        }

        var count = 1;
        for(; c<=6; c++){
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);

        for(var r=3; r<=7; r++){
            tr = document.createElement('tr');
            for(var c=0; c<=6; c++){
                if(count > days){
                    table.appendChild(tr);
                    return table;
                }
                var td = document.createElement('td');
                td.innerHTML = count;
                count++;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }

}
