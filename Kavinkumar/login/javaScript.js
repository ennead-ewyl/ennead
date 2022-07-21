function getValue(){
 var username = document.getElementById("username").value;
var studentDetails=[
    {
        username: 'kavin',
        password: 'kavin'
    },
    {
        username: 'vetri',
        password: 'vetri'
    },
    {
        username: 'sriram',
        password: 'sriram'
    },
    {
        username: 'karthi',
        password: 'karthi'
    },
    {
        username: 'dharun',
        password: 'dharun'
    }
]
studentDetails.forEach(function(obj) {
    if(obj.username==username){
        document.getElementById("outPut").innerHTML="Login Success";
    }
});
}
