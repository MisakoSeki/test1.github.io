document.getElementById("p1").style.display ="none";


let button = document.getElementById("btn");
button.addEventListener('click', () => {
	if(p1.style.display=="block"){
		p1.style.display ="none";
	}else{
		p1.style.display ="block";
	}
    });
