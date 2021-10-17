const baseURL = "https://pokeapi.co/api/v2/"

document.getElementById("search").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        getSearch();

        const searchValue = document.getElementById("search").value
        getInfo(searchValue);
        showImg(searchValue);
        getType(searchValue);
        getPoison(searchValue);
    }
});
    
function getSearch() {
    fetch(`${baseURL}pokemon?offset=0&limit=151`)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            let input = document.getElementById('search').value.toLowerCase();
            for (i = 0; i < data['results'].length; i++) {
                if (input == data['results'][i]['name']) {
                    matchName = input;
                    break;
                    } else {
                        let info = document.getElementById("info-container")
                        info.innerHTML = "Does not exist";

                        let type = document.getElementById("type")
                        type.innerHTML = "NO TYPE";

                        document.getElementById("image-container").src="https://53ez82p1xgbdzuy8ma1qotwh-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/Error.jpg";
                    }
            }    
        }) 
}

function getType(name) {
    let type = document.getElementById("type")
    console.log(name)
        fetch(`${baseURL}pokemon/${name}`)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            if (data == null) {
                type.innerHTML = "NO TYPE";
            } else {
                let poketype = data['types'][0]['type']['name'];
                type.innerHTML = poketype; 
            }
        })
}

function getPoison(name) {
    let poison = document.getElementById("poison")
    console.log(name)
        fetch(`${baseURL}pokemon/${name}`)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            if (data == null) {
                poison.innerHTML = "None";
            } else {
                let pokepoisoned = data['types'][1]['type']['name'];
                poison.innerHTML = pokepoisoned; 
            }
        })
}

function showImg(name) {
    let info = document.getElementById("image-container")
        
        fetch(`${baseURL}pokemon/${name}`)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data == null) {
                    info.innerText = "Illegal input";
                } else {
                    let imgURL = data['sprites']['front_default'];
                    document.getElementById("image-container").src=imgURL;
                }
            })

}

const infoBtn = document.getElementById("info")
infoBtn.addEventListener("click", (e) => {
    const searchValue = document.getElementById("search").value
    getInfo(searchValue);
    showImg(searchValue);
})

function getInfo(name) {
    let info = document.getElementById("info-container")
    console.log(name)
        fetch(`${baseURL}pokemon/${name}`)
        .then((res) => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            if (data == null) {
                info.innerText = "Illegal input";
            } else {
                let height = data.height;
                let weight = data.weight;
                let hp = data['stats'][0]['base_stat'];
                let attack = data['stats'][1]['base_stat'];
                let defense = data['stats'][2]['base_stat'];
                let specialAttack = data['stats'][3]['base_stat'];
                let specialDefense = data['stats'][4]['base_stat'];
                let speed = data['stats'][5]['base_stat'];

                info.innerHTML = "height: " + height + "<br>" + "weight: " + weight + "<br>" +
                                + "hp: " + hp + "<br>" + "atk: " + attack + "<br>" + "def: " + defense
                                + "<br>" + "sp.atk: " + specialAttack + "<br>" + "sp.def: " + specialDefense
                                + "<br>" + "speed: " + speed; 
                }
            })
        }
    
/*function getMoves(name) {
    fetch(`${baseURL}/move/{name}`)
    .then((res) => {
        return res.json()
    })
    .then(data => {
        if (data == null) {
            $("#demo").append("Illegal input");
        } else {

        }
    })
}*/

const movesBtn = document.getElementById("moves")
    movesBtn.addEventListener("click", (e) => {
        const searchValue = document.getElementById("search").value
        console.log(`${baseURL}pokemon/${searchValue}`)
        getMoves(searchValue);
        function getMoves(name) {
            fetch(`${baseURL}pokemon/${name}`)
                .then((res) => {
                    return res.json()
                })
                .then(data => {
                    if (data == null) {
                        info.innerText = "Invalid pokemon";
                    } else {
                        data.moves.forEach(moveObj => document.getElementById("info-container").innerHTML += ("<li>" + moveObj.move.name + "</li>"));
                    }
                })
        }

const locationBtn = document.getElementById("locations")
locationBtn.addEventListener("click", (e) => {
    const searchValue = document.getElementById("search").value
    getLocation(searchValue);
    showImg(searchValue);
})

function getLocation(name) {
    let location = document.getElementById("info-container")
    console.log(name)
        fetch(`${baseURL}pokemon/${name}/encounters`)
            .then((res) => {
                return res.json()
            })
            .then(data => {
                console.log(data);
                //if (data[0] == null) {
                if (data == null) {
                    info.innerHTML = "CANNOT BE CAUGHT IN WILD";
                } else {
                    data.forEach(locationObj => document.getElementById("info-container").innerHTML += ("<li>" + locationObj.location_area.name + "</li>"));
                    //location.innerHTML = "The pokemon can be found in " + area;
                }
                })
            }
        })