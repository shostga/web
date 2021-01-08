function makeContents(){  // 목차 생성
  var contents = ['HTML', 'CSS', 'JavaScript']
  var htmlName=1;
  for (var i = 0; i < contents.length; i++) {
    document.write('<li><a href="'+htmlName+'.html">' + contents[i] + '</a></li>')
    htmlName+=1;
  }
}
