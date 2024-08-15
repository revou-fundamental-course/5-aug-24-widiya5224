const bmiText = document.getElementById("bmi");
const descText = document.getElementById("penjelasan");
const form = document.querySelector("form");

form.addEventListener("hitung",onFormHitung);
form.addEventListener("reset", onFormReset);

function onFormReset(){
    bmiText.textContent=0;
    bmiText.className='';
    descText.textContent
}

function onFormHitung(e){
    e.preventDefault();

    const berat = parseFloat(form.berat)
    const tinggi = parseFloat(form.tinggi)

    if (isNaN(berat) || isNaN(tinggi) || berat <= 0 || tinggi <= 0){
        alernt("berat dan tinngi tidak sesuai")
        return;
    }

    const tinggiInMeters = tinggi/100;
    const bmi=berat/Math.pow(tinggiInMeters);
    const penjelasan = interpretPenjelasan(penjelasan);

    bmiText.textContent=hitung.toFixed(2)
    bmiText.className=hitung
    descText.innerHTML= `youre <strong>${penjelasan}</strong>`;

}

function interpretPenjelasan(penjelasan) {
    if (bmi<18.5){
        return "kekurangan berat badan";
    } else if (bmi<25){
        return "Normal";
    } else if (bmi<30){
        return "Kelebihan berat badan";
    } else (bmi>30)
        return "Obesitas";
    }
