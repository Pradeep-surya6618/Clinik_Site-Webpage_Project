//Contact Page
const form=document.getElementById("myForm");
 form.addEventListener("submit",function(event){
  event.preventDefault();
  const Name=document.getElementById("Name").value;
  const Email=document.getElementById("Email").value;
  const Subject=document.getElementById("Subject").value;
  const Message=document.getElementById("Message").value;
        
  document.write("User Name :", Name); document.write("<br/>"); document.write("<br/>");
  document.write("User Email :", Email); document.write("<br/>"); document.write("<br/>");
  document.write("User Subject :", Subject); document.write("<br/>"); document.write("<br/>");
  document.write("User Message :", Message); document.write("<br/>"); document.write("<br/>");
});