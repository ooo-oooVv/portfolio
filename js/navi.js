// $(function(){
//     $('#allBtn').click(function(){
//         $(this).toggleClass('xi-close  text-success'); //클래스명 두개 들어갈 땐 띄어쓰기로 구분
//     })

//     var navitag = '';

//     $('gnb').html(naviti) //gnd에 상세 네비제작 가이드

// })

$(function(){

    // 프로그래밍전에 제이쿼리 손상여부확인하기.
    $('body').addClass('ccccc');

    $('#allBtn').click(function(){ //전체버튼 클릭 시
        $(this).toggleClass('xi-close'); //xeicon의 'xi-close'클래스를 삽입, 삭제 해라.
    })

    // $('#gnb a').eq(0).html( //#gnb a 의 첫번째 객체 html에 넣어라.
    //     $('skill h2').html()) // #skill h2 객체의 html 내용을 

    // 정렬, array, each 구문 사용하기. 
    
    // // 방법1)
    // var navitxt = [
    //     $('#skill h2').html(),
    //     $('#portfolio h2').html(),
    //     $('#interview h2').html(),
    //     $('#sns h2').html(),
    // ]

    // $('gnb a').eq(0).html(navitxt[0])
    // $('gnb a').eq(1).html(navitxt[1])
    // $('gnb a').eq(2).html(navitxt[2])
    // $('gnb a').eq(3).html(navitxt[3])

    // // 방법2)
    var navitxt = [
        $('#skill h2').html(),
        $('#portfolio h2').html(),
        $('#interview h2').html(),
        $('#sns h2').html()
    ]

    $('#gnb a').each(function(index, item){ 
        //each는 매개인자(변수 두개) 있음. 
        //첫번째 자리는 변수, 순번값을 받는 인자. 
        // 두번째 자리가 그 실행 객체. (=this와 같은 의미.)
        $(item).html(navitxt[index])
    })

        // 방법3)
        // 태그에서 값을 관리하도록 해야함!

        $('#gnb a').click(function(e){ // 매개인자 e (이벤트를 의미함.)
            e.preventDefault(); 
            // 기본 기능 막아라.(a, input, select 등 자체 기능이 있는 태그가 선택자가 되었을 때 사용.)
            // 이벤트 객체(브라우저)가 갖고 있는 메서드임.
            // animate({스타일}, 스피드, 애니메이션끝나고 처리할 실행문)
            // body 상단 위치로부터 객체 top or left 위치 까지 계산하는것.
            // $(this).attr('href') == #skill, #interview.....의 값의 선택자화 하기위해 $() 씌운다
            $('body, html').animate({ //body or html은 애니매이션을 해라.
                scrollTop : $( $(this).attr('href') ).offset().top // $(this) -> 클릭한 #gnb a
        },400, function(){}); 
        // $(this) -> $(body, html)
        });
    })

