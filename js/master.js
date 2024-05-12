var calculator_btn = document.getElementById("calculator_btn"),
   calculate_age = document.getElementById("calculate_age");

    calculator_btn.addEventListener('click', function(){
        var birth_date = document.getElementById("birth_date");
        birth_date = new Date(birth_date.value);
        // alert(birth_date)
        var todayDate = new Date();
        // alert(today)
        totalAge = Date.now()  - birth_date.getTime();
        ageYear = new Date(totalAge)
        ageYear = Math.abs(ageYear.getUTCFullYear() - 1970)
    function ageMonth(){
        if (todayDate.getMonth() >= birth_date.getMonth()){

            if(todayDate.getDate() >= birth_date.getDate()){
                return todayDate.getMonth() - birth_date.getMonth();
            }else{
                if((todayDate.getMonth() -1) >= birth_date.getMonth()){
                    return (todayDate.getMonth() -1) - birth_date.getMonth();
                }else{
                    return ((todayDate.getMonth() -1) + 12) - birth_date.getMonth();

                }
            }
        }
    }
    function ageDay(){
        if (todayDate.getMonth() > birth_date.getMonth()){
            return todayDate.getMonth() - birth_date.getMonth()
        }else if (todayDate.getDate() == todayDate.getDate()){
            return todayDate.getMonth() - birth_date.getMonth();
        }else {
            var calDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 0);
            return (todayDate.getDate() + calDate.getDate()) - birth_date.getDate();
        }
        
    }

        calculate_age.innerHTML = "your Age is " + ageYear + " years "  + ageMonth() 
        + " months " + ageDay() + " day";

    })