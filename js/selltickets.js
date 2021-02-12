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


   


   
   document.addEventListener("click", function(e) {
       // e.preventDefault()
       var img_id = "mv_url"
       var img_url = localStorage.setItem("img_url",e.target.src)
       if(e.target.id == img_id) {

           var mname = e.target.parentElement.nextElementSibling.innerText
       // alert(mname)
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