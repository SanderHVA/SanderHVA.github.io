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


function main(){

    $('.slide-in').toggleClass('show');

    let round_counter = 0;
    
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
        console.log(round_counter)
        if(round_counter-1 == nameList.length - 2 || round_counter-1 == nameList.length-1){
            console.log("GEPUSHED")
            topdrie.push(name2.innerText)
        }
        console.log(topdrie)

        

        let current_name = name2.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        let winner = determineWinner()
        if(winner != false){
            body.innerHTML = `
            <style>
            p{
                color: white;
            }
            .winner-container{
                text-align: center;
                margin-top: 40px;
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
            </style>
        <div class="winner-container">
            <p id="winner">${winner}</p>
            <div class="winner-inner">
                <div class="winner-left-container">
                    <img id="cup-img" src="winner.gif">
                </div>
                <div class="winner-right-container">
                    <iframe id="winner-video2" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(winner)]}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
        <div class="second-container">
            <div id="second-inner">
                <div id="first">
                    <div class="places-text second_place_text">2</div>
                    <p>${nameList[nameList.indexOf(topdrie[1])]}</p>
                    <iframe id="video3" class="second_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(topdrie[1])]}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div id="second">
                    <div class="places-text third_place_text">3</div>
                    <p>${nameList[nameList.indexOf(topdrie[0])]}</p>
                    <iframe id="video3" class="third_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(topdrie[0])]}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
            `
            console.log("abc")
        }else{
            renderNewNumbers(round_counter)
        }
        
    });
    
    button2.addEventListener("click", e=> {
        start_vs_animation()


        round_counter++
        console.log(round_counter)
        if(round_counter-1 == nameList.length - 2 || round_counter-1 == nameList.length-1){
            console.log("GEPUSHED")
            topdrie.push(name1.innerText)
        }
        console.log(topdrie)

        

        let current_name = name1.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        let winner = determineWinner()
        if(winner != false){
            console.log(winner + " heeft gewonnen!")
            console.log(topdrie[1])
            console.log(topdrie[0])
            body.innerHTML = `
            <style>
            p{
                color: white;
            }
            .winner-container{
                text-align: center;
                margin-top: 40px;
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
            </style>
        <div class="winner-container">
            <p id="winner">${winner}</p>
            <div class="winner-inner">
                <div class="winner-left-container">
                    <img id="cup-img" src="winner.gif">
                </div>
                <div class="winner-right-container">
                    <iframe id="winner-video2" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(winner)]}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    
        <div class="second-container">
            <div id="second-inner">
                <div id="first">
                    <div class="places-text second_place_text">2</div>
                    <p>${nameList[nameList.indexOf(topdrie[1])]}</p>
                    <iframe id="video3" class="second_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(topdrie[1])]}" frameborder="0" allowfullscreen></iframe>
                </div>
                <div id="second">
                    <div class="places-text third_place_text">3</div>
                    <p>${nameList[nameList.indexOf(topdrie[0])]}</p>
                    <iframe id="video3" class="third_place_vid" width="420" height="315" src="https://www.youtube.com/embed/${urls[nameList.indexOf(topdrie[0])]}" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
            `
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

    while(random1 == random2 || overigeList[random1] == 0 || overigeList[random2] == 0){
        random1 = Math.floor((Math.random() * nameList.length))
        random2 = Math.floor((Math.random() * nameList.length))
    }

    return [random1, random2];
}

function determineWinner(){
    let gekozenCounter = 0
    for(let i = 0; i < overigeList.length; i++){
        
        if(overigeList[i] == 0){
            gekozenCounter++
        }
    }

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



function start_vs_animation() {
    let overlay = document.getElementById('overlay')
    overlay.classList.remove('vs_animation'); // reset animation
    void overlay.offsetWidth; // trigger reflow
    overlay.classList.add('vs_animation'); // start animation
  }







