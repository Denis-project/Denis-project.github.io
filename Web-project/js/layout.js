// Back-top
function up() {  
    var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
  if(top > 0) {  
    window.scrollBy(0,((top+100)/-10));  
    t = setTimeout('up()',20);  
  } else clearTimeout(t);  
  return false;  
  } 



// transition
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



// vacancy fn
$(document).ready(function() {
	$('.btn').click(function(event) {
		$('.block').removeClass('active')
		var num = $(this).attr('data-num');
		$('#block'+num).addClass('active')
	});
});