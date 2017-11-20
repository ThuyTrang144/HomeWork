var formatDate = function (date) {  //format date is Nov 14
    var splittedDate = date.toDateString().split(' ');  //split cat chuoi.
    return {
        date: splittedDate[1] + ' ' + splittedDate[2],
        value: date
    }
}

//Date.toDateString() tra ve 1 chuoi ngay con nguoi co the doc duoc
var getDatesBackToDate = function (date) {
    var arrDates = [],
        today = new Date().valueOf(),
        milliSecsDate = 1000*60*60*24, //so s trong 1ngay
        timeDiff = Math.abs(today - date.valueOf()),  
        numOfDatesBetween = Math.ceil(timeDiff / milliSecsDate),
        numOfDates = numOfDatesBetween > 7 ? 7 : numOfDatesBetween;
    for(var i = 0; i < numOfDates; i++) {
        arrDates.push(formatDate(new Date(today - milliSecsDate*i)).date)
    }
    return arrDates;
}

//kiem tra ngay hop le (check day is valid)
var isValidDate = function (date) {
    var datesOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        year = new Date(date).getFullYear(),
        month = new Date(date).getMonth(),
        date = new Date(date).getDate(),
        isLeapYear = false,
        isValid = false;
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        isLeapYear = true;
        if(date <= 29 && month === 2) {
            return true;
        }
    }
    if(date <= datesOfMonth[month])  return true;
    return false;
}
var dateInValid = "Nov 32 2017"
var dateValid = "Nov 20 2017"

console.log('list date', getDatesBackToDate(new Date("12/12/1990")));
   