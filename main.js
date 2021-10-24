var images = 
 [
 "rashi.jpg", "rakhi.jfif", "bapi.jfif"; 
]

var names =
[
 "Rashi Chakraborty", "Dr.Rakhi Roy Halder", "Dr.Shantanu Chakraborty";
]

var i = 0;
function update()
{
    i++
    var numer_of_family_member_in_array = 2
    if(i > numer_of_family_member_in_array )
    {
        i = 0

    }
    var updatedImage = images[i];
    var updatedNames = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").src = updatedNames;
}