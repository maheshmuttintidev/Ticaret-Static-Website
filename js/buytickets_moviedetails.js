window.onload = () => {
    const id = e => document.getElementById(e),
        user_name = id('user_name'),
        u1 = id('user_name_1'),
        logout_link = id('logout_link'),
        home_link = id('home_link'),
        sell_history_link = id('sell_history_link'),
        buy_history_link = id('buy_history_link'),
        cards_link = id('cards_link'),
        rewards_link = id('rewards_link'),
        help_support_link = id('help_support_link'),
        settings_link = id('settings_link'),
        about_us_link = id('about_us_link'),
        user_action_1 = id('user_action_1'),
        close_menu = id('close_menu'),
        menu_holder = id('menu_holder')
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

    var movie_posture=id("movie_posture")
    var mname_id=id("mname")
    var mname = localStorage.getItem("mname")
    var details = localStorage.getItem("details")
    var mv_url = localStorage.getItem("img_url")
    var details_id= id("details")
    var director=localStorage.getItem("director")
    var director_id=id("director")
    var music_by=localStorage.getItem("music_by")
    var music_by_id=id("music")
    var cinematography=localStorage.getItem("cinematography")
    var cinematography_id=id("cinematography")

    // cast and crew ids
    var cast_imgs = [id("hero_img"),id("heroine_img"),id("villain1_img"),id("villain2_img"),id("villain3_img")],
        crew_imgs = [id("director_img"),id("music_img"),id("writer_img")]
        // cast_names =[id("hero_name"),id("heroine_name"),id("villain1_name"),id("villain2_name"),id("villain3_name")],
        // crew_names =[id("director_name"),id("music_name"),id("writer_name")]

    var lc_cast_imgs_data = [
        localStorage.getItem("hero_url"),
        localStorage.getItem("heroine_url"),
        localStorage.getItem("villain1_url"),
        localStorage.getItem("villain2_url"),
        localStorage.getItem("villain3_url")
    ],
        lc_cast_name_data = [
            localStorage.getItem("hero_name"),
            localStorage.getItem("heroine_name"),
            localStorage.getItem("villain1_name"),
            localStorage.getItem("villain2_name"),
            localStorage.getItem("villain3_name")
        ]

    var lc_crew_imgs_data = [
        localStorage.getItem("director_url"),
        localStorage.getItem("music_url"),
        localStorage.getItem("writer_url")
    ],
        lc_crew_name_data = [
        sessionStorage.getItem("director_name"),
        sessionStorage.getItem("music_name"),
        sessionStorage.getItem("writer_name")
        ]

    for(let i=0; i< cast_imgs.length;i++) {
        cast_imgs[i].src = lc_cast_imgs_data[i]
    }
    // for(let j=0; j< cast_names.length;j++){
    //     cast_names[j].innerHTML = lc_cast_name_data[j]
    // }
    for(let i=0; i< crew_imgs.length;i++) {
        crew_imgs[i].src=lc_crew_imgs_data[i]
    }
    // for(let i=0; i< crew_names.length;i++){
    //     crew_names[i].innerHTML= lc_crew_name_data[i]
    // }

    
    movie_posture.src = mv_url
    mname_id.innerHTML = mname

    details_id.innerHTML = details
    director_id.innerHTML = director
    music_by_id.innerHTML = music_by
    cinematography_id.innerHTML = cinematography  

    document.addEventListener('click', (e) => {
        // e.preventDefault()
        var opt_home = id('opt_home')
        var opt_sell = id('opt_sell')
        var opt_buy = id('opt_buy')
        var opt_about = id('opt_about')
        var opt_payment = id('opt_payment')
        var btntickets = id('btntickets')
        var mname_id=id("mname")
        var details_id= id("details")
        var director_id=id("director")
        var music_by_id=id("music")
        var cinematography_id=id("cinematography")
        var mv_url_id = id("movie_posture")
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
            window.location.href = "./buy_theatres.html"
        }





        if(e.target.id==img_id) {
            var mname = e.target.parentElement.nextElementSibling.innerText
            mv_url_id.src=img_url
            mname_id.innerHTML = mname

            var re_movies=["Red" , "30 rojullo preminchadam ela" ,"Alludu Adhurs", "Khiladi"]
               re_movies.forEach(function(movie){
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