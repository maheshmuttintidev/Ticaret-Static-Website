
globalThis.onload = () => {

	const [user_actions, login_popup, login_normal, close] = [document.getElementById('user_actions'),
										 				document.getElementById('login_popup'),
										 				document.getElementById('login_normal'),
										 				document.getElementById('close')]
	const popup = login_popup.style
	user_actions.onclick = () => {
		popup.display = 'block'
		login_popup.classList.add('zoomin')
	}
	login_normal.onclick = () => {
		popup.display = 'block'
		login_popup.classList.add('zoomin')
	}
	close.onclick = () => {
		popup.display = 'none'
	}

}