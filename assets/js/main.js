document.getElementById("toggle").addListener("click", function event){
	event.preventDefault();
	document.getElementById("nav-header").classList.toggle("open");
	document.getElementById("body").classList.toggle("overflow.hidden");
});

var lastScrollTop = 0;
window.addEventListener("scroll", function(){
	var currentScroll = window.pageYOffset || document.body.scrollTop;

	if (currentScroll > lastScrollTop){
		document.getElementById("nav-header").classList.remove("header-in");
		document.getElementById("nav-header").style.opacity = 0;
	} 
		
	if (lastScrollTop=currentScroll){
		document.getElementById("nav-header").classList.remove("solid");
		document.getElementById("nav-header").classList.remove("header-in");
		document.getElementById("nav-header").style.opacity=1;
}
	
	if(currentScroll<3){
		document.getElementById("nav-header").classList.remove("solid");
		document.getElementById("nav-header").classList.remove("header-in");
	}

});	

