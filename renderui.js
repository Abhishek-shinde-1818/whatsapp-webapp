let arr=[]

function renderui()
{

let root=document.getElementById("root")

let Div1 = document.createElement("div");
Div1.id = "wp";
root.appendChild(Div1)

let Div2 = document.createElement("div");
Div2.id = "navbar";
Div1.appendChild(Div2)
let profile=document.createElement("img")
profile.id="profile"
profile.src="nature.jpg"
    Div2.appendChild(profile)

let Div3 = document.createElement("div");
Div3.id = "msg";
Div1.appendChild(Div3)

let Div4 = document.createElement("div");
Div4.id = "ibox";
Div1.appendChild(Div4)

let navtext=document.createTextNode("friend")
Div2.appendChild(navtext)



function updateobj(selectedinput)
{  
   
   const obj={}
   let text=document.getElementById(selectedinput).value
   let timestamp=new Date(); 
   let a=timestamp.toLocaleTimeString(navigator.language, {hour12: false,hour: '2-digit', minute:'2-digit'});
   obj.text=text
   obj.time=a
   arr.push(obj)
   flag=true
   
}
function displaymenu(index)
{
    var menuElement = document.createElement("menu");
    menuElement.id="menuele"
    var copy= document.createElement("li");
    copy.textContent = "copy";

    var edit = document.createElement("li");
    edit.textContent = "edit";

    var del = document.createElement("li");
    del.textContent = "delete";
    menuElement.append(copy,edit,del)
    msgdiv.appendChild(menuElement)

    copy.addEventListener("click",function(){
        copymsg(index)
      })
    edit.addEventListener("click",function(){
        editmsg(index)
      })
    del.addEventListener("click",function(){
        delmsg(index)
      })
      
}


function copymsg(index){
    let copytext=arr[index].text
    
    navigator.clipboard.writeText(copytext);
  

    
}
function updateEditedData(index){
    let editedText=document.getElementById("stext").value
    let editedtime=new Date().toLocaleTimeString(); 
    arr.splice(index,1)
    display()
}
function editmsg(index)
{
    let edittext=arr[index].text
    document.getElementById("stext").value = edittext;
    
    inputbox.addEventListener("change",function(){
        updateEditedData(index)
      })
}
function delmsg(index)
{
       
       let result=confirm("Delete message ?");
       if(result==true)
       {
        arr.splice(index,1)
        display()
       }
      flag=true
    
}
let flag=true
function icon(index)
{
  if(flag==true)
  {
    let icon=document.createElement("img")
    icon.id="icon"
    icon.src="iconimg.svg"
    msgdiv.appendChild(icon)
    flag=false
    icon.addEventListener("click",function(){
        displaymenu(index)
      })
  }
    
}
let msgdiv
function display()
{
   document.getElementById("stext").value = "";
   Div3.innerHTML=""
   for(let i=0;i<arr.length;i++)
   {
    let enteredText=arr[i].text
    let enteredtime=arr[i].time

    msgdiv = document.createElement("div");
    msgdiv.id = "msgdiv";
    Div3.appendChild(msgdiv)

    let etext=document.createElement("button")
    etext.id="text"
    msgdiv.appendChild(etext)
    etext.innerHTML=enteredText
    
    etext.addEventListener('mouseover', function() {
        icon(i)
        });

    let etime=document.createElement("p")
    etime.id="time"
    msgdiv.appendChild(etime)
    etime.innerHTML=enteredtime

   }
}
let inputbox=document.createElement("input")
    inputbox.id="stext"
    inputbox.addEventListener("change",function(){
      updateobj("stext")
    })
Div4.appendChild(inputbox)      
    
    let sbutton=document.createElement("BUTTON")
    sbutton.id="sbutton"
    sbutton.type="button"
    sbutton.textContent="send"
    Div4.appendChild(sbutton)

    sbutton.onclick = function(){
        display()
      };
      
     
    


}