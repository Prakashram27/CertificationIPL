let playerDetail = document.getElementById("playerDetails")

let playerData = JSON.parse(window.localStorage.getItem('playerDetails'))
console.log(playerData)

function filtering(playerData) {
    if (playerData === undefined) {
        playerDetail.innerHTML = `<h1>Loading....</h1>`
    }
    else {
        for (let i = 0; i < playerData.length; i++) {
            playerDetail.innerHTML = `<div id="playerdetails"><img class="playerdetailsimage" src= ${playerData[i].playerImg} alt="">
    <div class="playerTeamDetails">
    <span class="details"><pre>playerName    :    ${playerData[i].playerName} </pre></span>
    <span class="details"><pre>From          :    ${playerData[i].playerTeam}</pre></span>
    <span class="details"><pre>price         :    ${playerData[i].price}</pre></span>
    <span class="details"><pre>isPlaying     :    ${playerData[i].isPlaying}</pre></span>
    <span class="details"><pre>description   :    ${playerData[i].description}</pre></span>
</div>
</div>`
        }
    }
}
filtering(playerData)