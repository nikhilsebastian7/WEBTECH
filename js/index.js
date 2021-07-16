function validate()
{
	var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    if (name != password)
    {
    	alert("Invalid User");
        return false;
    }
    return true;
}