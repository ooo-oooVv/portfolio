$(document).ready( //html 화면에 세팅이 다 되었다, 브라우저가 html 태그를 다 읽어냈다. 
    // 이벤트(시점, 목적어), 선택자(주어), 메서드(동사)
    
    // function(){ //실행해라.
    //     // html -> 태그를 가져오고나 초기화하고, 삽입함.
    //     // append(뒤에), prepend(앞에) -> 화면에 뭔가 출력하기. 
    //     $('p').html($('h2').html()) // 네비게이션에서 가장 많이 씀.
    // }

    // addClass, removeClass, toggleClass -> js가 아주아주 간단해지는 메서드. css를 잘 다뤄야 쓸 수 있음. 
    function(){
    $('main > section.title').each( //선택자 잘 이해해야 쓸데없는 if, else, for 이런거 안써도 됨.
        function(){
            // $(this).prepend($(this).data('title')) //prepend란 선택자의 첫번째 자식객체로 삽입
            $(this).prepend('<h2>'+$(this).data('title')+'</h2>') //prepend란 선택자의 첫번째 자식객체로 삽입
        }
    );
    }
)

