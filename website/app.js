const api_key = 'cd06e8d66f42f857487e98edafbb36ca';
const owm = 'http://api.openweathermap.org/data/2.5/weather?';

let allData,all_Data,temp,zipcode,ccode,feeling,newDate;

//  ------------------ POST -------------------
const postData = async ( url = '', data = {})=>{
    console.log("first in postData");
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log("newData in POST is");
        console.log(newData);
        return newData;
    }
    catch(error) {
        console.log("error", error);
    }
};

//  ------------------ Get data & Post in server -------------------
const retrieveData = async (url='') =>{
    console.log("starting retrieveData function");
    const response = await fetch(url);
    try {
        console.log("start retrieveData try");
        all_Data = await response.json();
        temp = all_Data.main.temp;
        console.log("calling postData");
        postData('/add', {temp:temp, city:all_Data.name, feelings:feeling, date:newDate});
        console.log("finished calling postData");
    }
    catch(error) {
        console.log("error", error);
    }
};

//  ------------------ Update webpage -------------------
const updateUI = async () => {
    console.log("starting updateUI");
    
    const request = await fetch('/all');
    
    console.log("after fetch /all");
    
    try{
        allData = await request.json();
        
        console.log("allData in updateUI:");
        console.log(allData);
        
        document.getElementsByClassName('title')[0].innerHTML="";
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temp: ${allData.temp}`;
        document.getElementById('content').innerHTML = `Today feeling is <b>${allData.feelings}</b> in <em>${allData.city}</em>`;
        
        console.log("finishing updateUI");
    }catch(error){
        console.log("error", error);
    }
};

//  ------------------ Click Event Function -------------------
function generate_entry(){
    console.log("generate start");

    const d = new Date();
    newDate = `${d.getFullYear()}.${d.getMonth()+1}.${d.getDate()}`;
    zipcode = document.getElementById('zip').value;
    ccode = document.getElementById('cc').value;
    feeling = document.getElementById('feelings').value;
    
    //fetch data from weather site and convert to json and extract temprature info
    console.log("retrive");

    retrieveData(`${owm}zip=${zipcode},${ccode}&&units=metric&APPID=${api_key}`)
    .then(function(){
        console.log("starting this");
        
        updateUI()
    });
};

//  ------------------ Click Event Listener -------------------
console.log("start");

document.getElementById("generate").addEventListener("click",generate_entry);

