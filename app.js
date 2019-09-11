
function greet_user(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var formal = document.getElementById("formal_radio").checked;

    console.log(formal)

    var g = G$(fname, lname);
    // Initializing object with my user name and password. This can be retrived from the webpage if needed.

    var lang_lookup = {
        English : 'en',
        Spanish : 'es'
    }

    //Fetch selected language
    var lang = document.getElementById("lang")
    //Lookup for language abbreviation
    var lang = lang.options[lang.selectedIndex].text;
    lang = lang_lookup[lang]
    
    // call the greet method after setting the language. Greet method takes two arguements
        // 1) formal greeting : Boolean
        // 2)dom object in which the greeting needs to be filled in
    g.setLang(lang).greet(formal, document.getElementById("greeting"));
}