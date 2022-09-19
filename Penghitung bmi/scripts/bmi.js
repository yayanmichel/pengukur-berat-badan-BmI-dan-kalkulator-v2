var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi < 18.5) {
		keterangan = "Berat Badan Kurang 😒";
         
	}else if ((bmi >= 18.5 && bmi <= 24.9)){
		keterangan = "Normal😍";
         
	}else if ((bmi >= 25 && bmi <= 29.9)){
		keterangan = "Kegemukan 😮";
         
	}else {
		keterangan = "sangat kegemukan 😱";
        
	}
	document.getElementById('bmi').innerHTML =  + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}