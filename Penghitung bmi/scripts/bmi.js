var tinggi,berat,keterangan,bmi;
function hitung() {
	tinggi = parseFloat(document.getElementById("ipt_t").value);
	tinggi /= 100;
	berat = parseFloat(document.getElementById("ipt_b").value);
	bmi = berat / (tinggi * tinggi);

	if (bmi < 18.5) {
		keterangan = "Berat Badan Kurang ๐";
         
	}else if ((bmi >= 18.5 && bmi <= 24.9)){
		keterangan = "Normal๐";
         
	}else if ((bmi >= 25 && bmi <= 29.9)){
		keterangan = "Kegemukan ๐ฎ";
         
	}else {
		keterangan = "sangat kegemukan ๐ฑ";
        
	}
	document.getElementById('bmi').innerHTML =  + bmi.toFixed(1);
	document.getElementById('keterangan').innerHTML = keterangan;
}