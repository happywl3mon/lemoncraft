function testWindowSize() {
  if ((window.screen.width / window.screen.height) < 0.75) {
    document.body.innerHTML = '<div class="header"><img alt="LemonCraft icon" src="lmc.jpg"> &nbsp;<strong>LemonCraft</strong> </div><div class="container"><br><br><br><h1>Упс!</h1><p>Ваш экран слишком <strong>мал для отображения</strong> контента сайта. Пожалуйста, переверните экран своего устройства и перезагрузите страницу.</p>'
  }
  return window.screen.width / window.screen.height
}

testWindowSize()
