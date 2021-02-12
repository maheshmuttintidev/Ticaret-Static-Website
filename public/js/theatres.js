this.onload = function() {
     const user_name = document.getElementById('user_name'),
     u1 = document.getElementById('user_name_1'),
     logout_link = document.getElementById('logout_link'),
     home_link = document.getElementById('home_link'),
     sell_history_link = document.getElementById('sell_history_link'),
     buy_history_link = document.getElementById('buy_history_link'),
     cards_link = document.getElementById('cards_link'),
     rewards_link = document.getElementById('rewards_link'),
     help_support_link = document.getElementById('help_support_link'),
     settings_link = document.getElementById('settings_link'),
     about_us_link = document.getElementById('about_us_link'),
     user_action_1 = document.getElementById('user_action_1'),
        close_menu = document.getElementById('close_menu'),
        menu_holder = document.getElementById('menu_holder')
    var login_username = localStorage.getItem("login_username")

    user_action_1.onclick = (e) => {
        e.preventDefault()
        if(menu_holder.style.display == 'block') {
            menu_holder.style.display = 'none'
        } else {
            menu_holder.style.display = 'block'
        }
    }

    close_menu.onclick = () => {
        menu_holder.style.display = 'none'
    }

    home_link.onclick = () => {
        window.location.href = "./userpage.html"
    }

    sell_history_link.onclick = () => {
        window.location.href = "./sellhistory.html"
    }

    buy_history_link.onclick = () => {
        window.location.href = "./buyhistory.html"
    }

    cards_link.onclick = () => {
        window.location.href = "./cards.html"
    }

    rewards_link.onclick = () => {
        window.location.href = "./rewards.html"
    }

    help_support_link.onclick = () => {
        window.location.href = "./helpsupport.html"
    }

    settings_link.onclick = () => {
        window.location.href = "./settings.html"
    }
    
    about_us_link.onclick = () => {
        window.location.href = "./aboutus.html"
    }

    logout_link.onclick = () => {
        window.location.href = "./index.html"
    }
    

    user_name.innerHTML = login_username
    u1.innerHTML = login_username
}