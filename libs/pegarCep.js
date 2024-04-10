
let inputCep = document.querySelector("#cep");
let inputs = document.querySelectorAll("input");
let regrex = /[0-9]{5}-?[0-9]{3}/;
async function pegarCep (id) {
    response = await fetch(`http://viacep.com.br/ws/${id}/json`);
    return await response.json();
}
function checarInput (obj) {
    for (let x = 0; x < inputs.length; x++)
    {
        if (obj[inputs[x].id] != undefined)
        {
            inputs[x].value = obj[inputs[x].id];

        }
    }
}
inputCep.addEventListener("input" || "click", async () => {
    if (regrex.test(inputCep.value))
    {
        let resposta = await pegarCep(inputCep.value);
        checarInput(resposta);
    }
});