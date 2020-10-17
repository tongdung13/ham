function sp(number){
    let result = number*number;
    return result;

}
function culcalate(){
    let input = document.getElementById("input").value;
    let resut = sp(input);
    document.getElementById("result").innerHTML= resut;
}