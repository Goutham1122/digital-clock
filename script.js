
function runclock()
{
var hour=document.getElementById('hours')
var min = document.getElementById('minutes')
var second = document.getElementById('seconds')
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()


  h = (h<10)? "0" + h :h
  m = (m<10)? "0" + m : m
  s = (s<10)? "0" + s :s
  hour.innerHTML =h;
  min.innerHTML = m;
  second.innerHTML = s;
}

var interval = setInterval(runclock ,1000);

