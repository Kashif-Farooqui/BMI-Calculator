const input1 = document.querySelector("#height");
const input2 = document.querySelector("#weight");
const button3 = document.querySelector("#calculate");
const para3 = document.querySelector('#para3');
const para4 = document.querySelector('#para4');
const para5 = document.querySelector('#para5');
const reset = document.querySelector('#reset');


button3.addEventListener("click", () => {
	const height = parseFloat(input1.value);
	const weight = parseFloat(input2.value);


	if (isNaN(height) || isNaN(weight)) {
		alert("Please enter valid height and weight");
		return;
	}

	let heightM = height / 100;

	const BMI = (weight / (heightM * heightM));

	// alert("your BMI is : " + BMI.toFixed(2));

	button3.innerText = `Your BMI is ${BMI.toFixed(2)}`;

	if (BMI < 18.6) {
		para3.style.color = "#5bc0de";
	}
	else if (BMI >= 18.6 && BMI <= 24.9) {
		para4.style.color = "#5cb85c";
	}
	else {

		para5.style.color = "#f0ad4e"
	}
});

reset.addEventListener("click",()=>{
input1.value = "" ;
input2.value = "" ;
reset.style.backgroundColor = "rgba(218, 127, 16, 1)";

para3.style.color="";
para4.style.color="";
para5.style.color="";

button3.innerText = "Calculate";
})








