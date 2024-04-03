/**
 * @type HTMLParagraphElement
 */
let pNome = document.querySelector( "#nome" );
let p = document.createElement( "p" );
p.className = "meunome";
p.innerText = "A.K.A Emanuel";
pNome.addEventListener( "mouseover", ( event ) =>
{
    p.style.display="block"
    console.log( event );
    p.style.position = "Absolute";
    p.style.top = String( event.pageY ) + "px";
    p.style.left = String( event.x ) + "px";
    console.log( p.style.top );
    document.querySelector( "body" ).appendChild( p );
}
);
pNome.addEventListener( "mouseout", ( event ) =>
{
    console.log( event );
    p.style.display = "none";
   
}
);
