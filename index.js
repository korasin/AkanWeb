function getAkanName();
let yearOfBirth = document.getElementById('year-input'). value;
let monthOfBirth = document.getElementById('month-input').value;
let dayOfBirth = document.getElementById('day-input').value;
let gender = document.getElementById('gender');

function getGender(){
    for(let gender of genders){
        if (gender.checked){
            return gender.value
        }
    }
 
}

let myGenderValue = getGender();
console.log(myGenderValue);

function monthValidator(){
    if (monthValidator < 1 || monthOfBirth > 12){
        return false;
    }else{
        return true;
    }
}

function dayValidator(){
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0){
        if ( dayOfBirth > 28 || dayOfBirth < 1){
            return false;
        }else if (monthOfBirth === 2 && dayOfBirth > 29){
            return false;
        }else if(monthOfBirth === 2 && dayOfBirth < 1){
            return false;
        }else{
            return true;
        }
    }else if (dayOfBirth < 1 || dayOfBirth > 31){
        return false;
    }else{
        return true;
    }
}

//validation variables
let monthValid = monthValidator();
let dayValid = dayValidator();

//formula to determine day of birth(sunday=1,monday=2)etc..
let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+((5*Number(yearOfBirth.slice(2,4))/4))+((26*Number(monthOfBirth+1)/10))+dayOfBirth)%7);

//creating arrays of Akan names for males & females and days of the week
let dayOfWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

let maleAkanNames = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];

let femaleAkanNames = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

//generating an index value to select items on arrays
let index;

//fix formula bug
if (dayOfWeekNumber == 0){
    index = 6;
}else{
    index = dayOfWeekNumber -1;
}
console.log(index);

if (myGenderValue == 'male' && monthValid && dayValid){
    document.getElementById('result').textContent = 'You were born on a' + dayOfWeek[index] + ',Your Akan name is'+ maleAkanNames[index];
    document.getElementById('display-name').textContent = 'Here is your Akan name:';
    document.getElementById('result').style.fontSize = '18px';
    document.querySelector('h1').textContent = 'Hello' + '' + maleAkanNames[index];
    return false;
}else{
    alert('You entered an invalid day/month, please try agin');
}

if (myGenderValue == 'female' && monthValid && dayValid){
    document.getElementById('result').textContent = 'You were born on a' + dayOfWeek[index] + ',Your Akan name is'+ femaleAkanNames[index];
    document.getElementById('display-name').textContent = 'Here is your Akan name:';
    document.getElementById('result').style.fontSize = '18px';
    document.querySelector('h1').textContent = 'Hello' + '' + femaleAkanNames[index];
    return false;
}else{
    alert('You entered an invalid day/month, please try agin');
}