/**
 * @type HTMLParagraphElement
 */
let pNome = document.querySelector( "#meunome" );
let p = document.createElement( "p" );
p.className = "meunome";
p.innerText = "A.K.A Emanuel";
p.style.display ="none"
document.querySelector( "body" ).appendChild( p );
pNome.addEventListener( "mouseover", ( event ) =>
{
    p.style.display="block"
    p.style.position = "Absolute";
    p.style.top =  event.pageY + "px";
    p.style.left =  event.pageX  + "px";
}
);
pNome.addEventListener( "mouseout", () => p.style.display = "none"
);
/**
 * 
 * @param {number} x 
 * @returns {number}
 */
function a (x){
    return x+x
}
a(2)