var listul

listul = document.querySelector('.list-group')
listli = document.querySelectorAll('.list-group-item')

listul.addEventListener('click',function(event)
{
    //alert(event.target);
    event.target.parentElement.remove();
});

function addItem()
{
  var ul= document.querySelector("ul");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.className="list-group-item";
  span.innerHTML = document.getElementById("addstudent").value;
  var btn = document.createElement("button");
  btn.innerHTML = "Remove"; 

   li.appendChild(span);
   li.appendChild(btn);

   ul.appendChild(li);

   document.getElementById("addstudent").value = ""
}

var search = document.querySelector(".container-search");
search.addEventListener("keyup",function(event){
var searchValue = (event.target.value).toLowerCase();
    //console.log(searchValue);
    listli.forEach(function(data,index,array) {
    var studentValue = (data.querySelector(".student").innerText).toLowerCase();
    //console.log(studentValue);
  
if (studentValue.indexOf(searchValue) !== -1){
            data.style.display = "block";
        }else
        {
            data.style.display = "none";           
        }
        
});

});