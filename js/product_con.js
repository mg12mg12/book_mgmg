// 點小秀大
function showLarge(e){
	// let small = e.target;
	// document.getElementById("large").src = small.src;
	document.getElementById("large").src = e.target.src;
}

function init(){
	let smalls = document.querySelectorAll(".small img");//要有小數點
	for(let i=0;i<smalls.length;i++){
		smalls[i].onclick = showLarge;
	}
}

window.addEventListener("load", init, false);




// 貓頭鷹
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
