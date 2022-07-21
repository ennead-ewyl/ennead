function getValue()
{
    username =document.getElementById("name").value
    email =document.getElementById("mail").value
    college =document.getElementById("college").value
    year =document.getElementById("year").value
    department =document.getElementById("department").value
    console.log([username,email,college,year,department])
    document.getElementById("un").innerHTML=username
    document.getElementById("em").innerHTML=email
    document.getElementById("clg").innerHTML=college
    document.getElementById("yr").innerHTML=year
    document.getElementById("dep").innerHTML=department
    
    
    
}