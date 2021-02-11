this.onload = () => {
	const [user_actions,
			login_popup,
			login_normal,
			close,
			signup] = [document.getElementById('user_actions'),
			document.getElementById('login_popup'),
			document.getElementById('login_normal'),
			document.getElementById('close'),
			document.getElementById('signup')]
	const popup = login_popup.style
	user_actions.onclick = () => {
		popup.display = 'block'
	}
	login_normal.onclick = () => {
		popup.display = 'block'
	}
	close.onclick = () => {
		popup.display = 'none'
	}
	signup.onclick = (ev) => {
		ev.preventDefault()
		window.location.href = './register.html'
	}
}