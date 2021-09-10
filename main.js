
// let button=document.getElementById('onoff');
// console.log(button);
//this returns null,figure out why
// add a method to add eventlistener 
function onoff()       //This helps us switch from directed to undirected
{
  var button=document.getElementById('onoff');
  currentvalue = button.value;
  if(currentvalue == "Directed")
  {
   button.value="Un-Directed";
   button.style.color="green";
  }
  else
  {
    button.value="Directed";
    button.style.color="red";
  }
}

function switch_theme()
{
  var cnt=document.body;
  cnt.classList.toggle("dark-mode");
  var button=document.getElementById('theme_changer');
  currentvalue = button.value;
  if(currentvalue == "Dark Theme")
  {
   button.value="Light Theme";
  }
  else
  {
    button.value="Dark Theme";
  }
}