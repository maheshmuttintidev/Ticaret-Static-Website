window.onload=function(){
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
        window.location.href = "./html/rewards.html"
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


    


    
    document.addEventListener("click", function(e) {

        var cast_crew_details = [
            {
                krack_cast: {
                    hero_url: "../assets/castravi.jpg",
                    heroine_url: "../assets/cast sh.jpg",
                    villain1_url: "../assets/cast samuthirakani.jpg",
                    villain2_url: "../assets/cast ravishankar.jpg",
                    villain3_url: "../assets/cast vs.jpg"
                },
                krack_crew: {
                    director_url: "../assets/crew director.jpg",
                    music_url: "../assets/crew music.jpg",
                    writer_url: "assets/crew_writer.jpg"
                },
                krack_cast_names: {
                    hero_name:"Ravi Teja",
                    heroine_name:"Shruthi Haasan",
                    villain1_name:"samuthirakani",
                    villain2_name:"Ravi Shankar",
                    villain3_name:"Vara Lakshmi"
                },
                krack_crew_names: {
                    director_name:"Gopichand Malineni",
                    music_name:"S.S.Thaman",
                    writer_name:"Sai Madhav Burra"
                }
            },
            {
                wonder_woman_cast: {
                    hero_url: "../assets/hero ChrisPine.jpg",
                    heroine_url: "../assets/heroine GalGadot.jpg",
                    villan1_url: "../assets/villan1 PedroPascals.jpg",
                    villain2_url: "../assets/villan2 Kristein wiig.jpg",
                    villain3_url: "../assets/child Lilly Aspell.jpg"
                },
                wonder_woman_crew: {
                    director_url: "../assets/Director Patty Jenkins.jpg",
                    music_url: "../assets/music Williams.jpg",
                    writer_url: "../assets/camera MatthewJensen.jpg"
                },
                wonder_woman_cast_names: {
                    hero_name:"Chris Pine",
                    heroine_name:"Gal Gadot",
                    villain1_name:"Pedro Pascals",
                    villain2_name:"Kristein Wiig",
                    villain3_name:"Lilly Aspell"
                },
                wonder_woman_crew_names: {
                    director_name:"Patty Jenkins",
                    music_name:"Williams",
                    writer_name:"Mathew Jensen"
                }
            }
        ]



        var img_id = "mv_url"
        localStorage.setItem("img_url",e.target.src)
        if(e.target.id == img_id) {

            var mname = e.target.parentElement.nextElementSibling.innerText
                localStorage.setItem("mname",mname)

               var movies = ["Krack", "Wonder_Woman", "Tenet", "RRR", "Red" , "30 rojullo preminchadam ela" ,"Alludu Adhurs", "Khiladi"]
               movies.forEach(function(movie){
                   switch(movie) {
                       case "Krack":
                           if(mname == movie){
                            localStorage.setItem("details", "2h 34m, Action Romantic Thriller, UA ,10 Jan, 2021")
                            localStorage.setItem("director","Directed by: Gopichand Malineni")
                            localStorage.setItem("music_by","Music by: Thaman ")
                            localStorage.setItem("cinematography","cinematography: Vishnu ")
                            localStorage.setItem("hero_url",cast_crew_details[0].krack_cast.hero_url)
                            localStorage.setItem("heroine_url",cast_crew_details[0].krack_cast.heroine_url)
                            localStorage.setItem("villain1_url",cast_crew_details[0].krack_cast.villain1_url)
                            localStorage.setItem("villain2_url",cast_crew_details[0].krack_cast.villain2_url)
                            localStorage.setItem("villain3_url",cast_crew_details[0].krack_cast.villain3_url)
                            localStorage.setItem("hero_name",cast_crew_details[0].krack_cast_names.hero_name)
                            localStorage.setItem("heroine_name",cast_crew_details[0].krack_cast_names.heroine_name)
                            localStorage.setItem("villain1_name",cast_crew_details[0].krack_cast_names.villain1_name)
                            localStorage.setItem("villain2_name",cast_crew_details[0].krack_cast_names.villain2_name)
                            localStorage.setItem("villain3_name",cast_crew_details[0].krack_cast_names.villain3_name)
                            localStorage.setItem("director_url",cast_crew_details[0].krack_crew.director_url)
                            localStorage.setItem("music_url",cast_crew_details[0].krack_crew.music_url)
                            localStorage.setItem("writer_url",cast_crew_details[0],krack_crew.writer_url)
                            localStorage.setItem("director_name",cast_crew_details[0],krack_crew.director_name)
                            localStorage.setItem("music_name",cast_crew_details[0],krack_crew.music_name)
                            localStorage.setItem("writer_name",cast_crew_details[0],krack_crew.writer_name)

                           }
                            break
                        case "Wonder_Woman":
                            if(mname == movie){
                            localStorage.setItem("details","2h 35m, Action & Fantasy, UA ,25 dec, 2020")
                            localStorage.setItem("director","Directed by: Patti Jenkins")
                            localStorage.setItem("music_by","Music by: Williams")
                            localStorage.setItem("cinematography","cinematography: Matthew Jensen")
                           }
                            break
                        case "Tenet":
                            if(mname == movie){
                            localStorage.setItem("details","2h 30m, Action & Sci-fi, UA ,4 dec, 2020")
                            localStorage.setItem("director","Directed by: Christopher Nolan ")
                            localStorage.setItem("music_by","Music by: Ludwig Goransson")
                            localStorage.setItem("cinematography","cinematography: Hoyte Van Hoytema ")
                           }
                            break
                        case "RRR":
                            if(mname == movie){
                            localStorage.setItem("details","2h 30m, Action & Drame, UA ,13 oct, 2021")
                            localStorage.setItem("director","Directed by: S.S. Rajamouli ")
                            localStorage.setItem("music_by","Music by: MM Keeravani")
                            localStorage.setItem("cinematography","cinematography: K.K. Senthil Kumar ")
                           }
                            break   
                        case "Red":
                            if(mname == movie){
                            localStorage.setItem("details","2h 26m, Action & Crime Thiller, UA ,4 dec, 2021")
                            localStorage.setItem("director","Directed by: Kishore Tirumala  ")
                            localStorage.setItem("music_by","Music by: Mani sharma ")
                            localStorage.setItem("cinematography","cinematography : Sameer Reddy ")
                           }
                            break
                        case "30 rojullo preminchadam ela":
                            if(mname == movie){
                            localStorage.setItem("details","2h 30m, Drama & Romance, UA ,29 jan, 2021")
                            localStorage.setItem("director","Directed by: Munna ")
                            localStorage.setItem("music_by","Music by: Babu Sv ")
                            localStorage.setItem("cinematography","cinematography: Dasaradhi Sivendra ")
                           }
                            break
                        case "Alludu Adhurs":
                            if(mname == movie){
                            localStorage.setItem("details","2h 29m, Action & Romance, UA ,15 jan, 2021")
                            localStorage.setItem("director","Directed by: Santosh Srinivas ")
                            localStorage.setItem("music_by","Music by: DSP ")
                            localStorage.setItem("cinematography","cinematography: Chota K.Naidu ")
                           }
                            break 
                        case "Khiladi":
                            if(mname == movie){
                            localStorage.setItem("details","2h 29m, Action , UA ,28 may, 2021")
                            localStorage.setItem("director","Directed by: Ramesh Varma ")
                            localStorage.setItem("music_by","Music by: DSP ")
                            localStorage.setItem("cinematography","cinematography: Sujith Vassudev  ")
                           }
                            break 

                   }
               })
            }


        },{capture: true})

    }