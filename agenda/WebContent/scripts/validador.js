/**
 * Validação de formulário
 * @author Rafael Figueiredo
 */
function validar () {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('Digite o Nome do contato')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('Digite o Telefone')
		frmContato.fone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}