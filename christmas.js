let name1 = document.getElementById("song_title1")
let name2 = document.getElementById("song_title2")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let body = document.querySelector('body')
let video1 = document.getElementById("video1")
let video2 = document.getElementById("video2")

let youtube_prefix = "https://www.youtube.com/embed/"


let nameList = [
    "Mariah Carey - All I want for christmas is You", 
    "Wham! - Last Christmas", "Ariana Grande - Santa Tell me", 
    "Brenda Lee - Rockin' Around The Christmas Tree", 
    "Michael Bublé - It's Beginning To Look A Lot Like Christmas"
]

let overigeList = nameList

let urls = [
    "yXQViqx6GMY",
    "E8gmARGvPlI",
    "nlR0MkrRklg",
    "1qYz7rfgLWE",
]


function main(){
    
    let [left_item_index, right_item_index] = twoRandomNumbers();

    //random eerste 2 namen
    name1.innerText = nameList[left_item_index]
    name2.innerText = nameList[right_item_index]

    video1.src = youtube_prefix + urls[left_item_index]
    video2.src = youtube_prefix + urls[right_item_index]
    
    
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









