window.onload = () => {

    const params = (new URL(document.location)).searchParams,
     username = params.get('username'),
     user_name = document.getElementById('user_name'),
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
    

    user_name.innerHTML = username
    u1.innerHTML = username

    var movie_posture=document.getElementById("movie_posture")
    var mname_id=document.getElementById("mname")
    var mname = localStorage.getItem("mname")
    var details = localStorage.getItem("details")
    var mv_url = localStorage.getItem("img_url")
    var details_id= document.getElementById("details")
    var director=localStorage.getItem("director")
    var director_id=document.getElementById("director")
    var music_by=localStorage.getItem("music_by")
    var music_by_id=document.getElementById("music")
    var cinematography=localStorage.getItem("cinematography")
    var cinematography_id=document.getElementById("cinematography")
    
    // alert(movie_posture)
   //first section
    movie_posture.src = mv_url
    mname_id.innerHTML = mname

    details_id.innerHTML = details
    director_id.innerHTML = director
    music_by_id.innerHTML = music_by
    cinematography_id.innerHTML = cinematography  

    document.addEventListener('click', (e) => {
        e.preventDefault()
        var opt_home = document.getElementById('opt_home')
        var opt_sell = document.getElementById('opt_sell')
        var opt_buy = document.getElementById('opt_buy')
        var opt_about = document.getElementById('opt_about')
        var opt_payment = document.getElementById('opt_payment')
        var btntickets = document.getElementById('btntickets')
        var mname_id=document.getElementById("mname")
        var details_id= document.getElementById("details")
        var director_id=document.getElementById("director")
        var music_by_id=document.getElementById("music")
        var cinematography_id=document.getElementById("cinematography")
        var mv_url_id = document.getElementById("movie_posture")
        const img_id = "mv_url1"
        var img_url = e.target.src

        opt_home.onclick = () => {
            window.location.href = "./userpage.html"
        }
        opt_buy.onclick = () => {
            window.location.href = "./buytickets.html"
        }
        opt_sell.onclick = () => {
            window.location.href = "./selltickets.html"
        }
        opt_payment.onclick = () => {
            window.location.href = "./payments.html"
        }
        opt_about.onclick = () => {
            window.location.href = "./aboutus.html"
        }
        btntickets.onclick = () => {
            window.location.href = "./theatres.html"
        }

        if(e.target.id==img_id) {
            var mname = e.target.parentElement.nextElementSibling.innerText
            mv_url_id.src=img_url
            mname_id.innerHTML = mname

            var movies=["Red" , "30 rojullo preminchadam ela" ,"Alludu Adhurs", "Khiladi"]
               movies.forEach(function(movie){
                   switch(movie) {
                        case "Red":
                            if(mname == movie){
                            details_id.innerHTML=("details","2h 26m, Action & Crime Thiller, UA ,4 dec, 2021")
                            director_id.innerHTML=("director","Directed by: Kishore Tirumala  ")
                            music_by_id.innerHTML=("music_by","Music by: Mani sharma ")
                            cinematography_id.innerHTML=("cinematography","cinematography : Sameer Reddy ")
                           }
                            break
                        case "30 rojullo preminchadam ela":
                            if(mname == movie){
                            details_id.innerHTML=("details","2h 30m, Drama & Romance, UA ,29 jan, 2021")
                            director_id.innerHTML=("director","Directed by: Munna ")
                            music_by_id.innerHTML =("music_by","Music by: Babu Sv ")
                            cinematography_id.innerHTML=("cinematography","cinematography: Dasaradhi Sivendra ")
                           }
                            break
                        case "Alludu Adhurs":
                            if(mname == movie){
                            details_id.innerHTML=("details","2h 29m, Action & Romance, UA ,15 jan, 2021")
                            director_id.innerHTML=("director","Directed by: Santosh Srinivas ")
                            music_by_id.innerHTML=("music_by","Music by: DSP ")
                            cinematography_id.innerHTML=("cinematography","cinematography: Chota K.Naidu ")
                           }
                            break 
                        case "Khiladi":
                            if(mname == movie){
                            details_id.innerHTML=("details","2h 29m, Action , UA ,28 may, 2021")
                            director_id.innerHTML=("director","Directed by: Ramesh Varma ")
                            music_by_id.innerHTML=("music_by","Music by: DSP ")
                            cinematography_id.innerHTML=("cinematography","cinematography: Sujith Vassudev  ")
                           }
                            break 

                   }
               })
           } else {

            }
        })
    }