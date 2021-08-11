function stringToHash(string) 
{
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (i = 0; i < string.length; i++) 
    {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return hash;
}

function validate()
{
    var n=108399386;
    var p=-1994359877;
	var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var nme=stringToHash(name);
    var pass=stringToHash(password);
    if (nme != n)
    {
    	alert("Invalid User");
        return false;
    }
    else if(pass != p)
    {
        alert("Invalid Password");
        return false;
    }
    else
    {
        return true;
    }
}