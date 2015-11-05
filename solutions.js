    var chrysanthenum;
    var rose;
    var lily;
    var daisy;


    $(document).ready(function() {



        console.log("Javascript is active!");

        function Flower(color, petals, smellsPretty) {
            this.color = color;
            this.petals = petals;
            this.stem = "long";
            this.smellsPretty = smellsPretty;
            this.sniff = function() {
                console.log("Sniff Sniff Sniff!");
            };
            // Demonstrates use of arguments with methods
            this.smellsGood = function(answer) {
                if (answer) {
                    return 'This flower smells amazing!';
                } else {
                    return 'What a noxious weed!';
                }
            };
            // Demonstrates use of local object variables
            this.describe = function(answer) {
                alert("This flower is " + this.color + ".");
            };
            /// Demonstrates object to object interaction
            this.compare = function(otherFlower) {
                return ("My " + this.color + " flower is much prettier than your " +
                    otherFlower.color + " flower :P");
            };
            this.render = function() {
                $('body').append("<p>My pretty flower is " + this.color +
                    " and has " + this.petals + " pristine petals.</p>");
            };

            this.crossPolinate = function(otherFlower) {
                var hybridColor = this.color + "-" + otherFlower.color;
                var hybridPetal = (this.petals + otherFlower.petals)/2;
                var hybridSmell = bothSmellPretty(this.smellsPretty, otherFlower.smellsPretty);
                var hybridFlower = new Flower(hybridColor, hybridPetal, hybridSmell) ;
                return hybridFlower;
                };


    }

        var bothSmellPretty = function(flower1, flower2) {
            if (flower1 && flower2) {
                return true;
            } else {
                return false;
            }
        };

        chrysanthenum = new Flower("pink", 65, false);
        rose = new Flower("red", 32, true);
        lily = new Flower("yellow", 6, true);
        daisy = new Flower("white", 10, false);
        daisy.render();

});