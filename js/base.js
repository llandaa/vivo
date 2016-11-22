$('.button-collapse').sideNav();
$('.carousel.carousel-slider').carousel({full_width: true});
$('.parallax').parallax()
/*****banner***/
var oneImgB = document.querySelector('#oneimage')
var indicators = document.querySelector('.indicators');
var oneTitle = document.querySelector('#one-title');
var oneText = document.querySelector('#one-text');
var twoImg = document.querySelector('#carousel-item-two');
var oneImg = document.querySelector('#carousel-item-one');
var threeImg = document.querySelector('#carousel-item-three');
var fourImg = document.querySelector('#carousel-item-four');
var fiveImg = document.querySelector('#carousel-item-five');
var imgfvs = fiveImg.querySelectorAll('img')
var imgfs = fourImg.querySelectorAll('img')
var imgts = twoImg.querySelectorAll('img');
var imgths = threeImg.querySelectorAll('img');
oneImg.onmouseenter=function(){
	oneTitle.classList.add('fadeInDown')
	oneText.classList.add('fadeInDown')
	oneImgB.src="img/vm-h-nba-bg2-mini.jpg"
}
oneImg.onmouseleave=function(){
	oneTitle.classList.remove('fadeInDown')
	oneText.classList.remove('fadeInDown')
	oneImgB.src="img/vm-h-nba-bg1.jpg"
}
twoImg.onmouseenter=function(){
	imgts[0].classList.add('bounceInDown');
	imgts[1].classList.add('bounceInDown1');
	imgts[2].classList.add('bounceInDown2');
	imgts[3].classList.add('bounceInDown3');
}
twoImg.onmouseleave=function(){
	imgts[0].classList.remove('bounceInDown');
	imgts[1].classList.remove('bounceInDown1');
	imgts[2].classList.remove('bounceInDown2');
	imgts[3].classList.remove('bounceInDown3');
}
threeImg.onmouseenter=function(){
	imgths[1].classList.add('slopeDown')
	imgths[2].classList.add('slopeUp')
	imgths[3].classList.add('fadeInDown')
}
threeImg.onmouseleave=function(){
	imgths[1].classList.remove('slopeDown')
	imgths[2].classList.remove('slopeUp')
	imgths[3].classList.remove('fadeInDown')
}
fourImg.onmouseenter=function(){
	imgfs[1].classList.add('fadeInDown')
	imgfs[0].classList.add('fadeInRight')
}
fourImg.onmouseleave=function(){
	imgfs[1].classList.remove('fadeInDown')
	imgfs[0].classList.remove('fadeInRight')
}
fiveImg.onmouseenter=function(){
	imgfvs[1].classList.add('fadeInRight10')
	imgfvs[2].classList.add('fadeInRight-10')
	imgfvs[3].classList.add('fadeInDown')
	
}
fiveImg.onmouseleave=function(){
	imgfvs[1].classList.remove('fadeInRight10')
	imgfvs[2].classList.remove('fadeInRight-10')
	imgfvs[3].classList.remove('fadeInDown')	
}
/*******banner变模糊****/
var carouselItem = document.querySelectorAll('.carousel-item')
var footer = document.querySelector('footer')
window.onscroll=function(){
	var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
	var m=0;
	var n=0;
		if(scrollT>0)
			{
				m=scrollT;
				n=8*(m/650)
				for(var i=0;i<carouselItem.length;i++){
            		carouselItem[i].style.filter="blur("+n+"px)"
            		}
				/*console.log(m)*/
			}
		if(scrollT<600){
			$('.carousel').show()
			$('footer').hide()
		}
		if(scrollT>=600){
			$('.carousel').hide()
			$('footer').show()
			
		}
		if(scrollT>1200){
				m=scrollT-1200;
				/*console.log(m)*/
				o = 1*(m/400)
				/*console.log(o)*/
				footer.style.opacity = o;
		}
		
}
/****正文**/
$(function(){
	$('div.bofang').on('mouseenter',function(){
		$('div.bofang').find("i").removeClass('white-text').addClass('blue-text')
		return false;
	})
	$('div.bofang').on('mouseleave',function(){
		$('div.bofang').find("i").removeClass('blue-text-text').addClass('white-text')
		return false;
	})
	$('.more').on('mouseover',function(){
		$(this).find("i").addClass('moveRight')
	})
	$('.more').on('mouseleave',function(){
		$(this).find("i").removeClass('moveRight')
	})
	$(window).resize(function(){
		var h = $('video').height();
		var w = $('video').width();
		var zh = $('.content').height()+$('footer').height();
		$('video').css({
			"margin-top" : -h/2,
			"margin-left" : -w/2
		})
		var totalH = $('.content').height()+$('footer').height()+$('.carousel').height();
		console.log(totalH)
		$('section').css({
			"height" : totalH
		})
	})
	$('.vivo-share').find('a').eq(0).on('mouseover',function(){
		$(this).removeClass('grey').addClass('red')
	})
	$('.vivo-share').find('a').eq(0).on('mouseout',function(){
		$(this).removeClass('red').addClass('grey')
	})
	$('.vivo-share').find('a').eq(1).on('mouseover',function(){
		$(this).removeClass('grey').addClass('green')
	})
	$('.vivo-share').find('a').eq(1).on('mouseout',function(){
		$(this).removeClass('green').addClass('grey')
	})
	$('.vivo-share').find('a').eq(2).on('mouseover',function(){
		$(this).removeClass('grey').addClass('blue')
	})
	$('.vivo-share').find('a').eq(2).on('mouseout',function(){
		$(this).removeClass('blue').addClass('grey')
	})
	$('.vivo-share').find('a').eq(3).on('mouseover',function(){
		$(this).removeClass('grey').addClass('blue')
	})
	$('.vivo-share').find('a').eq(3).on('mouseout',function(){
		$(this).removeClass('blue').addClass('grey')
	})
	$('.vivo-share').find('a').eq(4).on('mouseover',function(){
		$(this).removeClass('grey').addClass('blue')
	})
	$('.vivo-share').find('a').eq(4).on('mouseout',function(){
		$(this).removeClass('blue').addClass('grey')
	})
	$('.vivo-share').find('a').eq(5).on('mouseover',function(){
		$(this).removeClass('grey').addClass('blue')
	})
	$('.vivo-share').find('a').eq(5).on('mouseout',function(){
		$(this).removeClass('blue').addClass('grey')
	})

	$('.play-btn').on('click',function(){
		$('.video-box').show();
	})
	$('.close').on('click',function(){
		$('.video-box').hide();
	})
	var hs = $('section').height();
	console.log(hs)
})
/********contain高度******/
/*alert(window.innerWidth);
alert(window.innerHeight);*/
/*window.innerWidth=function(){
	console.log()
}*/
/******video*****/
