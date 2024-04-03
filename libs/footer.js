/**
 * @type HTMLParagraphElement
 */
let pNome = document.querySelector( "#nome" );
let p = document.createElement( "p" );
p.className = "meunome";
p.innerText = "A.K.A Emanuel";
pNome.addEventListener( "mouseover", ( event ) =>
{
    p.style.position = "Absolute";
    p.style.top = String( event.y );
    p.style.left = String( event.x );
    console.log( p.style.top );
    document.querySelector( "body" ).appendChild( p );
}
);