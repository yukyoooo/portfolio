$(function(){



  // トップへ戻るボタン
  $('.top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });


  // ヘッダー内の<a>タグをクリックしたときのclickイベントを作成してください。

  $('header a').click(function(){
  var id = $(this).attr('href');              //クリックしたボタンの飛び先取得
  var position =$(id).offset().top; //飛び先の最上部からの距離取得
  $('html, body').animate({'scrollTop': position}, 500);
});



$('.effect-move').css("opacity","0");　//アニメーションの対象となる.effect divと .effect iの表示を消します。
$(window).scroll(function (){                 //スクロールした際に.effectごとに、これ以下に記述する内容が実行されます。
  $(".effect").each(function(){
    var imgPos = $(this).offset().top;      //変数を指定します。imgPosは、.effectの位置、scrollはスクロールした量、windowHeightはウインドウの高さです。
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight/5){ //アニメーションする条件になります。.effectが画面の下から1/5のところまでスクロールする、というのが条件になります。
      $(".effect-move",this).css({
        "opacity":"1",
        "margin-top": "0px"
      });
    } else {
      $(".effect-move",this).css({
        "opacity":"0",
        "margin-top":"110px"
      });
    }
  });
});




window.addEventListener('load', function () {
   sliderStart();
});

function sliderStart() {

    const slide = document.getElementById('slide_wrapp');      //スライダー親
    const slideItem = slide.querySelectorAll('.slide_item');   //スライド要素
    const totalNum = slideItem.length - 1;                     //スライドの枚数を取得
    const FadeTime = 2000;                                     //フェードインの時間
    const IntarvalTime = 5000;                                 //クロスフェードさせるまでの間隔
    let actNum = 0;                                            //現在アクティブな番号
    let nowSlide;                                              //現在表示中のスライド
    let NextSlide;                                             //次に表示するスライド

    // スライドの1枚目をフェードイン
    slideItem[0].classList.add('show_', 'zoom_');

    // 処理を繰り返す
    setInterval(() => {
        if (actNum < totalNum) {

            let nowSlide = slideItem[actNum];
            let NextSlide = slideItem[++actNum];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        } else {

            let nowSlide = slideItem[actNum];
            let NextSlide = slideItem[actNum = 0];

            //.show_削除でフェードアウト
            nowSlide.classList.remove('show_');
            // と同時に、次のスライドがズームしながらフェードインする
            NextSlide.classList.add('show_', 'zoom_');
            //フェードアウト完了後、.zoom_削除
            setTimeout(() => {
                nowSlide.classList.remove('zoom_');
            }, FadeTime);

        };
    }, IntarvalTime);

}

// ポートフォリオおしたら表示
$('#portfolio-1-show').click(function(){  //clickイベントでモーダルを表示
  $('#portfolio-1-modal').fadeIn();
});
$('#portfolio-2-show').click(function(){  //clickイベントでモーダルを表示
  $('#portfolio-2-modal').fadeIn();
});
// 「.close-modal」要素にclickイベントを設定してください
    $('.close-modal').click(function(){
    $('#portfolio-1-modal').fadeOut();
    $('#portfolio-2-modal').fadeOut();
    $('#portfolio-3-modal').fadeOut();
  });


// フォームの入力部分をおすと表示（名前メアドメッセージ）が小さくなる
$('.contact-name').click(function(){
  $('.label-name').animate({
    'font-size':'5px'
}, 150);
});

$('.contact-email').click(function(){
  $('.label-email').animate({
    'font-size':'5px'
}, 150);
});

$('.contact-message').click(function(){
  $('.label-message').animate({
    'font-size':'5px'
}, 150);
});





});
