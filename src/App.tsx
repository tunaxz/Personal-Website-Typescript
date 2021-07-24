import React from "react";
import useSWR from "swr";
import db from "quick.db";


function App() {
  const dcrofli = () => {
    return fetch(`https://api.lanyard.rest/v1/users/715576724674314360`).then((res) =>
      res.json()
    );
  };
const [user, setUser] = React.useState(null)
const { data } = useSWR("715576724674314360", dcrofli);

React.useEffect(() => {
setInterval(async () => {
setUser(data)
}, 5000)
})
let avatar = `https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.gif?size=1024`
if (!data) {
  return <p style={{textAlign: 'center', fontSize: "50px", color: "white"}}>Loading...</p>;
}
const status = data?.data.discord_status;
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
  return (
    <div>
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
        <h1 style={{color: "white"}} className="text-lg font-semibold">
        <img className={`pulse-status-${status}`} style={{width: "200px", textAlign: 'center',borderRadius: "20%"}} src={`${avatar}`}></img><br></br><br></br>
        {data && data?.data.discord_user.username}#{data && data?.data.discord_user.discriminator} <span> </span>
        <span style={{fontStyle: "bold", borderRadius: ".375rem"}} className={`${color}`}>●</span>
        </h1>
      </p>
      
  </div>
  <figcaption className="font-medium">
        <div style={{textAlign: 'center',color: "darkgray"}} className="text-cyan-600">
        Hi I'm Roffly, I'm Back-End Developer and Graphic Design
        </div>
        <div style={{textAlign: 'center', color: "gray"}} className="text-gray-500">
          <i className="fas fa-search-location"></i> Turkey/Mersin
        </div>
      </figcaption>
      <div style={{textAlign: 'center'}}>
      <a href="https://discord.com/users/715576724674314360"><i style={{ fontSize: "20px", color: "white"}} className="fab fa-discord">&nbsp;</i></a>
       <a href="https://github.com/Roffly"><i style={{ fontSize: "20px", color: "white"}} className="fab fa-github">&nbsp;</i></a>
       <a href="mailto:roffly00@gmail.com"><i style={{ fontSize: "20px", color: "white"}} className="fas fa-envelope-open-text"></i></a>
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
