(() => {

  let result;
  let totalpagecount;
  function currentPage_count(page,currentNo){
    
    if(currentNo === 2 || currentNo === 3 ){
      //두번째페이지가 2,3일때
      result=2;
      console.log("두번째페이지가 2,3일때");
    }else{
      currentNo-=1;

      if(currentNo===1){
        result=1;
      }else if(currentNo%page != 0){
        result= Math.floor(currentNo / page) + 2;
      }else{
        result =Math.floor(currentNo / page) + 1;
      }
      console.log("두번째페이지가 2,3일때 아님");
    }


  } 
  window.addEventListener("load", () => {
    console.clear();
    //메인슬라이드 시간카운트 
    function SwiperBox1__restartBtnPauseAnimation() {
  
      const html = $(".swiper-box-1__btn-pause-template").html();
      $(".circle-box-1__svg").empty();
    
      setTimeout(() => {
        $(".circle-box-1__svg").html(html);
      }, 10);
    }
    //메인슬라이드 시간카운트 끝
    //메인슬라이드 
    function SwiperBox1__init() {
      
      const swiper1 = new Swiper(".swiper-box-1 > .swiper", {
        
        // Optional parameters
        // observer: true, // display none 이었다가 나올 때의 부작용 해결
        // observeParents: true, // display none 이었다가 나올 때의 부작용 해결
        loop: true,
        effect: "fade",
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        autoplay: {
          delay: 5200,
          disableOnInteraction: false
        },
        // If we need pagination
        pagination: {
          el: ".swiper-box-1 .swiper-pagination",
          clickable: true
        },
        on: {
          
          slideChange: () => {
            setTimeout(() => {
              const currentNo = parseInt(
                $(".swiper-box-1 .swiper-slide-active").attr("data-no")
              );
              $(".swiper-box-1__fraction-box-current").text(currentNo);
              SwiperBox1__restartBtnPauseAnimation();
            
            }, 200);
          }
        }
      });
  
      function SwiperBox1__autoplayPause() {
        $(".swiper-box-1").addClass("swiper-box-1--paused");
        swiper1.autoplay.stop();
      }
  
      function SwiperBox1__autoplayResume() {
        $(".swiper-box-1").removeClass("swiper-box-1--paused");
        swiper1.autoplay.start();
      }
  
      $(".swiper-box-1__btn-pause").click(SwiperBox1__autoplayPause);
      $(".swiper-box-1__btn-resume").click(SwiperBox1__autoplayResume);
    }
    
    setTimeout(SwiperBox1__init, 300);

    function SwiperBox2__init() {
      const swiper2 = new Swiper(".swiper-box-2 > .swiper", {
        // Optional parameters
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        // If we need pagination
        pagination: {
          el: ".swiper-box-2 .swiper-pagination",
          clickable: true
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              const currentNo = parseInt(
                $(".swiper-box-2 .swiper-slide-active").attr("data-no")
              );
              $(".swiper-box-2__fraction-box-current").text(currentNo);
  
              
            }, 200);
          }
        }
      });
  
      function SwiperBox2__autoplayPause() {
        $(".swiper-box-2").addClass("swiper-box-2--paused");
        swiper.autoplay.stop();
      }
  
      function SwiperBox2__autoplayResume() {
        $(".swiper-box-2").removeClass("swiper-box-2--paused");
        swiper.autoplay.start();
      }
  
      $(".swiper-box-2__btn-pause").click(SwiperBox2__autoplayPause);
      $(".swiper-box-2__btn-resume").click(SwiperBox2__autoplayResume);
    }

    SwiperBox2__init();
  
    // content-0 슬라이드
  
    // content-0 나트랑 /호텔리조트
    function na__hotel__Swiper__init(){
      
      var swiper3 = new Swiper(".mySwiper2", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-01 .hotel-01-con-slider .swiper-slide-active").attr("data-no")
              );
              
              currentPage_count(3,currentNo);
              
              if(result===1){
                //첫번째 구간
                $(".content-0-01 .hotel-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-01 .hotel-01-con-slider.swiper-button-next").css("opacity","1");
                $(".content-0-01 .hotel-01-con-slider .swiper- utton-prev").css("opacity","0");
                
              }else if(result===5){
                
                //마지막 구간
                
                $(".content-0-01 .hotel-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-next").css("visibility","hidden");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-next").css("opacity","0");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-prev").css("opacity","1");
                

      
              }else{
               //마지막 구간
              
                $(".content-0-01 .hotel-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-01 .hotel-01-con-slider .swiper-button-prev").css("opacity","1");
              }
              
    
              $(".content-0-01 .swiper-box-hotel-01__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-01 .hotel-01-con-slider .swiper-button-next",
          prevEl: ".content-0-01 .hotel-01-con-slider .swiper-button-prev",
        }
      });
    }
    na__hotel__Swiper__init();
   
    
    // content-0 나트랑 /투어
    function na__tour__Swiper__init(){
      totalpagecount = 4;
      
      var swiper4 = new Swiper(".mySwiper2-2", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2-2",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-01 .tour-01-con-slider .swiper-slide-active").attr("data-no")
              );
            
              currentPage_count(3,currentNo);
              console.log(currentNo);

              if(result===1){
                //첫번째 구간
                console.log("첫번쨰구간");
                $(".content-0-01 .tour-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-01 .tour-01-con-slider.swiper-button-next").css("opacity","1");
                $(".content-0-01 .tour-01-con-slider .swiper- utton-prev").css("opacity","0");
                
              }else if(result===2){   
                console.log("마지막구간");
                //마지막 구간
                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .tour-01-con-slider .swiper-button-next").css("visibility","hidden");

                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("opacity","1");
                
              }else{
                console.log("마지막아님");
                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .tour-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .tour-01-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-01 .tour-01-con-slider .swiper-button-prev").css("opacity","1");
                console.log("세번쨰");
              }
              
    
              $(".content-0-01 .swiper-box-tour-01__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-01 .tour-01-con-slider .swiper-button-next",
          prevEl: ".content-0-01 .tour-01-con-slider .swiper-button-prev",
        }
      });
    }
    na__tour__Swiper__init();

    // content-0 나트랑 /픽업&렌트
    function na__rent__Swiper__init(){
      var swiper5 = new Swiper(".mySwiper2-3", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2-3",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-01 .rent-01-con-slider .swiper-slide-active").attr("data-no")
              );
            
              currentPage_count(3,currentNo);
              
    
              if(result===1){
                //첫번째 구간
                
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .rent-01-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-01 .rent-01-con-slider .swiper- utton-prev").css("opacity","0");
    
              }else if(result===2){   
                //마지막 구간
                console.log("마지막구간");
                $(".content-0-01 .rent-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("visibility","hidden");
  
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("opacity","0");
                $(".content-0-01 .rent-01-con-slider .swiper-button-prev").css("opacity","1");
                
              }else{  
                console.log("마지막구간 아님");
                $(".content-0-01 .rent-01-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-01 .rent-01-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-01 .rent-01-con-slider .swiper-button-prev").css("opacity","1");
              }
              
    
              $(".content-0-01 .swiper-box-rent-01__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-01 .rent-01-con-slider .swiper-button-next",
          prevEl: ".content-0-01 .rent-01-con-slider .swiper-button-prev",
        }
      });
    }
    na__rent__Swiper__init();


    // content-0 달랏 /호텔&리조트
    function dal__hotel__Swiper__init(){
      var swiper7 = new Swiper(".mySwiper2-5", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2-5",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-02 .hotel-02-con-slider .swiper-slide-active").attr("data-no")
              );
            
              currentPage_count(3,currentNo);
    
              if(result===1){
                //첫번째 구간
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .hotel-02-con-slider .swiper- utton-prev").css("opacity","0");
    
              }else if(result===3){   
                //마지막 구간
                
                $(".content-0-02 .hotel-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("visibility","hidden");
  
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("opacity","0");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-prev").css("opacity","1");
                
              }else{  
              
                $(".content-0-02 .hotel-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .hotel-02-con-slider .swiper-button-prev").css("opacity","1");
              }
              
    
              $(".content-0-02 .swiper-box-hotel-02__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-02 .hotel-02-con-slider .swiper-button-next",
          prevEl: ".content-0-02 .hotel-02-con-slider .swiper-button-prev",
        }
      });   
    }
    dal__hotel__Swiper__init();

    // content-0 달랏 /투어
    function dal__tour__Swiper__init(){
      var swiper8 = new Swiper(".mySwiper2-6", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2-6",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-02 .tour-02-con-slider .swiper-slide-active").attr("data-no")
              );
            
              currentPage_count(3,currentNo);
    
              if(result===1){
                //첫번째 구간
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .tour-02-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .tour-02-con-slider .swiper- utton-prev").css("opacity","0");
    
              }else if(result===2){   
                //마지막 구간
                
                $(".content-0-02 .tour-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("visibility","hidden");
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("opacity","0");
                $(".content-0-02 .tour-02-con-slider .swiper-button-prev").css("opacity","1");
                
              }else{  
              
                $(".content-0-02 .tour-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .tour-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .tour-02-con-slider .swiper-button-prev").css("opacity","1");
              }
              
    
              $(".content-0-02 .swiper-box-tour-02__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-02 .tour-02-con-slider .swiper-button-next",
          prevEl: ".content-0-02 .tour-02-con-slider .swiper-button-prev",
        }
      });
    }
    dal__tour__Swiper__init();

    // content-0 달랏 /픽업&렌트
    function dal__rent__Swiper__init(){
      var swiper9 = new Swiper(".mySwiper2-7", {
        speed: 600,
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        pagination: {
          el: ".swiper-pagination2-7",
          clickable: true,
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-0-02 .rent-02-con-slider .swiper-slide-active").attr("data-no")
              );
            
              currentPage_count(3,currentNo);
    
              if(result===1){
                //첫번째 구간
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .rent-02-con-slider .swiper-button-prev").css("visibility","hidden");
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .rent-02-con-slider .swiper- utton-prev").css("opacity","0");
    
              }else if(result===2){   
                //마지막 구간
                
                $(".content-0-02 .rent-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("visibility","hidden");
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("opacity","0");
                $(".content-0-02 .rent-02-con-slider .swiper-button-prev").css("opacity","1");
                
              }else{  
              
                $(".content-0-02 .rent-02-con-slider .swiper-button-prev").css("visibility","visible");
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("visibility","visible");
                $(".content-0-02 .rent-02-con-slider .swiper-button-next").css("opacity","1");
                $(".content-0-02 .rent-02-con-slider .swiper-button-prev").css("opacity","1");
              }
              
    
              $(".content-0-02 .swiper-box-rent-02__fraction-box-current").text(result);
            }, 200);
          }
        },
        navigation: {
          nextEl: ".content-0-02 .rent-02-con-slider .swiper-button-next",
          prevEl: ".content-0-02 .rent-02-con-slider .swiper-button-prev",
        }
      });
    }
    dal__rent__Swiper__init();
    
    // content-1 슬라이드  
    function content1__Swiper__init(){
      var swiper11 = new Swiper(".mySwiper3", {
        speed: 900,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".mySwiper3 .swiper-button-next",
          prevEl: ".mySwiper3 .swiper-button-prev",
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              let currentNo = parseInt(
                $(".content-1-slider .swiper-slide-active").attr("data-no")
              );
    
              currentPage_count(3,currentNo);
    
              // const currentPage = currentNo == 8 ? 4 : Math.ceil(currentNo / 3);
              // const currentPage;
              $(".content-1-swiper__fraction-box-current").text(result);
            }, 200);
          }
        }
      });  
    } 
    content1__Swiper__init();

    // content-1 배너 슬라이드
    function content1Banner__Swiper__init() {
      const swiper12 = new Swiper(".content-1--banner-slider > .swiper", {
        // Optional parameters
        // observer: true, // display none 이었다가 나올 때의 부작용 해결
        // observeParents: true, // display none 이었다가 나올 때의 부작용 해결
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        // If we need pagination
        pagination: {
          el: ".content-1--banner-slider .swiper-pagination",
          clickable: true
        },
        on: {
          slideChange: () => {
            setTimeout(() => {
              const currentNo = parseInt(
                $(".content-1--banner-slider .swiper-slide-active").attr("data-no")
              );
              $(".content-1-banner-swiper__fraction-box-current").text(currentNo);
            }, 200);
          }
        }
      });
    }
    content1Banner__Swiper__init();
    
  });
  

})();

