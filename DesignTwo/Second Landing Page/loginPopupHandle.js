const handleForm = () => {
    const username = document.getElementById('username').value
    localStorage.setItem('username', username)
}