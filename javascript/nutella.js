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

//both IDs hide the lightbox
document.querySelector("#ID_cancel").addEventListener('click', hide);
document.querySelector("#ID_confirm").addEventListener('click', hide);
window.addEventListener('click', e => click_outside(e));

