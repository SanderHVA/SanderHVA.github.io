let name1 = document.getElementById("song_title1")
let name2 = document.getElementById("song_title2")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let body = document.querySelector('body')
let video1 = document.getElementById("video1")
let video2 = document.getElementById("video2")
let singer1 = document.getElementById("singer1")
let singer2 = document.getElementById("singer2")

let youtube_prefix = "https://www.youtube.com/embed/"


let nameList = [
    "All I want for christmas is You", 
    "Last Christmas", 
    "Santa Tell me", 
    "Rockin' Around The Christmas Tree", 
    // "It's Beginning To Look A Lot Like Christmas",
    // "Jingle Bell Rock",
    // "It's the Most Wonderful Time of the Year",
    // "Let it snow!",
    // "Underneath the Tree",
    // "Sleigh Ride",
    // "Feliz Navidad",
    // "snowman",
    // "Holly Jolly Christmas",
    // "Mistletoe",
    // "Wonderful Christmastime",
    // "Santa Baby",
    // "Do they know it's christmas",
    // "Stevens - Merry Christmas Everyone",
    // "Happy Xmas",
    // "Let It Snow!",
    // "Driving Home For Christmas",
    // "Thank God It's Christmas",
    // "Have Yourself A Merry Little Christmas",
    // "Baby It's Cold Outside",
    // "My Only Wish",
    // "You Make It Feel Like Christmas",
    // "Jingle Bell Rock",
    // "Santa Claus Is Comin' to Town",
    // "Step Into Christmas",
    // "What Christmas Means To Me",
    // "White Christmas",
    // "Christmas Lights"
]
// yXQViqx6GMY - Mariah Carey - All I want for christmas is You
// E8gmARGvPlI - Wham! - Last Christmas
// nlR0MkrRklg - Ariana Grande - Santa Tell me
// 1qYz7rfgLWE - Brenda Lee - Rockin' Around The Christmas Tree
// QJ5DOWPGxwg - Michael Bublé - It's Beginning To Look A Lot Like Christmas
// Gqwk7uR1BI8 - Bobby Helms - Jingle Bell Rock
// AN_R4pR1hck - Andy Williams - It's the Most Wonderful Time of the Year 
// Rnil5LyK_B0 - Dean Martin - Let it snow!
// YfF10ow4YEo - Kelly Clarkson - Underneath the Tree
// XZTzai1H9DM - The Ronettes - Sleigh Ride
// N8NcQzMQN_U - José Feliciano - Feliz Navidad
// gset79KMmt0 - Sia - snowman
// Dkq3LD-4pmM - Michael Bublé - Holly Jolly Christmas
// LUjn3RpkcKY - Justin Bieber - Mistletoe
// 94Ye-3C1FC8 - Paul McCartney - Wonderful Christmastime
// HTCFi4l3nkY - Eartha Kitt - Santa Baby
// j3fSknbR7Y4 - Band Aid - Do they know it's christmas
// N-PyWfVkjZc - Shakin' Stevens - Merry Christmas Everyone
// flA5ndOyZbI - John Lennon - Happy Xmas
// sE3uRRFVsmc - Frank Sinatra - Let It Snow!
// DDt3u2Ev1cI - Chris Rea ~ Driving Home For Christmas
// qw2TD91Nytg - Queen - Thank God It's Christmas
// rnEqv8WcVq8 - Sam Smith - Have Yourself A Merry Little Christmas
// 6bbuBubZ1yE - Idina Menzel & Michael Bublé - Baby It's Cold Outside
// _MzumcY3lpk - Britney Spears - My Only Wish
// 3ZT9_H4-hbM - Gwen Stefani - You Make It Feel Like Christmas
// 5vyMuxxLsD0 - Daryl Hall & John Oates - Jingle Bell Rock
// -
// OsyxFkYZ-aU - Mariah Carey - Santa Claus Is Comin' to Town
// IbRtGMm96F8 - Elton John - Step Into Christmas
// wtgGBgpNcIo - Stevie Wonder - What Christmas Means To Me
// v5ryZdpEHqM - Bing Crosby - White Christmas
// z1rYmzQ8C9Q - Coldplay - Christmas Lights


let overigeList = nameList

let urls = [
    "yXQViqx6GMY",
    "E8gmARGvPlI",
    "nlR0MkrRklg",
    "1qYz7rfgLWE",
]

let singers = [
    "Mariah Carey",
    "Wham!",
    "Ariana Grande",
    "Brenda Lee"
]


function main(){
    
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
    
    button1.addEventListener("click", e=> {

        



        let current_name = name2.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        let winner = determineWinner()
        if(winner != false){
            console.log(winner + " heeft gewonnen!")
        }else{
            renderNewNumbers()
        }
        
    });
    
    button2.addEventListener("click", e=> {
        let current_name = name1.innerText
        // current_name = parseInt(current_name);
        let current_index = overigeList.indexOf(current_name)
        overigeList[current_index] = 0
        console.log(overigeList)

        let winner = determineWinner()
        if(winner != false){
            console.log(winner + " heeft gewonnen!")
        }else{
            renderNewNumbers()
        }
        
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    main()
  })



function renderNewNumbers(){
    
    
    [left_item_index, right_item_index] = twoRandomNumbers();

    //random eerste 2 namen
    name1.innerText = nameList[left_item_index]
    name2.innerText = nameList[right_item_index]

    video1.src = youtube_prefix + urls[left_item_index]
    video2.src = youtube_prefix + urls[right_item_index]

    //singers
    singer1.innerText = singers[left_item_index]
    singer2.innerText = singers[right_item_index]
 
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
                return overigeList[i];
            }
        }
    }else{
        return false;
    }
    
    
}









