const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celTofah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32);
        return fahrenheit;
    }

    // Celsius to Kelvin
    const celTokel = (cel) => {
        let kelvin = ((cel * 1)+273.15);
        return kelvin;
    }

    // Fahrenheit to Celsius
    const fahTocel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9);
        return celsius;
    }

    // Fahrenheit to Kelvin
    const fahTokel = (fah) => {
        let kelvin = celTokel(fahTocel(fah));
        return kelvin;
    }

    // Kelvin to Celsius
    const kelTocel = (kel) => {
        let celsius = ((kel*1) - 273.15);
        return celsius;
    }

    // Kelvin to Fahrenheit
    const kelTofah = (kel) => {
        let fahrenheit = celTofah(kelTocel(kel));
        return fahrenheit;
    }


    if (valueTemp == 'cel') {
        document.getElementById("result1").innerHTML = celTofah(inputTemp) + "&#176; Fahrenheit";
        document.getElementById("result2").innerHTML = celTokel(inputTemp) + "&#176; Kelvin";
    }

    else if(valueTemp == 'kel'){
        document.getElementById("result1").innerHTML = kelTocel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = kelTofah(inputTemp) + "&#176; Fahrenheit";
    }

    else {
        document.getElementById("result1").innerHTML = fahTocel(inputTemp) + "&#176; Celsius";
        document.getElementById("result2").innerHTML = fahTokel(inputTemp) + "&#176; Kelvin";
    }
}

