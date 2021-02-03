
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

	// login_form.addEventListener('submit', handleLogin)

	// async function handleLogin(ev) {
	// 	ev.preventDefault() // stop the page reloading
	// 	let myForm = event.target
	// 	let fd = new FormData(myForm)

	// 	fd.append('api-key','myApiKey')

	// 	// look at the all content

	// 	for(let key of fd.keys()) {
	// 		console.log(key, fd.get(key))
	// 	}

	// 	let json = await converToJSON(fd)

	// 	// send the request with the form data
	// 	let url = "http://localhost:3000/"
	// 	let h = new Headers()
	// 	h.append('Content-Type', 'application/json')
	// 	let req = new Request(url, {
	// 		headers: h,
	// 		body: json,
	// 		method: 'POST',
	// 	})
	// 	console.log(req)

	// 	fetch(req)
	// 		.then((res) =>  res.json())
	// 		.then((data) => {
	// 			console.log('Response from server')
	// 			console.log(data)
	// 		})
	// 		.catch((err) => console.log(err))

	// 	function converToJSON(formData) {
	// 		let obj = {}
	// 		for(let key of formData) {
	// 			obj[key] = formData.get(key)
	// 		}
	// 		return JSON.stringify(obj)
	// 	}

	// }

	// transfer the data between two html files while handling the forms and get the new response page locally by using location

	// handleLogin = () => {
	// 	const name = document.getElementById('username').value

	// 	localStorage.setItem('username', name)

		

	// }
	// login_popup_btn.onclick = () => {
	// 	document.getElementById('user_name') = username
	// }
	

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
	signup.onclick = () => {
		window.location.href = './signupPage.html'
	}
	// register.onclick = (event) => {
	// 	event.preventDefault()
	// 	window.location.href = './userPage.html'
	// }


}