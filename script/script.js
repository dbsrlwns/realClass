// eslint-disable

$(function (){
    // gnb 메뉴
    $(".mainLi:first-child").mouseover(function (){
        $("#subMenu").show();
        $(".subBG").show();
        $(this).addClass("active");
    });
    $(".mainLi:first-child").mouseout(function (){
        $("#subMenu").hide();
        $(".subBG").hide();
        $(this).removeClass("active");
    });

    // 입력 포커스
    $("#email").focus();
    
    // 전체선택
    $("#all").click(function (){
        $(".ag").prop('checked', this.checked);
    });
    
    let wholeChk = false;
    // 역선택
    $('.ag').click(function (){
        let len = $('.ag').length;
        let trueCnt = 0;
    
        for(let i=0;i<len;i++){
            let revChkTF = $(".ag").eq(i).prop("checked");
            if(revChkTF){
                trueCnt++;
            }
        }
        if(trueCnt == len){
            wholeChk = true;
        } else {
            wholeChk = false;
        }
        $("#all").prop("checked", wholeChk);
    });

    // 입력창 포커스 아웃
    $(".int-area > input").focusout(function (){
        if($(this).val()==''){
            $(this).siblings("label").css({"color":"#f00"});
            $(this).css({"border-bottom-color":"#f00"});
        } else {
            $(this).siblings("label").css({"color":"#2bde8a"});
            $(this).css({"border-bottom-color":"#2bde8a"});
        }
    });

    $("#email").keyup(function(){
        var email = $(this).val();
        var index = email.indexOf("@");

        if(email == ""){
            $(this).siblings("p").text("이메일을 입력해주세요.");
        }  else if(index < 0){
            $(this).siblings("p").text("이메일 형식이 아닙니다.");
            $(this).siblings("label").css({"color":"#f00"});
        }  else {
            $(this).siblings("p").text("");
        }
    });

    $("#pw").keyup(function (){
        let pw = $(this).val();
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        if(pw.length < 10 | pw.length > 16){
            desc = "비밀번호는 10 ~ 16자 이내로 입력해 주세요.";
        } else if(pw.search(/\s/) != -1 || num < 0 || eng < 0 || spe < 0){
            desc = "영문, 숫자, 특수문자를 혼합하여 입력해 주세요.";
        } else {
            desc = "";
        }
        $(this).siblings("p").text(desc);
    });

    $("#phone").keyup(function (){
        let phone = $(this).val();
        if(phone == ""){
            $(this).siblings("p").text("번호을 입력해주세요.");
        } else {
            $(this).siblings("p").text("");
        }
    });
});