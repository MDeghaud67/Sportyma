const API_TOKEN = "cef20490d5ef157ad3c8a173cd9c30b3"

function getClubs() {
    const url = 'http://api.football-data.org/v2/soccerseasons/' + API_TOKEN + '&language=fr'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}