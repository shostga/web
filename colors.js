var Links = {
  setColor:function (color){
    // var linksArray = document.querySelectorAll('a');
    // for (var i = 0; i < linksArray.length; i++) {
    //   linksArray[i].style.color=color;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color=color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){
  if(self.value === 'night'){
    Body.setColor('white');
    Body.setBackgroundColor('black');
    self.value = 'day';
    Links.setColor('powderblue');
  }else{
    Body.setColor('black');
    Body.setBackgroundColor('white');
    self.value = 'night';
    Links.setColor('blue');
  }
}
