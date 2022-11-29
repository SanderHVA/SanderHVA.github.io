let name1 = document.getElementById("song_title1")
let name2 = document.getElementById("song_title2")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let body = document.querySelector('body')
let video1 = document.getElementById("video1")
let video2 = document.getElementById("video2")
let singer1 = document.getElementById("singer1")
let singer2 = document.getElementById("singer2")
let round_indicator = document.getElementById("round_indicator")
let winnaar = false

let shareUrl = "https://sandersekreve.me/christmas"


  
console.log("why u lookin here?")

let chosen_numbers = []

let topdrie = []

let youtube_prefix = "https://www.youtube.com/embed/"

let nameList = [
    "All I want for christmas is You", 
    "Last Christmas", 
    "Santa Tell me", 
    "Rockin' Around The Christmas Tree", 
    "It's Beginning To Look A Lot Like Christmas",
    "Jingle Bell Rock",
    "It's the Most Wonderful Time of the Year",
    "Let it snow!",
    "Underneath the Tree",
    "Sleigh Ride",
    "Feliz Navidad",
    "snowman",
    "Holly Jolly Christmas",
    "Mistletoe",
    "Wonderful Christmastime",
    "Santa Baby",
    "Do they know it's christmas",
    "Stevens - Merry Christmas Everyone",
    "Happy Xmas",
    "Let It Snow!",
    "Driving Home For Christmas",
    "Thank God It's Christmas",
    "Have Yourself A Merry Little Christmas",
    "Baby It's Cold Outside",
    "My Only Wish",
    "You Make It Feel Like Christmas",
    "Jingle Bell Rock",
    "Santa Claus Is Comin' to Town",
    "Step Into Christmas",
    "What Christmas Means To Me",
    "White Christmas",
    "Christmas Lights"
]

let default_length = nameList.length

let overigeList = [
    "All I want for christmas is You", 
    "Last Christmas", 
    "Santa Tell me", 
    "Rockin' Around The Christmas Tree", 
    "It's Beginning To Look A Lot Like Christmas",
    "Jingle Bell Rock",
    "It's the Most Wonderful Time of the Year",
    "Let it snow!",
    "Underneath the Tree",
    "Sleigh Ride",
    "Feliz Navidad",
    "snowman",
    "Holly Jolly Christmas",
    "Mistletoe",
    "Wonderful Christmastime",
    "Santa Baby",
    "Do they know it's christmas",
    "Stevens - Merry Christmas Everyone",
    "Happy Xmas",
    "Let It Snow!",
    "Driving Home For Christmas",
    "Thank God It's Christmas",
    "Have Yourself A Merry Little Christmas",
    "Baby It's Cold Outside",
    "My Only Wish",
    "You Make It Feel Like Christmas",
    "Jingle Bell Rock",
    "Santa Claus Is Comin' to Town",
    "Step Into Christmas",
    "What Christmas Means To Me",
    "White Christmas",
    "Christmas Lights"
]

let urls = [
    "yXQViqx6GMY",
    "E8gmARGvPlI",
    "nlR0MkrRklg",
    "1qYz7rfgLWE",
    "QJ5DOWPGxwg",
    "Gqwk7uR1BI8",
    "AN_R4pR1hck",
    "Rnil5LyK_B0",
    "YfF10ow4YEo",
    "XZTzai1H9DM",
    "N8NcQzMQN_U",
    "gset79KMmt0",
    "Dkq3LD-4pmM",
    "LUjn3RpkcKY",
    "94Ye-3C1FC8",
    "HTCFi4l3nkY",
    "j3fSknbR7Y4",
    "N-PyWfVkjZc",
    "flA5ndOyZbI",
    "sE3uRRFVsmc",
    "DDt3u2Ev1cI",
    "qw2TD91Nytg",
    "rnEqv8WcVq8",
    "6bbuBubZ1yE",
    "_MzumcY3lpk",
    "3ZT9_H4-hbM",
    "5vyMuxxLsD0",
    "OsyxFkYZ-aU",
    "IbRtGMm96F8",
    "wtgGBgpNcIo",
    "v5ryZdpEHqM",
    "z1rYmzQ8C9Q",
]

let singers = [
    "Mariah Carey",
    "Wham!",
    "Ariana Grande" ,
    "Brenda Lee" ,
    "Michael Bublé" ,
    "Bobby Helms" ,
    "Andy Williams" ,
    "Dean Martin" ,
    "Kelly Clarkson" ,
    "The Ronettes" ,
    "José Feliciano" ,
    "Sia" ,
    "Michael Bublé" ,
    "Justin Bieber" ,
    "Paul McCartney" ,
    "Eartha Kitt" ,
    "Band Aid" ,
    "Shakin' Stevens" ,
    "John Lennon" ,
    "Frank Sinatra" ,
    "Chris Rea" ,
    "Queen" ,
    "Sam Smith" ,
    "Idina Menzel & Michael Bublé" ,
    "Britney Spears" ,
    "Gwen Stefani" ,
    "Daryl Hall & John Oates" ,
    "Mariah Carey" ,
    "Elton John" ,
    "Stevie Wonder" ,
    "Bing Crosby" ,
    "Coldplay"
]

let round_counter = 0;
let random_number_counter = 0


function main(){

    if(getCookie("winnaar") !== ""){

        let winnaar = getCookie("winnaar")
        let tweedeplek = getCookie("tweedeplek")
        let derdeplek = getCookie("derdeplek")

        console.log(winnaar)

        winner_screen(winnaar, tweedeplek, derdeplek)
    }

    $('.slide-in').toggleClass('show');

    
    
    let [left_item_index, right_item_index] = twoRandomNumbers();

    //random eerste 2 namen
    name1.innerText = nameList[left_item_index]
    name2.innerText = nameList[right_item_index]

    //video
    video1.src = youtube_prefix + urls[left_item_index]
    video2.src = youtube_prefix + urls[right_item_index]

    //singer name
    singer1.innerText = singers[left_item_index]
    singer2.innerText = singers[right_item_index]

    //round indicator
    round_counter++
    round_indicator.innerText = `Round ${round_counter}/${nameList.length}`;
    
    button1.addEventListener("click", e=> {
        start_vs_animation()
        
        round_counter++
        
        if(round_counter-1 == nameList.length - 2 || round_counter-1 == nameList.length-1){
            
            topdrie.push(name2.innerText)
        }
        

        

        let current_name = name2.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        winnaar = determineWinner()
        if(winnaar != false){

            setCookie("winnaar", winnaar)
            setCookie("tweedeplek", nameList[nameList.indexOf(topdrie[1])])
            setCookie("derdeplek", nameList[nameList.indexOf(topdrie[0])])

            let tweedeplek = nameList[nameList.indexOf(topdrie[1])]
            let derdeplek = nameList[nameList.indexOf(topdrie[0])]
            

            winner_screen(winnaar, tweedeplek, derdeplek)
              

            
            console.log("abc")
        }else{
            renderNewNumbers(round_counter)
        }
        
    });
    
    button2.addEventListener("click", e=> {
        start_vs_animation()
        
        round_counter++
        
        if(round_counter-1 == nameList.length - 2 || round_counter-1 == nameList.length-1){
            
            topdrie.push(name1.innerText)
        }
        console.log(topdrie)

        

        let current_name = name2.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        winnaar = determineWinner()
        if(winnaar != false){


            setCookie("winnaar", winnaar)
            setCookie("tweedeplek", nameList[nameList.indexOf(topdrie[1])])
            setCookie("derdeplek", nameList[nameList.indexOf(topdrie[0])])

            let tweedeplek = nameList[nameList.indexOf(topdrie[1])]
            let derdeplek = nameList[nameList.indexOf(topdrie[0])]
            

            winner_screen(winnaar, tweedeplek, derdeplek)
            
            console.log("abc")
        }else{
            renderNewNumbers(round_counter)
        }
        
    });

}

document.addEventListener('DOMContentLoaded', (event) => {
    main()
})



function renderNewNumbers(round_counter){
    
    [left_item_index, right_item_index] = twoRandomNumbers();

    //random eerste 2 namen
    name1.innerText = nameList[left_item_index]
    name2.innerText = nameList[right_item_index]

    video1.src = youtube_prefix + urls[left_item_index]
    video2.src = youtube_prefix + urls[right_item_index]

    //singers
    singer1.innerText = singers[left_item_index]
    singer2.innerText = singers[right_item_index]

    //round indicator
    round_indicator.innerText = `Round ${round_counter}/${nameList.length}`;
 
    //return [left_item_index, right_item_index]
    
}



function twoRandomNumbers(){
    let random1 = Math.floor((Math.random() * nameList.length))
    let random2 = Math.floor((Math.random() * nameList.length))

    random_number_counter++
    if((random_number_counter * 2) == default_length){
        chosen_numbers = []
        default_length = default_length / 2
        random_number_counter = 0
    }
    
    // if(chosen_numbers.length > (nameList.length - nul_counter()) || nul_counter() >= (nameList.length - 2)){
    //     chosen_numbers = []
    // }

    while(random1 == random2 || overigeList[random1] == 0 || overigeList[random2] == 0 || chosen_numbers.includes(random1) || chosen_numbers.includes(random2)){
        random1 = Math.floor((Math.random() * nameList.length))
        random2 = Math.floor((Math.random() * nameList.length))
    }


    chosen_numbers.push(random1, random2)

    return [random1, random2];
}

function determineWinner(){
    let gekozenCounter = nul_counter()

    if(gekozenCounter == (overigeList.length - 1)){
        for(let i = 0; i < overigeList.length; i++){
            if(overigeList[i] != 0){
                topdrie.push(overigeList[i])
                return overigeList[i];
            }
        }
    }else{
        return false;
    }
}

function nul_counter(){
    let gekozenCounter = 0
    for(let i = 0; i < overigeList.length; i++){
        
        if(overigeList[i] == 0){
            gekozenCounter++
        }
    }

    return gekozenCounter
}


function start_vs_animation() {
    let overlay = document.getElementById('overlay')
    overlay.classList.remove('vs_animation'); // reset animation
    void overlay.offsetWidth; // trigger reflow
    overlay.classList.add('vs_animation'); // start animation
}

function share_whatsapp(){
        
        window.open(
            `https://api.whatsapp.com/send?&text=${shareUrl}%0A%0ADit is mijn top 3:%0A%0A🏆 ${getCookie("winnaar")}%0A🥈: ${getCookie("tweedeplek")}%0A🥉: ${getCookie("derdeplek")}`,
            "_blank"
          )
}

    

function setCookie(cname, cvalue, exdays=30) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function winner_screen(winnaar, tweedeplek, derdeplek){
    body.innerHTML = `
    <style>
        p{
            color: white;
        }
        .winner-container{
            text-align: center;
        }
        
        #winner{
            font-size: 40px;
        }
        
        @media only screen and (max-width: 600px) {
            .winner-container{
                height: 600px;
                margin-bottom: 100px;
            }
            .winner-inner{
                width: 90%;
                height: 500px;
            }
            
            #cup-img {
                width: 50%;
            }
            
            .winner-left-container{
                width: 100%;
                height: 200px;
            }
            .winner-right-container{
                width: 100%;
                height: 300px;
            }
                
        }

        body {
            position: relative;
        }
        .topright {
            position: fixed;
            top: 30px;
            right: 30px;
            border: 3px solid green; 
            border-radius: 100%;
            padding: 5px;  
            background-color: white;
            cursor: pointer;
        }
        .fa-share-nodes, .fa-rotate-left{
            color: black;
            font-size: 20px;
            padding: 10px;
        }




        .topleft {
            position: fixed;
            top: 30px;
            left: 30px;
            border: 3px solid green; 
            border-radius: 100%;
            padding: 5px;  
            background-color: white;
            cursor: pointer;
        }
        </style>

    <div class="topleft">
        <i class="fa-solid fa-rotate-left" onclick="restart()"></i>
    </div>

    <div class="topright">
        <i class="fa-sharp fa-solid fa-share-nodes" onclick="share_whatsapp()"></i>
    </div>


    <div class="winner-container">
        <p id="winner">${winnaar}</p>
        <div class="winner-inner">
            <div class="winner-left-container">
                <img id="cup-img" src="winner.gif">
            </div>
            <div class="winner-right-container">
                <iframe id="winner-video2" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(winnaar)]}" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>



        
    </div>

    <div class="second-container">
        <div id="second-inner">
            <div id="first">
                <div class="places-text second_place_text">2</div>
                <p>${tweedeplek}</p>
                <iframe id="video3" class="second_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(tweedeplek)]}" frameborder="0" allowfullscreen></iframe>
            </div>
            <div id="second">
                <div class="places-text third_place_text">3</div>
                <p>${derdeplek}</p>
                <iframe id="video3" class="third_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(derdeplek)]}" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    `
}


function restart(){
    removeCookie("winnaar")
    removeCookie("tweedeplek")
    removeCookie("derdeplek")

    window.location.reload();
}



function removeCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}






