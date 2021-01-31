this.onload = function() {

    const user_action_1 = document.getElementById('user_action_1'),
        close_menu = document.getElementById('close_menu'),
        menu_holder = document.getElementById('menu_holder')
    user_action_1.onclick = () => {
        if(menu_holder.style.display == 'block') {
            menu_holder.style.display = 'none'
        } else {
            menu_holder.style.display = 'block'
        }
    }
    close_menu.onclick = () => {
        menu_holder.style.display = 'none'
    }
}