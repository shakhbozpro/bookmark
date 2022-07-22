var elFuturesItem = document.querySelectorAll(".features__item");
var elFuturesLink = document.querySelectorAll(".features__link");
var elFuturesInfo = document.querySelectorAll(".features-info");

elFuturesLink.forEach(function(link){
   link.addEventListener("click" , function(evt){
      evt.preventDefault();
      
      elFuturesItem.forEach(function(item){
         item.classList.remove("features__item--active");
      })
      
      link.parentElement.classList.add("features__item--active");
      
      elFuturesInfo.forEach(function(info){
         info.classList.remove("features-info--active");
      })
      
      document.querySelector(link.getAttribute("href")).classList.add("features-info--active");
   })
})