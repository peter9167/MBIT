function scrollUP(){ // UP(다음) 버튼을 클릭했을 때 발생 코드
    const vheight = $('.test').height(); // class test 높이 호출, 호출 값 vheight 저장
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) - 1) * vheight) 
        //$(window).scrollTop() : 상단에 있는 픽셀 위치 반환
    }, 500);
}

function scrollDown(){
    const vheight = $('.test').height();
    $('html, body').animate({
        scrollTop: ((Math.floor($(window).scrollTop() / vheight) + 1) * vheight)
    }, 500);
}

$(function(){
    $('.next_btn').click(function(e){
        let divs = $(this).parent().prev().children() // 버튼을 감싸고 있는 div 태그의 이전 태그, 즉 문항들을 감싸고 있는 또 다른 div 태그
        let inputs = divs.find('input:checked')
        if(inputs.length < 1){
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        e.preventDefault();
        scrollDown();
    });

    $('.prev_btn').click(function(e){
        e.preventDefault();
        scrollUP();
    });

    $('#form').submit(function(e){
        let radios = $('input[type=radio]:checked')
        if(inputs.length < 3){
            alert('문항이 선택되지 않았습니다.');
            return false;
        }
        return true;
    });

    $('html, body').animate({
        scrollTop: 0
    }, 500);
});