
    function sleep(milisec) {
        return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
        })
        }


        (
    
    async function() {
    var link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'https://fonts.googleapis.com/css?family=Poppins:400italic,400,300,700');
    document.head.appendChild(link);
    var link2 = document.createElement('link');
    link2.setAttribute('rel', 'stylesheet');
    link2.setAttribute('type', 'text/css');
    link2.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
    link2.setAttribute('crossorigin', 'anonymous');
    link2.setAttribute('referrerpolicy', 'no-referrer');
    link2.setAttribute('integrity', 'sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==');
    document.head.appendChild(link2);
    var div = document.createElement('div');
    var fauna = document.createElement('script');
    fauna.setAttribute('src','https://cdn.jsdelivr.net/npm/faunadb@latest/dist/faunadb.js');
    document.head.appendChild(fauna);
    let game = JSON.parse(localStorage.getItem("gameState"))
    let stats = JSON.parse(localStorage.getItem("statistics"))
    let input = ""
    let reviewinput = ""
    let scrollbar = ""
    let configinput = ""
    if(document.getElementById("WordleExtension") != null)
    {
        document.getElementById("WordleExtension").remove()
    }
    if(localStorage.getItem("darkTheme") == "false" || localStorage.getItem("darkTheme") == null)
    {
        div.style.color = "black"
        div.style.backgroundColor = "#d3d6da"
        input = "<input id=\"value\" style=\"border:none; border-radius:7px; color:black; background-color:#babdc2; height:19px; padding:3px width:100%; font-family:'Poppins'\" placeholder=\"Enter a number...\" type=number>"
        configinput = "<input id=\"pixelvalue\" style=\"border:none; border-radius:7px; color:black; background-color:#babdc2; height:19px; padding:3px width:100%; font-family:'Poppins'\" placeholder=\"Enter a valid size...\" type=text>"
        reviewinput = "<label id=\"starcount\" style=\"margin-bottom:7px\">0 Stars</label><br><input class=\"slider\" oninput=\"starcount.innerHTML = this.value + ' Stars';\" style=\"margin-bottom:10px\" type=\"range\" min=\"0\" max=\"5\" value=\"0\" id=\"stars\"><br><input id=\"reviewname\" style=\"border:none; border-radius:7px; color:black; background-color:#babdc2; height:19px; padding:3px; margin-bottom:10px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a username...\" type=text><br><textarea id=\"reviewvalue\" style=\"border:none; border-radius:7px; color:black; background-color:#babdc2; height:40px; margin-bottom:10px; resize:vertical; padding:3px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a review...\"></textarea>"
        scrollbar = `
        ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            border-radius: 10px;
          }
           
          ::-webkit-scrollbar-thumb {
            background: #babdc2; 
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #a4a7ab; 
          }

          .slider {
            -webkit-appearance: none;
            width: 100%;
            height: 15px;
            border-radius:10px;
            background: #babdc2;
            outline: none;
          }
          
          
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius:50%;
            background: #538d4e;
            cursor: pointer;
          }
          
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
            border-radius:50%;
            background: #538d4e;
            cursor: pointer;
          }


        `
    }
    else{
        div.style.color = "white"
        div.style.backgroundColor = "#272729"
        input = "<input id=\"value\" style=\"border:none; border-radius:7px; color:white; background-color:#1f1f21; height:19px; padding:3px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a number...\" type=number>"
        configinput = "<input id=\"pixelvalue\" style=\"border:none; border-radius:7px; color:white; background-color:#1f1f21; height:19px; padding:3px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a valid size...\" type=text>"
        reviewinput = "<label id=\"starcount\" style=\"margin-bottom:7px\">0 Stars</label><br><input class=\"slider\" oninput=\"starcount.innerHTML = this.value + ' Stars';\" style=\"margin-bottom:10px\" type=\"range\" min=\"0\" max=\"5\" value=\"0\" id=\"stars\"><br><input id=\"reviewname\" style=\"border:none; border-radius:7px; color:white; background-color:#1f1f21; height:19px; padding:3px; margin-bottom:10px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a username...\" type=text><br><textarea id=\"reviewvalue\" style=\"border:none; border-radius:7px; color:white; background-color:#1f1f21; height:40px; margin-bottom:10px; resize:vertical; padding:3px; width:100%; font-family:'Poppins'\" placeholder=\"Enter a review...\"></textarea>"
        scrollbar = `
        ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            border-radius: 10px;
          }
           
          ::-webkit-scrollbar-thumb {
            background: #333333; 
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #404040; 
          }

          
.slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius:10px;
    background: #1f1f21;
    outline: none;
  }
  
  
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius:50%;
    background: #538d4e;
    cursor: pointer;
  }
  
  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius:50%;
    background: #538d4e;
    cursor: pointer;
  }

        `
    }
    var style = document.createElement("STYLE");
    var css = document.createTextNode(scrollbar);
    style.appendChild(css);
    document.head.appendChild(style);
    var x = document.createElement("SCRIPT");
    var t = document.createTextNode(`

    function changeGamesWon(){
        let stats = JSON.parse(localStorage.getItem("statistics"))
        stats.gamesWon = parseInt(document.getElementById("value").value)
        console.log(stats)
        localStorage.setItem("statistics", JSON.stringify(stats))

    }

    function changeGamesPlayed(){
        let stats = JSON.parse(localStorage.getItem("statistics"))
        stats.gamesPlayed = parseInt(document.getElementById("value").value)
        console.log(stats)
        localStorage.setItem("statistics", JSON.stringify(stats))

    }

    function changeCurrentStreak(){
        let stats = JSON.parse(localStorage.getItem("statistics"))
        if(document.getElementById("value").value > stats.maxStreak)
        {
            stats.currentStreak = parseInt(document.getElementById("value").value)
            stats.maxStreak = parseInt(document.getElementById("value").value)
        }
        else
        {
        stats.currentStreak = parseInt(document.getElementById("value").value)
        }
        console.log(stats)
        localStorage.setItem("statistics", JSON.stringify(stats))

    }
    
    function sleep(milisec) {
        return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec);
        })
        }


    function sendReview(){
    
        var faunadb = window.faunadb
        var q = faunadb.query
        var client = new faunadb.Client({
          secret: 'fnAEdPfFkzAAwCudIvti7Ft2vkx80R-rkdKGc6aA',
          domain: 'db.eu.fauna.com',
          scheme: 'https',
        })
        
  let date = new Date();
client.query(

    q.Create(
      q.Collection('reviews'),
      { data: { review: document.getElementById("reviewvalue").value, reviewname: document.getElementById("reviewname").value, stars: document.getElementById("stars").value, time: date.toUTCString()} },
    )
    )
    .then(async function(ret){

        document.getElementById("sendReview").innerHTML = "Review Sent!"
        await sleep(1500)
        document.getElementById("sendReview").innerHTML = "Send Review!"
    
    });  


    }

    function changeWidth(){
        document.getElementById("WordleExtension").style.width = document.getElementById("pixelvalue").value
    }

    function changeHeight(){
        document.getElementById("WordleExtension").style.height = document.getElementById("pixelvalue").value
    }

    function getReview(){

        var faunadb = window.faunadb
        var q = faunadb.query
        var client = new faunadb.Client({
          secret: 'fnAEdPfFkzAAwCudIvti7Ft2vkx80R-rkdKGc6aA',
          domain: 'db.eu.fauna.com',
          scheme: 'https',
        })

        client
        .query(
          q.Map(
            q.Paginate(q.Documents(q.Collection("reviews")), { size: 1000 }),
            q.Lambda("X", q.Get(q.Var("X")))
          )
        )
        .then(function (x) {
            console.log(x)
            let reviews = ""
            x.data.reverse()
            if(x.data.length < 5)
            {
                let stars = ""
                for (let i = 0; i < x.data.length; i++) {

                    if(x.data[i].data.stars == 0)
            {
                stars = "<i style=\'color:#949494;\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 1)
            {
                stars =  "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 2)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }             
            if(x.data[i].data.stars == 3)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 4)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 5)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i>"
            }

            reviews = reviews + "<label style='font-size:14px'>Review from <b>" + x.data[i].data.reviewname + "</b></label><br>" + stars + "<br><label style='margin-top:20px; margin-bottom:20px'>" + x.data[i].data.review + "</label><br><label style='font-size:13px;'><i>" + x.data[i].data.time + "</i></label><br><br>"


                }
            }
            else{

                let stars = ""
                for (let i = 0; i < 5; i++) {

                    if(x.data[i].data.stars == 0)
            {
                stars = "<i style=\'color:#949494;\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 1)
            {
                stars =  "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 2)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }             
            if(x.data[i].data.stars == 3)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 4)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#949494; margin-left:4px\' class='fas fa-star'></i>"
            }
            if(x.data[i].data.stars == 5)
            {
                stars = "<i style=\'color:#FFD700;\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i><i style=\'color:#FFD700; margin-left:4px\' class='fas fa-star'></i>"
            }

            reviews = reviews + "<label style='font-size:14px'>Review from <b>" + x.data[i].data.reviewname + "</b></label><br>" + stars + "<br><label style='margin-top:20px; margin-bottom:20px'>" + x.data[i].data.review + "</label><br><label style='font-size:13px;'><i>" + x.data[i].data.time + "</i></label><br><br>"

            }
        }




            document.getElementById("review").innerHTML = reviews
            
            

        });

    }
    
    
    `);
    x.appendChild(t);
    document.body.appendChild(x);
    let statcontent = ""
    let statmodding = ""
    if(stats == null)
    {
        statcontent = "No games have been played yet!"
        statmodding = "No stats to modify!"
    }
    else{
        statcontent = "Games Played: <b>" + stats.gamesPlayed + "</b><br>Games Won: <b>" + stats.gamesWon + "</b><br>Win Percentage: <b>" + (stats.gamesWon / stats.gamesPlayed) * 100 + "%</b><br>Current Winstreak: <b>" + stats.currentStreak + "</b><br>Highest Winstreak: <b>" + stats.maxStreak + "</b><br>Average Guesses: <b>" + stats.averageGuesses + "</b><br>Current Game Status: <b>" + game.gameStatus + "</b>"
        statmodding = "<br>" + input + "<br><br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" onclick=\"changeGamesWon()\">Set Games Won</button><br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" onclick=\"changeGamesPlayed()\">Set Games Played</button><br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" onclick=\"changeCurrentStreak()\">Set Winstreak</button><br>"
    }
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.left = 0;
    div.style.padding = "20px"
    div.style.width = "17%"
    div.style.borderRadius = "10px"
    div.style.marginLeft = "1%"
    div.style.marginTop = "1%"
    div.style.fontFamily = "Poppins"
    div.style.overflowWrap = "break-word"
    div.style.height = "75%"
    div.style.overflowY = "scroll"
    div.id = "WordleExtension"
	document.body.appendChild(div)
    let label = document.createElement("label")
    label.innerHTML = "<span style=\"margin-left: 15px; color: white; font-weight: bold; float: right; font-size: 22px; line-height: 20px; cursor: pointer;\" onclick=\"document.getElementById('WordleExtension').style.display='none';\">&times;</span><div style=\"display:flex; align-items:center\"><img style=\"vertical-align:center; margin-right:10px\" src=\"https://www.powerlanguage.co.uk/wordle/images/wordle_logo_32x32.png\"><label style=\"font-size:27px;\"><b>WordleHacks</b></label></div><label style=\"font-size:14px\">Made by absq#4348</label><hr><br><label style=\"font-size:20px;\"><b><u>Today's Word</u></b></label><br>" + game.solution + "<br><br><hr><br><label style=\"font-size:20px;\"><b><u>Your Stats</u></b></label><br>" + statcontent + "<br><br><hr><br><label style=\"font-size:20px;\"><b><u>Stat Modder</u></b></label><br>" + statmodding + "<br><br><hr><br><label style=\"font-size:20px;\"><b><u>Config</u></b></label><br><br>" + configinput + "<br><br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" id=\"sendReview\" onclick=\"changeWidth()\">Resize Width</button><br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" id=\"sendReview\" onclick=\"changeHeight()\">Resize Height</button>" + "<br><br><hr><br><label style=\"font-size:20px;\"><b><u>Review</u></b></label><br><br>" + reviewinput + "<br><button style=\"border:none; border-radius:5px; cursor:pointer; padding:5px; font-size:14px; background-color: #538d4e; color:white; font-family:'Poppins'; margin-bottom:7px\" id=\"sendReview\" onclick=\"sendReview()\">Send Review!</button><br><br><hr><br><label style=\"font-size:20px;\"><b><u>Recent Reviews</u></b></label><br><br><label id=\"review\"></label><img style=\"display:none\" src='a' onerror='getReview()'>"
    document.getElementById("WordleExtension").appendChild(label)
    document.querySelector("body > game-app").shadowRoot.querySelector("#game > header > div.title").innerHTML = "<font color=\"#4931e0\"><u><b>INJECTED!</b></u></font>"
    await sleep(1500)
    document.querySelector("body > game-app").shadowRoot.querySelector("#game > header > div.title").innerHTML = "WORDLE"
    
    
 
})();
