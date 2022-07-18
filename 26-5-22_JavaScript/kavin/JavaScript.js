function getValue(){
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var dob = document.getElementById("dob").value;
    var bloodgroup = document.getElementById("bloodgroup").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var dep = document.getElementById("dep").value;
    var year = document.getElementById("year").value;
    var sem = document.getElementById("sem").value;
    console.log([name,rollno,dob,bloodgroup,phone,email,dep,year,sem]);
    document.getElementById("heading").innerHTML="Check whether the details entered by you is correct"
    document.getElementById("getName1").innerHTML="Name :";
    document.getElementById("getName").innerHTML=name;
    document.getElementById("getRollno1").innerHTML="Roll.No :";
    document.getElementById("getRollno").innerHTML=rollno;
    document.getElementById("getDob1").innerHTML="DOB :";
    document.getElementById("getDob").innerHTML=dob;
    document.getElementById("getBg1").innerHTML="Blood Group :";
    document.getElementById("getBg").innerHTML=bloodgroup;
    document.getElementById("getPhone1").innerHTML="Phone Number :";
    document.getElementById("getPhone").innerHTML=phone;
    document.getElementById("getEmail1").innerHTML="Email :";
    document.getElementById("getEmail").innerHTML=email;
    document.getElementById("getDep1").innerHTML="Department :";
    document.getElementById("getDep").innerHTML=dep;
    document.getElementById("getYear1").innerHTML="Year :";
    document.getElementById("getYear").innerHTML=year;
    document.getElementById("getSem1").innerHTML="Semester :";
    document.getElementById("getSem").innerHTML=sem;
}
