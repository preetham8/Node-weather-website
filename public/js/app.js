// const forecast = require("../../src/utils/forecast")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const  messageOne = document.querySelector('#message-1')
const  messageTwo = document.querySelector('#message-2')

let allData

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=!' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
               messageOne.textContent = data.error
             } else {
                    allData = data.allData
                    data.allData.forEach( (location) => {
                    const para = document.createElement("a");
                    const node = document.createTextNode(location.place_name);
                    para.setAttribute("class", "locations");
                    para.setAtribute("id", location.place_name)
                    para.appendChild(node);

                    const element = document.getElementById("newData");
                    element.appendChild(para);
                    })
             }
        })
    })
})

let allLocations = document.getElementsByClassName("locations")
allLocations.addEventListener("click", () => {
        let latitude = allData[this.id].center[1]
        let longitude = allData[this.id].center[0]

        fetch('/forecast?address=!' + location).then((response) => {
            response.json().then((data) => {
                if(data.error) {
                   messageOne.textContent = data.error
                 } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                 }
            })
        })
} )