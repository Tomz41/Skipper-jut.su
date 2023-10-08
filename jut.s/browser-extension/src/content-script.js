// Функция для перезагрузки страницы
function reloadPage() {
  location.reload();
}

// Проверка наличия ошибки 504 (Gateway Time-out)
function checkError() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', window.location.href, true);

  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 504) {
              // Если получена ошибка 504, перезагрузите страницу через 5 секунд
              setTimeout(reloadPage, 5000); // 5000 миллисекунд (5 секунд)
          }
      }
  };

  xhr.send();
}

// Проверяйте ошибку каждые 10 секунд (или другой интервал)
setInterval(checkError,5000); // 10000 миллисекунд (10 секунд)


const contain  = document.querySelector('.video_plate_title');
var checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = true
contain.appendChild(checkbox)
checkbox.style.opacity = 0



    if (checkbox.checked == true) {
        var videoPlayer = document.querySelector('video');
        setTimeout(function() {
            videoPlayer.play(); // Запустить воспроизведение видео после 3 секунд
          }, 2000);


            videoPlayer.addEventListener('timeupdate', function () {
              const wqe = document.querySelector('.vjs-overlay-bottom-left')
              if (!wqe.classList.contains('vjs-hidden')) {
                var mouseEnterEvent = new Event('mouseenter');
                if (wqe) {
                  wqe.dispatchEvent(mouseEnterEvent);   
                  var clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                  });
                  wqe.dispatchEvent(clickEvent);           
                }
              }
              
            })


            
    
          
              videoPlayer.addEventListener('progress', () => {
              const ppp = document.querySelector('.vjs-overlay-bottom-right')
              if (!ppp.classList.contains('vjs-hidden')) {
                var mouseEnterEvent = new Event('mouseenter');
                if (ppp) {
                  ppp.dispatchEvent(mouseEnterEvent); 
                  var clickEvent = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                  });            
                  ppp.dispatchEvent(clickEvent);        
                }

                
              }
            }); 
           
        }