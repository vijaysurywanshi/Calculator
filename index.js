let display=document.getElementById('display');

function appendToDisplay(input){
    display.value+=input;
}

function clearscreen(){
    display.value='';
}

function calculate(){
    try{

        display.value=eval(display.value);
    }
    catch(error){
        display.value='Error';
        setTimeout(()=>display.value='',1000)
    }
}