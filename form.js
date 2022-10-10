
function enterTeam() {
    let nameLable = document.getElementById("nameLable").value
    let teamName = document.getElementById("teamName").value
    let wonCount = document.getElementById("wonCount").value
    let addData = JSON.parse(localStorage.getItem("teamDetails"))
    let add = { teamFullName: null, teamIcon: null, WonCount: null }
    add = { teamFullName: nameLable, teamIcon: teamName, WonCount: wonCount }
    addData.push(add)
    localStorage.setItem("teamDetails", JSON.stringify(addData))
}

function enterPlayer() {
    let nameLable = document.getElementById("nameLable").value
    let teamName = document.getElementById("teamName").value
    let wonCount = document.getElementById("wonCount").value
    let addData = JSON.parse(localStorage.getItem("playerArray"))
    let add = { playerName: null, playerImg: null, playerTeam: null }
    add = { playerName: nameLable, playerImg: teamName, playerTeam: wonCount }
    addData.push(add)
    localStorage.setItem("playerArray", JSON.stringify(addData))
}

