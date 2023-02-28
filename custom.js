window.addEventListener("load", () => {


 
  if (matchMedia("screen and (min-width: 768px)").matches) {
    // 768px 이상에서 사용할 JavaScript
    //1차메뉴 후버시 2차메뉴 나오기, 로고 색상변경
    $(".menu_1-1-item").hover(function() { 
      //로고바뀌기
      $(".container.main-page .logo-box a:nth-child(1)").addClass("show-logo");
      $(".container.main-page .logo-box a:nth-child(2)").removeClass("show-logo");

      //1차메뉴 색바뀌게
      $(".menu_1-1-item-con > .menu-link").css("color","#3C1E1E");

      const ul_height = $(this).find("ul").height();
      const hd_height = $(".top-bar").height();
      const bg_height = ul_height + hd_height;     
      const set_transition = (bg_height/1000).toFixed(2);

      $(".menu-bg").css({"transition":"all " + set_transition + "s", "height":bg_height});

      //2차메뉴 글씨 transiton-delay주기
      const set_menu_transition_delay = parseFloat(set_transition) + .2 ;


      $(".menu-border-bt").css({"transition":"opacity " + (set_transition-0.0999) + "s linear .0999s", "opacity":"1"});

    }, function() {
      //로고바뀌기
      $(".container.main-page .logo-box a:nth-child(1)").removeClass("show-logo");
      $(".container.main-page .logo-box a:nth-child(2)").addClass("show-logo");
      
      $(".menu-bg").css("height","0");
      $(".top-bar:not(.sub-page-menu) .menu_1-1-item-con > .menu-link").css("color","white");
      $(".menu-border-bt").css({"opacity":"0", "transition-delay":"0s"});

      $(".menu_1-2").css({"opacity":"0", "transition-delay":"0s"});
    });
    // 첫로드시
    var windowWidth = $( window ).width();
    if (windowWidth  <= 1600) {
      $(".menu-bg").addClass("width-1600");
      $("footer").addClass("width-1600");
      $(".menu-border-bt").addClass("width-1600");
    }else{
      $(".menu-bg").removeClass("width-1600");
      $("footer").removeClass("width-1600");
      $(".menu-border-bt").removeClass("width-1600");
    }
    // 리사이즈시
    window.addEventListener('resize', function(){
      var windowWidth = $( window ).width();
      if (windowWidth  <= 1600) {
        $(".menu-bg").addClass("width-1600");
        $(".menu-border-bt").addClass("width-1600");
      }else{
        $(".menu-bg").removeClass("width-1600");
        $(".menu-border-bt").removeClass("width-1600");
      }
    });

    // content-0 상단 탭메뉴(나트랑,달랏) 클릭시 bg처리, 콘텐츠 바뀌기
    $(".content-0 .tab-menu a:nth-child(1)").click(function () {
      //나트랑
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".content-0-01").addClass("show");
      $(".content-0-02").removeClass("show");
      $(".content-0").addClass("nha-bg");
      $(".content-0").removeClass("dal-bg");
    });

    $(".content-0 .tab-menu a:nth-child(2)").click(function () {
      //달랏
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".content-0-02").addClass("show");
      $(".content-0-01").removeClass("show");
      $(".content-0").addClass("dal-bg");
      $(".content-0").removeClass("nha-bg");
    });

    // sub-menu 클릭시
    $(".content-0 .con .sub-tab-menu a").click(function () {
      var index = $(this).index() + 1;
      $(this).addClass("target");
      $(this).siblings().removeClass("target");
      var id = $(".active").attr('id');
      if(id === "nha"){
        $(".content-0-01 .sub-con-wrap > div:nth-child("+index+")").addClass("target");
        $(".content-0-01 .sub-con-wrap > div:nth-child("+index+")").siblings().removeClass("target");
      }else{
        $(".content-0-02 .sub-con-wrap > div:nth-child("+index+")").addClass("target");
        $(".content-0-02 .sub-con-wrap > div:nth-child("+index+")").siblings().removeClass("target");
      }
    });

    function kakao_links__close() {
      $(".kakao-link-items").css("visibility","hidden");
      $(".kakao-btn a:nth-child(2)").css("visibility","hidden");
      $(".kakao-btn a:nth-child(1)").css("visibility","visible");
      $(".kakao-link-items li").css("bottom","0");
      $(".kakao-link-items li").css("opacity","0");
    }
    function kakao_links__open() {
      $(".kakao-btn a:nth-child(2)").css("visibility","visible");
      $(".kakao-btn a:nth-child(1)").css("visibility","hidden");
      //open
      $(".kakao-link-items li").css("opacity","1");
      $(".kakao-link-items li:nth-child(5)").css("bottom","1rem");
      $(".kakao-link-items li:nth-child(4)").css("bottom","6rem");
      $(".kakao-link-items li:nth-child(3)").css("bottom","11rem");
      $(".kakao-link-items li:nth-child(2)").css("bottom","16rem");
      $(".kakao-link-items li:nth-child(1)").css("bottom","21rem");
      $(".kakao-link-items").css("visibility","visible");
    }

    // 카카오채널 아이콘 클릭시
    $(".kakao-btn > a:nth-child(1)").click(function () {
      kakao_links__open();
      $(".kakao-link-items").addClass("active");
      $("html").addClass("kakao-active");
      
    });

    //카카오 닫기 아이콘 클릭시
    $(".kakao-btn a:nth-child(2)").click(function () {
      kakao_links__close();
      $(".kakao-link-items").removeClass("active");
      $("html").removeClass("kakao-active");
    });

    // top 버튼 누르면 최상단으로 스크롤
    $(".top-btn").click(function () {
      $("html, body").animate( { scrollTop : 0 }, 350 );
    });

    // 스크롤 내렸을때 카카오톡 링크 보이게
    document.addEventListener('scroll', function() {
      var currentScrollValue = document.documentElement.scrollTop;
      if(currentScrollValue >= 200){
        $(".kakao-links").css("opacity","1");
        $(".kakao-links").css("visibility","visible");
        $(".kakao-links").css("z-index","100");
        
      }else{
        $(".kakao-links").css("opacity","0");
        $(".kakao-links").css("visibility","hidden");
        console.log("aaaa");       
        $(".kakao-links").css("z-index","-1");
        
      }
    });
    //스크롤 내렸을때 카카오톡 링크 보이게 (새로고침시 다시 값받아오기)
    var currentScrollValue = document.documentElement.scrollTop;
    if(currentScrollValue >= 200){
      $(".kakao-links").css("opacity","1");
      $(".kakao-links").css("visibility","visible");
      $(".kakao-links").css("z-index","100");
      
    }else{
      $(".kakao-links").css("opacity","0");
      $(".kakao-links").css("visibility","hidden");
     
      $(".kakao-links").css("z-index","-1");
    }

    //공지사항 글리스트 제목영역 후버시에만 보이도록
    $(".content-1--list-con span:not(.main-article) > a").hover(function() { 
      $(this).parent().addClass("hover");
    }, function() {
      $(this).parent().removeClass("hover");
    });
    

    $(".list-item").hover(function() { 
      $(this).css("background-color","rgb(217, 217, 217, .1 )");
    }, function() {
      $(this).css("background-color","transparent");
    });


    //셀렉트박스 열고닫기
    $(".select-box:not(.sub-select-box)").click(function () {
      $(".select-box:not(.sub-select-box) > span").toggleClass("open-option");
      $(".select-box:not(.sub-select-box) > span").toggleClass("close-option");
      
    });

    //셀렉트박스 내용바뀌기
    $(".select-box:not(.sub-select-box) li").click(function () {
      var click_content = $(this).text();
      $(".select:not(.sub-select)").text(click_content);


    });
    
    //서브 셀렉트 박스 열고닫기
    $(".sub-select-box").click(function () {
      $(".sub-select-box > span").toggleClass("open-option");
      $(".sub-select-box > span").toggleClass("close-option");
    });
    
    
    //서브 셀렉트 박스 내용바뀌기
    $(".sub-select-box li").click(function () {
      var click_content = $(this).text();
      $(".sub-select").text(click_content);
    });

    // qna 리스트 제목클릭시 내용보이게
    $('.qna-list .click-area').click(function () { 
      
      $(this).parents(".title").siblings(".body").slideToggle();
      $(this).parents(".item").toggleClass("active");

      if($(this).parents(".item").siblings().hasClass('active')){
        console.log("ggg");
        $(this).parents(".item").siblings().removeClass("active");

        
        
      }
      $(".item:not(.active) > .body").slideUp();
     
    });

    // 레이어 팝업
    // 팝업 시작 
    // 팝업을 닫기
    function Popup1__close() {
      $('.popup-1').removeClass('active');
      $('html').removeClass('popup-1-actived');
    }

    // 팝업을 열기
    function Popup1__show() {
      $('.popup-1').addClass('active');
      $('html').addClass('popup-1-actived');
    }

    // 팝업과 관련된 초반작업 수행
    function Popup1__init() {
      $('.popup-1, .popup-1 .popup__btn-close').click(Popup1__close);
      $('.btn-popup-1').click(Popup1__show);
        
      // 자기 부모에게 자신이 클릭당했다는 사실을 전파하지 않음, v2
      $('.popup-1 .layer-popup').click(function() {
        return false;
      });
    }

    Popup1__init();
    // 팝업1 끝


    // 파일 커스텀

    // 공지사항페이지 등록페이지
    $("#file").on('change',function(){
      var fileName = $("#file").val();
      $(".upload-name").val(fileName);
    });
    $("#file2").on('change',function(){
      var fileName = $("#file2").val();
      $(".upload-name2").val(fileName);
    });
    $("#file3").on('change',function(){
      var fileName = $("#file3").val();
      $(".upload-name3").val(fileName);
    });
    $("#file4").on('change',function(){
      var fileName = $("#file4").val();
      $(".upload-name4").val(fileName);
    });

    // 이벤트 페이지 등록페이지
    $("#event-img-file").on('change',function(){
      var event_img_file = $("#event-img-file").val();
      $(".upload-event-img-file").val(event_img_file);
    });

    $("#event-file1").on('change',function(){
      var event_file1 = $("#event-file1").val();
      $(".upload-event-file1").val(event_file1);
    });
    $("#event-file2").on('change',function(){
      var event_file2 = $("#event-file2").val();
      $(".upload-event-file2").val(event_file2);
    });
    $("#event-file3").on('change',function(){
      var event_file3 = $("#event-file3").val();
      $(".upload-event-file3").val(event_file3);
    });
    $("#event-file4").on('change',function(){
      var event_file4 = $("#event-file4").val();
      $(".upload-event-file4").val(event_file4);
    });

    //커뮤니티 페이지 등록페이지
    $("#commu-file1").on('change',function(){
      var commu_file1 = $("#commu-file1").val();
      $(".commu-upload").val(commu_file1);
    });
    $("#commu-file2").on('change',function(){
      var commu_file2 = $("#commu-file2").val();
      $(".commu-upload2").val(commu_file2);
    });
    $("#commu-file3").on('change',function(){
      var commu_file3 = $("#commu-file3").val();
      $(".commu-upload3").val(commu_file3);
    });
    $("#commu-file4").on('change',function(){
      var commu_file4 = $("#commu-file4").val();
      $(".commu-upload4").val(commu_file4);
    });

    //호텔리조트 등록페이지
    $("#thumbnail-file").on('change',function(){
      var commu_file1 = $("#thumbnail-file").val();
      $(".upload-thumbnail").val(commu_file1);
    });


    $("#hotel-file1").on('change',function(){
      var commu_file2 = $("#hotel-file1").val();
      $(".upload-hotel-file1").val(commu_file2);
    });
    $("#hotel-file2").on('change',function(){
      var commu_file3 = $("#hotel-file2").val();
      $(".upload-hotel-file2").val(commu_file3);
    });
    $("#hotel-file3").on('change',function(){
      var commu_file2 = $("#hotel-file3").val();
      $(".upload-hotel-file3").val(commu_file2);
    });
    $("#hotel-file4").on('change',function(){
      var commu_file2 = $("#hotel-file4").val();
      $(".upload-hotel-file4").val(commu_file2);
    });

    //투어등록페이지

    $("#tour-thumbnail-file").on('change',function(){
      var commu_file2 = $("#tour-thumbnail-file").val();
      $(".upload-tour-thumbnail").val(commu_file2);
    });    
    
    //패스트트랙
    $("#fasttrack-thumbnail-file").on('change',function(){
      var commu_file2 = $("#fasttrack-thumbnail-file").val();
      $(".upload-fasttrack-thumbnail").val(commu_file2);
    });

  } else {  
    // 768px 미만에서 사용할 JavaScript
  }
  //  resize reload
  window.addEventListener("resize", () => {});

}); 
