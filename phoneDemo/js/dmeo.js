$(function(){
	window.addEventListener('scroll',function(){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		
		console.log(scrollTop,$('section').offset().top);

		if(scrollTop>=$('section').offset().top){
			// alert('他来了！！');
		}
	},true);
	 // var myPlayer = videojs('my-video');
  //           videojs("my-video").ready(function () {
  //               var myPlayer = this;
  //               myPlayer.play();//自动播放
  //    });
     var myVideo=document.getElementsByClassName("video-js")[0];
     var video = document.getElementsByClassName("video")[0];
     $('.audio1').on('touchend',function(){
     		audio($('.audio1'),myVideo);
     })
      $('.audio2').on('touchend',function(){
     		audio($('.audio2'),video);
     })
      //声音开关
      function audio(a,b){
      	if(a.siblings('video').hasClass('hasAudio')){
      			 a.addClass('noAu').removeClass('hasAu');
     			 a.siblings('video').addClass('noAudio').removeClass('hasAudio');
           		 b.muted=true;
	       }else{
	       		 a.addClass('hasAu').removeClass('noAu');
	       	     a.siblings('video').addClass('hasAudio').removeClass('noAudio');
	             b.muted=false;
	       }
      }
       
})