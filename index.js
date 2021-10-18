const CONFIG = {
    InTitle: 'chòi oi tớ cũng thích cậu á ',
    FBLink:'https://www.facebook.com/achin62135/ ',
    ConfirmBtnText: 'Yes',
    PopTitle: 'Hi cô giáo Nhỏ',
    PopText: 'Ngày hôm nay của em thấy thế nào ?',
    PopConfim: 'đừng bấm vào đây !!  ' ,
    MessText: 'nhắn tin với tớ nhá ',
   }
   $("#btnYes, #btnNo, #ED").hide();
   function stpopup(){
      Swal.fire({
         title: CONFIG.PopTitle,
         text: CONFIG.PopText ,
         confirmButtonText: CONFIG.PopConfim,
         imageUrl: './ptn.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
         backdrop: `
            rgba(0,0,123,0.4)
            url("img/nyan-cat.gif")
            left top
            no-repeat
                  `    
       }).then((result) => {
          play();
          $("#btnYes, #btnNo, #ED").show(2000);
       })
   }
   
   function yesClick() 
    {
      Swal.fire({
         title: CONFIG.InTitle,
         text: CONFIG.MessText,
         confirmButtonText: CONFIG.ConfirmBtnText,
         imageUrl: './ptn.jpg',
         imageWidth: 300,
         imageHeight: 300 ,
     }).then((result) => {
      if (result.isConfirmed) {
            window.location = CONFIG.FBLink;
      }
     })
   }
     
   function noHover()
    {
       var x = Math.floor(Math.random() * window.innerWidth);
       var y = Math.floor(Math.random() * window.innerHeight);
       document.getElementById("btnNo").style.left = x + "px";
       document.getElementById("btnNo").style.top = y + "px";
       document.getElementById("btnNo").style.transition = "0.3s";
   }
   
    function play() {
      var audio = new Audio('AG.mp3');
      audio.play();
   }
   
   