const show = event =>{
	console.log("show working")
	event.stopPropagation();
	//NOTE TO SELF: Changing style display of the ID #id_black_overlay from none to flex, so that it shows in the middle of the screen once we click inside the buy buttons
	document.querySelector('#id_black_overlay').style.display = 'flex';
}

//hides lightbox
const hide =_=>{ 
	document.querySelector('#id_black_overlay').style.display = 'none'; 
}

//hides lightbox once you click outside of it
const click_outside = e =>{

	//variables
	const lightbox = document.querySelector('#id_lightbox'); 
	const black_overlay = document.querySelector('#id_black_overlay');	
	console.log(lightbox.contains(e.target))
	if (!lightbox.contains(e.target)){
	hide();
	}
}	

//array used to for clicking all BUY buttons
document.querySelectorAll('.black').forEach(obj=>{
	obj.addEventListener('click',show)
	}
)

//login
const queryData =_ =>{

	console.log('queryData ejecuted');

	//user data
	let name = document.querySelector('.name').value;
	let pass = document.querySelector('.pass').value;

	//console.logs to check if the data was being introduced
    console.log('Name: '+ name); 
    console.log('Pass: '+ pass);

    //fetch(`http://localhost:3000/query`) //used for GET petitions
 	fetch(`http://localhost:3000/query?name=`+name+'&password='+pass) //used for GET petitions
    .then(res => res.json())
	.then(res=>{
    console.log(res)
    console.log("res.respuesta: "+ res.respuesta);

    //transaccion successful
    if(res.respuesta == "ok") {
        console.log("Correct data");
        alert(`Transaction complete!`);
        hide();
    }

    //if data was incorrect an alert will appear
    else alert(`The user: ${name} doesn't exist`);
})};


window.addEventListener('click', e => click_outside(e));
//both IDs hide the lightbox
document.querySelector("#ID_cancel").addEventListener('click', hide);
document.querySelector("#ID_confirm").addEventListener('click', queryData);







