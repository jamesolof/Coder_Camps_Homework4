
    function numbers(){

        let x = (<HTMLInputElement>document.getElementById('firstNumber')).value;
        let y = (<HTMLInputElement>document.getElementById('secondNumber')).value;
        let z = Math.max(parseInt(x), parseInt(y));
        
        return String(z);
    };

    $('#determine').on("click", function (event) {
        $('#largestNumber').html(numbers());
    });


    
    function words() {

        var a = (<HTMLInputElement>document.getElementById('firstWord')).value;
        var b = (<HTMLInputElement>document.getElementById('secondWord')).value;

        if (a.length < b.length){
            return a;
        }
        else {return b}

    };

    $('#determine2').on("click", function (event) {
        $('#output2').html(words());
    });

    function rollem(s: number, d: number){

        console.log(s);
        console.log(d);

        let roll = 0;

        var i:number = 1 

        while (i<= d){
            let rannie = Math.floor(Math.random())
            roll = roll + (rannie*d)+1;
            i++;
        }

        return String(roll);

    }

    $('#rollem').on("click", function (event){
        let sides = parseInt((<HTMLInputElement>document.getElementById('numSides')).value);
        let dice = parseInt((<HTMLInputElement>document.getElementById('numDice')).value);
        $('#result').html(rollem(sides, dice));
    });
    



