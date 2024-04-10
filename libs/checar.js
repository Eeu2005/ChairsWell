console.log(" cozinhei uma verificacao  uma verificacao😎")
let selects= document.querySelectorAll("select")
let span = document.createElement( "span", );
function checar(){
    let cont = 1 
    while(cont<selects.length){
        console.log(selects[cont])
        if(selects[cont].value!="NULL"){
            selects[ cont ].classList.remove( "errado" )
            cont++
        }else{
          selects[cont].classList.add("errado")  
          cont++
        }
       
    } 
}
document.querySelector("#enviar").addEventListener("click",()=>checar())