$(function(){



  // トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html,body').animate({
      'scrollTop': 0
    }, 'slow');
  });
  $('#top-btn2').click(function(){
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
});
