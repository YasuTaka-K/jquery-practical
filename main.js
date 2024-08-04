$(function() {
  
  //メイン画像のスライダー 
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false,
  });

  // リンクのホバー設定
  $("a, .item img").hover(function() {
    $(this).animate({"opacity": 0.6}, 300);
  },
  function() {
    $(this).animate({"opacity": 1.0}, 300);
  })

  // page topボタンの設定
  $(window).scroll(function (){
    if($(this).scrollTop() > 100){
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });

  // リンクスクロールをなめらかに
  $('a[href*="#"]').on('click', function() {
    const speed = 500;
    const href = $(this).attr("href");
    // let $target;
    // if(href == "#"){
    //   $target = $("html");
    // } else {
    //   $target = $(href);
    // }

    let $target = (href === "#" || href === "") ? $("html") : $(href);

    const position = $target.offset().top;

    $('html, body').animate({
      "scrollTop": position}, speed, 'linear');
    return false;
  });

  // スクロール時のフェードイン
  $(window).scroll(function (){
    $("section").each(function (){
      const elementTop = $(this).offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();
      const windowBottom = scrollTop + windowHeight;

      if(elementTop < windowBottom) {
        $(this).addClass("fade-in");
      }
    })
  });

  // modal
  $(".works img").click(function (){
    const imgSrc = $(this).attr("src");
    const imgAlt = $(this).attr("alt");
    $(".big-img").attr({
      src: imgSrc,
      alt: imgAlt
    });
    $(".modal").fadeIn();
  });

  // 閉じるボタンを押したらモーダルを閉じる
  $(".close-btn").click(function() {
    $(".modal").fadeOut();
  });
});