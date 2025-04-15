import { useEffect, useState } from "react";

const Card = ({ name, flag }) => {
return(
    <div
    
    style={{
    
    display:"flex",
    
    flexDirection: "column",
    
    gap:"4px",
    
    justifyContent: "center",
    
    alignItems: "center",
    
    height:"200px",
    
    width:"200px",
    
    border: "0.5px solid black",
    
    borderRadius: "5px",
    
    padding:"10px",
    
    textAlign: "center",
    
    }}
    >
    

<img

src={flag}

alt={'Flag of ${name}'}

style={{

width: "100px",

height: "100px",

}}

/>

<h2>{name}</h2>

</div>

);

};
    
    
    

    
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
    



    export default function Countries() {

        const [countries, setCountries] = useState([]);
        
        useEffect(() => {
        
        const fetchData = async ()=> {
        
        try {
        
        const res= await fetch(API_ENDPOINT);
        
        const jsonRes = await res.json();
        
        setCountries(jsonRes);
        
        } catch (error){
        
        console.error("Error fetching data: " + error);
        
    }
        
        };
    
        fetchData();
        }, []);
        
        return (
        
        <div
        
        style={{
        
        display: "flex",
        
        flexWrap: "wrap",
        
        gap: "10px",
        
        }}
        >
        
        {countries.map(({ name, flag, abbr}) => ( <Card name={name} flag={flag} key={abbr} />
        
        ))}
        
        </div>
        
        );
    }
