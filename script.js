let displayValue='';
function appendToDisplay(val){
 displayValue+=val;
 document.getElementById('display').value=displayValue;
}
function clearDisplay() {
    displayValue='';
    document.getElementById('display').value=displayValue;
}
function calculate(){
    try{
        let result=eval(displayValue);
        document.getElementById('display').value=result;
        displayValue=result.toString();
    }
    catch(error){
     document.getElementById('display').value='Error';
     displayValue='';
    }
}