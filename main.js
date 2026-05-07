function checkHeatIndex() {
    const T_celsius = parseFloat(document.getElementById('deg').value);
    const R = parseFloat(document.getElementById('hum').value);

    if (isNaN(T_celsius) || isNaN(R)) {
        alert("Please enter valid numbers");
        return;
    }

    const T = (T_celsius * 9/5) + 32;

    let HI = 0.5 * (T + 61.0 + ((T - 68.0) * 1.2) + (R * 0.094));

    if (HI > 80) {
        HI = -42.379 + 2.04901523 * T + 10.14333127 * R - 0.22475541 * T * R 
             - 0.00683783 * T * T - 0.05481717 * R * R + 0.00122874 * T * T * R 
             + 0.00085282 * T * R * R - 0.00199 * T * T * R * R;
    }


    const HI_celsius = (HI - 32) * 5/9;
    
    let status = "";
    if (HI_celsius >= 52) {
        status = "Extreme / Danger";
    } else if (HI_celsius >= 41) {
        status = "Danger";
    } else if (HI_celsius >= 32) {
        status = "Extreme Caution";
    } else {
        status = "Caution";
    }

    alert(`Heat Index: ${HI_celsius.toFixed(1)}°C\nStatus: ${status}`);
}
