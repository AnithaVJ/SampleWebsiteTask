

function requiredFieldLeft(element) {      
    if(element.value==null || element.value==""){
        element.style.backgroundColor = "yellow";
       }

    else if (element.id != "emailField"){
        element.value = element.value.toUpperCase();
        element.style.backgroundColor = "";
        }
    else{
        element.style.backgroundColor = "";
        }     
}



function changeCase(element){
     element.value = element.value.toUpperCase();
}



function validateAll()
{
  var message = ""; 
var allowSubmit = true;
  var button = document.getElementById('submitButton')
  var flag =0;
  
  button.style.outline = 'none';
 
 //to check required empty.
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)  {
    if (allElements[i].getAttribute("required") !== null)  {
      // Element exists with attribute.   
      if(allElements[i].value==null || allElements[i].value=="")  {
        flag=1;
        break;
      }
    }
  }

//required field empty
if (flag==1){
    allowSubmit = true;
    alert("Fill all required fields");
 }

else if (flag == 0){
    //checking email
    var emailId = document.getElementById('emailField'); 
    var re = "^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$";
    if(emailId.value.match(re))
        emailId.style.backgroundColor = "";    
    else{
        emailId.style.backgroundColor = "yellow";
        allowSubmit = false;
        message = message.concat(" Invalid email! ");
        }   


    //checking volunteer interests
    var checkboxs=document.getElementsByName("interestedActivity");
    var okay=false;
    for(var i=0, l=checkboxs.length; i<l; i++)    {
        if(checkboxs[i].checked)        {
            okay=true;
            break;
        }
    }  
    if (okay == false){
        allowSubmit = false;
        message = message.concat(" Select atleast one interested activity! ");
    }

    //checking dob
   //checking phone number

    //checking age
    var age = document.getElementById('ageField'); 
    if(age.value < 16 || age.value>90){
        allowSubmit = false;
        message = message.concat(" Age must be between 16-90! ");
        age.style.backgroundColor ="yellow";
        }                
    else{
        age.style.backgroundColor = "";        
        }   


    //if all conditions not satisfied
    if (allowSubmit == false){
        alert(message);
        }

    //if all conditions satisfied
    else if (allowSubmit == true)
        alert(" Thankyou. ");
    }
}


