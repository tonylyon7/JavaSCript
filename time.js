// var currentdate = new Date();
// var datetime = "Last Sync: " + currentdate.getDay() + "/" + currentdate.getMonth() 
// + "/" + currentdate.getFullYear() + " @ " 
// + currentdate.getHours() + ":" 
// + currentdate.getMinutes() + ":" + currentdate.getSeconds();


// Date.prototype.today = function () { 
//     return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
// }

// For the time now
// Date.prototype.timeNow = function () {
//      return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 
//      10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
// }


// var time = new Date().toLocaleDateString();
// console.log(time)

var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
console.log(datetime);

const time = document.querySelector(".time")
console.log(time.value)

time.addEventListener("blur", event => {
    const timevalue = time.value
    let a = timevalue.split(":")
    let seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60;
    console.log(seconds)
})

