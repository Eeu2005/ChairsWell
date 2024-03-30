
async function pegarCep(id) {
    response = await fetch(`http://viacep.com.br/ws/${id}/json`)
    return await response.json()
}