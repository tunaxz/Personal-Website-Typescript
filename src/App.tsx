import React from "react";
import useSWR from "swr";
import config from "./config/config.json";
import './style.css'

function App() {

  const dcrofli = () => {
    return fetch(`https://api.lanyard.rest/v1/users/${config.discord}`).then((res) =>
      res.json()
    );
  };
const [user, setUser] = React.useState(null)
const { data } = useSWR(config.discord, dcrofli);


React.useEffect(() => {
setInterval(async () => {
setUser(data)
}, 5000)
})
let avatar = `https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.gif?size=1024`

const status = data?.data.discord_status;
let durum = data?.data.activities

console.log(durum)
let durmum;
if (status !== "offline") {
   if(data?.data.activities[0]) {
if(data?.data.activities[0].id !== "custom"){

if(data?.data.activities[0].name == "Visual Studio Code"){
  durmum =  <div className="box ml-5 activityBox has-text-white center" style={{textAlign: "center", background: "#2D91D5"}}> <h1 style={{color: "white"}} className="text-lg font-semibold">
  <img style={{width: "100px", textAlign: 'center',borderRadius: "20%"}} src={`https://cdn.discordapp.com/app-assets/${data?.data.activities[0].application_id}/${data?.data.activities[0].assets.large_image}.png`}></img>
 <span> {data?.data.activities[0].assets.small_text} <h4 style={{ marginRight: "40px", marginTop: "-20px", fontSize: "15px"}}>{data?.data.activities[0].details} </h4><h4 style={{ marginRight: "70px", marginTop: "-00px", fontSize: "15px"}}>🕐{Math.floor((Date.now() - data?.data.activities[0].timestamps.start) / 60000) === 1 ? Math.floor((Date.now() - data?.data.activities[0].timestamps.start) / 60000) + " minute" : Math.floor((Date.now() - data?.data.activities[0].timestamps.start) / 60000) + " minutes"}</h4> <span> </span>  </span></h1></div>
  }

 
  
    
}
if(data?.data.activities[0].name == "Spotify"){
durmum =   <div className="box ml-5 activityBox has-text-white center" style={{textAlign: "center", background: "#1cb050"}}> <h1 style={{color: "white"}} className=""><div>
<img style={{width: "100px", textAlign: 'center',borderRadius: "20%"}} src={`https://i.scdn.co/image/${data?.data.activities[0].assets.large_image.split(':')[1]}`}></img>
&nbsp; <span style={{fontSize: '10px'}}>{data?.data.activities[0].assets.small_text}</span>  <span>{data?.data.activities[0].details}</span> </div></h1> </div>
}
   }

   if(data?.data.activities[1]) {
    if(data?.data.activities[1].id !== "custom"){
    
    if(data?.data.activities[1].name == "Visual Studio Code"){
      durmum =  <div className="pulse-status-sss message is-danger message-body box-31  center" style={{ width: "500px",borderColor: "#920823", textAlign: "center"}}> <h1 style={{color: "white"}} className="text-lg font-semibold">
      <img style={{width: "100px", textAlign: 'center',borderRadius: "20%"}} src={`https://cdn.discordapp.com/app-assets/${data?.data.activities[1].application_id}/${data?.data.activities[1].assets.large_image}.png`}></img>
     <span> {data?.data.activities[1].assets.small_text} <h4 style={{ marginRight: "40px", marginTop: "-20px", fontSize: "15px"}}>{data?.data.activities[1].details} </h4><h4 style={{ marginRight: "70px", marginTop: "-00px", fontSize: "15px"}}>🕐{Math.floor((Date.now() - data?.data.activities[1].timestamps.start) / 60000) === 1 ? Math.floor((Date.now() - data?.data.activities[1].timestamps.start) / 60000) + " minute" : Math.floor((Date.now() - data?.data.activities[1].timestamps.start) / 60000) + " minutes"}</h4> <span> </span>  </span></h1></div>
      }
    
     
      
        
    }
    if(data?.data.activities[1].name == "Spotify"){
    durmum =   <div className="box ml-5 activityBox has-text-white center" style={{textAlign: "center", background: "#1cb050"}}> <h1 style={{color: "white"}} className=""><div>
    <img style={{width: "100px", textAlign: 'center',borderRadius: "20%"}} src={`https://i.scdn.co/image/${data?.data.activities[0].assets.large_image.split(':')[1]}`}></img>
    &nbsp; <span style={{fontSize: '10px'}}>{data?.data.activities[0].assets.small_text}</span>  <span>{data?.data.activities[0].details}</span> </div></h1> </div>
    }
       }
}
let color;

if (status === "dnd") {
  color = "redbg";
}
if (status === "online") {
  color = "yesilbg";
}
 if (status === "idle") {
  color = "saribg";
} 
 if (status === "offline") {
  color = "graybg";
}

var loading;
if (!data) {
  loading = <img style={{width: "70px"}} src="http://www.camlicauniverse.com/template/img/loading.gif"/>;
} else {
  loading =  <h1 style={{color: "white"}} className="text-lg font-semibold">
  <img className={`pulse-status-${status}`} style={{width: "200px", textAlign: 'center',borderRadius: "20%"}} src={`${avatar}`}></img><br></br><br></br>
  {data && data?.data.discord_user.username}#{data && data?.data.discord_user.discriminator} <span> </span>
  <span style={{fontStyle: "bold", borderRadius: ".375rem"}} className={`${color}`}>●</span>
  </h1>;
}

  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <body style={{background: "#1B202C"}}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link
    href="https://pro.fontawesome.com/releases/v5.13.1/css/all.css"
    rel="stylesheet"
    />

<nav style={{ background: "#1B202C" }} className="navbar navbar navbar-fixed-top>
    <div className="container-fluid>
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
        <a className="navbar-brand" style={{color: "white"}} href="/">Roffly</a>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
    
       
      </div>
    </nav>
    <br></br>
    <br></br>
    <br></br>
  
    
    <div style={{ textAlign: 'center' }} className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <p>
    {loading} 
      </p>
      
  </div>
  <figcaption className="font-medium">
        <div style={{textAlign: 'center',color: "darkgray"}} className="text-cyan-600">
        {config.whoamı}
        </div>
     
      </figcaption>
      <div style={{textAlign: 'center'}}>
      <a href={`${config.socials[0].href}`}><i style={{ fontSize: "20px", color: "white"}} className={`${config.socials[0].icon}`}>&nbsp;</i></a>
       <a href={`${config.socials[1].href}`}><i style={{ fontSize: "20px", color: "white"}} className={`${config.socials[1].icon}`}>&nbsp;</i></a>
       <a href={`${config.socials[2].href}`}><i style={{ fontSize: "20px", color: "white"}} className={`${config.socials[2].icon}`}></i></a>
       </div>
       <div style={{textAlign: 'center', color: "gray"}} className="text-gray-500">
       <br/>{durmum} 
        </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <h5 style={{textAlign: "center", color: "white"}}>This Website Coding By Roffly</h5>
  </body>
  </div>
  );
}

export default App;
