function calculateAge (){
    let dob = document.getElementById("dateBirth").value;
    let ageOnDate = document.getElementById("age-at").value;
     
    let age = document.getElementById("age");  
    let newDateOfBirthY = new Date(dob);
   
     
    
    let newAgeOfDateY = new Date(ageOnDate);
    
    
    let ageDiff = Math.abs(newAgeOfDateY - newDateOfBirthY);
    let show  = ageDiff / 3.1536E+10;

    age.innerText = "Your age is : " + Math.floor(show);
    
    }
     
    let findAge = document.getElementById("find");
    findAge.onclick = function(){
        calculateAge();
    }