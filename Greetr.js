
//IIFE to avoid clashes with external variables
(function(global, $){
    
    //returns object of function constructor Greetr.init assigned to Greetr variable
    var Greetr = function(firstName, lastName, language){
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedlangs = ['en', 'es'];

    var greetings = {
        en : 'Hello',
        es : 'Hola'
    };

    var formalGreetings = {
        en : 'Greetings',
        es : 'Saludos'
    };

    var logMessages = {
        en : 'Logged in',
        es : 'Incio sesion'
    }

    //__proto__ of any object created with Greetr will point to Greetr.prototype
    //Defining all the methods for greeter inside prototype
    
    Greetr.prototype = {

        fullName : function(){
            return this.firstName + ' ' + this.lastName;
        },

        validate: function(){
            if (supportedlangs.indexOf(this.language) === -1){
                throw "Invalid language";
            }
        },

        greeting: function(){
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalgreeting : function(){
            return formalGreetings[this.language] + ' ' + this.fullName() + '!';
        },

        greet : function(formal, dom_object){
            var msg;

            // if undefined or null it will coerced to 'false'
            if(formal){
                msg = this.formalgreeting();
            }
            else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            if(dom_object){
                dom_object.innerText = msg;
            }

            // returns the this object with the variable msg. Makes the function chainable so that other functions can be called on the this object.
            return this;
        },

        log : function(){
            if(console){
                console.log(greetings[this.language] + ': ' + this.fullName());
            }
            return this;
        },

        setLang : function(lang){
            this.language = lang;
            this.validate();
            return this;
        }


    };

    // Function constructor
    Greetr.init = function init(firstName, lastName, language){

        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

    }

    //Greetr always uses Greetr.init to create objects so referencing Greetr.prototype to Greetr.init.prototype
    Greetr.init.prototype = Greetr.prototype;

    //assign Greetr object to the global variable that gets passed
    global.Greetr = global.G$ = Greetr;

}(window)); //Immediately Invoked. Expects global object and jquey object