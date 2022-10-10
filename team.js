let teamPage = document.getElementById("main")
let teamDetail = document.getElementById("teamDetail")
let teamPlayerdetail = document.getElementById("teamPlayerdetail")

let teamDetails = JSON.parse(window.localStorage.getItem('teamDetails'))
let teamPlayers = JSON.parse(window.localStorage.getItem('teamPlayers'))
let playerData = JSON.parse(window.localStorage.getItem('playerArray'))
console.log(teamDetail)

function getPlayer(event) {
    console.log(event)
    if(localStorage.getItem("playerDetails") !== undefined){
        localStorage.removeItem("playerDetails")
    }
    let filterPlayerData;
    let filter = playerData.filter((player) => player.id === event)
    filterPlayerData = filter
    localStorage.setItem("playerDetails", JSON.stringify(filterPlayerData))
}


function teamFilter(teamDetails, teamPlayers) {
    if (teamDetails === undefined) {
        teamPlayerdetail.innerHTML = `<h1>Loading....</h1>`
    }
    else {
        for (let i = 0; i < teamDetails.length; i++) {
            teamPage.innerHTML =
                `<div class="teamview">
        <table>
            <tr>
                <td>Team name</td>
                <td>${teamDetails[i].teamFullName} </td>
            </tr>
            <tr>
                <td>Team icon</td>
                <td> <img src=${teamDetails[i].teamIcon} class="team-page-icon" alt=""/></td>
            </tr>
            <tr>
                <td>Player count</td>
                <td> ${teamDetails[i].teamFullName}</td>
            </tr>
            <tr>
                <td>Won Count</td>
                <td>${teamDetails[i].WonCount}</td>
            </tr>
        </table>
    </div>`
        }
        for (let i = 0; i < teamPlayers.length; i++) {
            teamPlayerdetail.innerHTML += `<div class="playercard" onclick="getPlayer(${teamPlayers[i].id})">
            <img class="playerimage" src=${teamPlayers[i].playerImg} alt=""><br>
            <p class="playername">${teamPlayers[i].playerName}</p>
            <p class="price">Auction Price : ${teamPlayers[i].price}</p>
            <p class="description">${teamPlayers[i].description}</p>
            <p class="playingTeam">${teamPlayers[i].playerTeam}</p>
        </div>`
        }
    }
}
teamFilter(teamDetails, teamPlayers)