
document.querySelector(".yutiBatumi").classList.add("hidden")
document.querySelector(".yutiKobuleti").classList.add("hidden")
document.querySelector(".yutiKutaisi").classList.add("hidden") 
document.querySelector(".yutiSataflia").classList.add("hidden") 
document.querySelector(".yutiMadrid").classList.add("hidden") 
document.querySelector(".yutiMilan").classList.add("hidden") 
document.querySelector(".yutiRome").classList.add("hidden") 
document.querySelector(".yutiBarcelona").classList.add("hidden") 
document.querySelector(".yutiTbilisi").classList.add("hidden") 
document.querySelector(".else").classList.add("hidden") 
document.querySelector(".iss").oninput = function(){
    let val = this.value.trim();
    if(val === "Batumi"){
       
        
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiBatumi").classList.remove("hidden")
        document.querySelector(".xbatumi").onclick = function(){
            document.querySelector(".yutiBatumi").classList.add("hidden")}
            
}}

else if(val === "Kutaisi"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiKutaisi").classList.remove("hidden")
        document.querySelector(".xkutaisi").onclick = function(){
            document.querySelector(".yutiKutaisi").classList.add("hidden")}
    
}}
else if(val === "Kobuleti"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiKobuleti").classList.remove("hidden")
        document.querySelector(".xkobuleti").onclick = function(){
            document.querySelector(".yutiKobuleti").classList.add("hidden")}
    
}}
else if(val === "Sataplia"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiSataflia").classList.remove("hidden")
        document.querySelector(".xsataflia").onclick = function(){
            document.querySelector(".yutiSataflia").classList.add("hidden")}
    
}}
else if(val === "Madrid"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiMadrid").classList.remove("hidden")
        document.querySelector(".xmadrid").onclick = function(){
            document.querySelector(".yutimadrid").classList.add("hidden")}
}}
else if(val === "Barcelona"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiBarcelona").classList.remove("hidden")
        document.querySelector(".xbarcelona").onclick = function(){
            document.querySelector(".yutiBarcelona").classList.add("hidden")}
}}
else if(val === "Milan"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiMilan").classList.remove("hidden")
        document.querySelector(".xmilan").onclick = function(){
            document.querySelector(".yutiMilan").classList.add("hidden")}
}}
else if(val === "Rome"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiRome").classList.remove("hidden")
        document.querySelector(".xrome").onclick = function(){
            document.querySelector(".yutiRome").classList.add("hidden")}
                document.querySelector(".button").onclick = function(){
                    document.querySelector(".text").textContent === "wow"
            }
}}
else if(val === "Tbilisi"){
    document.querySelector(".button").onclick = function(){
        document.querySelector(".yutiTbilisi").classList.remove("hidden")
        document.querySelector(".xtbilisi").onclick = function(){
            document.querySelector(".yutiTbilisi").classList.add("hidden")}
}}
else{document.querySelector(".button").onclick = function(){
    document.querySelector(".else").classList.remove("hidden")
    document.querySelector(".xelse").onclick = function(){
        document.querySelector(".else").classList.add("hidden")}
}}
}

