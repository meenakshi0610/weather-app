const btn = document.getElementById('default-button');
const cityname = document.getElementById('city');
const citytext = document.getElementById('citytxt');
const tempstatusv = document.getElementById('tempstatus');
const tempv = document.getElementById('temp');
const weatherimg = document.getElementById('weatherimg');


const getinfo = async (event) => {
    event.preventDefault();
    let cityvalue = cityname.value;
    if (cityvalue === "") {
        citytext.innerText = 'plz write the city name';
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&APPID=ce7deeb78ee533cb318e2ea8f8bc0277`
            const response = await fetch(url);
            const data = await response.json();
            const arr = [data];
            citytext.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
            tempv.innerText = arr[0].main.temp;
            tempstatusv.innerText = arr[0].weather[0].main;

            tempstatevalue = arr[0].weather[0].main;
            if (tempstatevalue == "Clear") {
                weatherimg.src = "";
            } else if (tempstatevalue == "Clouds") {
                weatherimg.src = "";
            } else if (tempstatevalue == "Rain") {
                weatherimg.src = "";
            }
        } catch {
            citytext.innerText = 'plz enter correct city name';
        }
    }
}

btn.addEventListener('click', getinfo);