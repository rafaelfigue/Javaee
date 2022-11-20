/**
 * Confirmação de exclusão de um contato
 * @author Rafael Figueiredo
 * @param idcon
 */
 
 function confirmar(idcon){
	let resposta = confirm("deseja excluir este contato ?")
	if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	}
}