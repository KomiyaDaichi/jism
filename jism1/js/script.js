/* !smoothscroll ------------------------------------------------------------ */
    $(function(){
      $('a[href^="#"]').click(function(){
          var Height= 100;
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - Height;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
      });
    });
    
    

 $(function(){
    $(".scroll-top").hide();
        $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.scroll-top').fadeIn(200);
        }else{
            $('.scroll-top').fadeOut(200);
        }
    });
});
 
$(function(){
	$(window).on('load resize scroll',function(){
		var w = $(window).width();
		if (w > 1200) {
			if($(window).scrollTop() > 100){
				$('.header').css({"background-color":"#fff"});
                $(".header-nav a").css({"color":"#333"});
			}else{
                $('.header').css({"background-color":"rgba(0,0,0,0)"});
                $(".header-nav a").css({"color":"#fff"});
			}
		}
	});
});


$(function(){
    $('.scroll-top').click(function(){
        $("html,body").animate({scrollTop:0},"600");
    });
 });

$('.main-scroll').click(function(){
    const position = $(".cont1").offset().top;
    $("html,body").animate({scrollTop:position - 80},500);
 });

$('.pull-down').each(function(){
    $(this).hover(function(){
        $(this).children('.pull-down-menu-wrap').slideToggle(200);
    });
});
    
$(function(){
    $('.res-menu').click(function(){
        $('.res-menu').toggleClass('active');
        $('.header-nav').fadeToggle(600);
    });
});
    
$(function(){
	$(window).on('load scroll',function (){
		$('.animation').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});

$(function(){
    $('.cont1-inner').slick({
      autoplay: true, //自動でスクロール
      autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
      speed: 8000, //スライドが流れる速度を設定
      cssEase: "linear", //スライドの流れ方を等速に設定
      slidesToShow: 6, //表示するスライドの数
      swipe: false, // 操作による切り替えはさせない
      arrows: false, //矢印非表示
      pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
      pauseOnHover: false, //スライダーにマウスホバーした時にスライドを停止させるか
      responsive: [
        {
          breakpoint: 834,
          settings: {
            slidesToShow: 3, //画面幅750px以下でスライド3枚表示
          }
        }
      ]
    });
  });
    
    
    
   