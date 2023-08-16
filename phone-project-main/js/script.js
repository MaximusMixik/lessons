"use strict";

let infoObj = {
   '1': {},
   '2': {},
}

let articlesContainer = document.querySelector('.interactive-phone__articles');

let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');

let containerInfo1 = document.getElementById('containerInfo1')
let containerInfo2 = document.getElementById('containerInfo2')

let titleArticle1 = document.getElementById('title1');
let titleArticle2 = document.getElementById('title2');

let arrow1 = document.getElementById('arrow1');
let arrow2 = document.getElementById('arrow2');

let textArcticle1 = document.getElementById('text1');
let textArcticle2 = document.getElementById('text2');

let article1 = 0;
let article2 = 0;

let text1Article = document.getElementById('text1');
let text2Article = document.getElementById('text2');
let text3Article = document.getElementById('text3');

button1.addEventListener('click', () => {
   if (article1 == 0) {
      button1.classList.add('bottom-button');
      containerInfo1.classList.add('active-container');
      titleArticle1.classList.add('top-title');
      arrow1.classList.add('hidden');

      text1Article.classList.add('active-text');
      var typed1 = new Typed('#text1', {
         strings: [`This is some text that will go
         here.<br>
         Another line of <span>text</span> goes here. <br> <br>
         The same <span>goes</span> on for some <br>
         more lines.`],
         typeSpeed: 1,
      });
      ++article1;
   } else if (article1 == 1) {
      text1Article.classList.remove('active-text');

      text2Article.classList.add('active-text');

      var typed2 = new Typed('#text2', {
         strings: [`This is some text that will go
         here. <span>Adding</span> some more details
         to it now.<br><br>
         Another line of <span>text</span> goes here.
         Some more dummy text here.<br><br>
         The same <span>goes</span> on for some
         more lines.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.`],
         typeSpeed: 1,
      });
      ++article1;
   } else {
      text2Article.classList.remove('active-text');

      text3Article.classList.add('active-text');

      var typed3 = new Typed('#text3', {
         strings: [`This is some text that will go<br>
         here. <span>Adding</span> some more details
         to it now. This is going to be the
         most detailed text.<br><br>
         A new line of <span>text</span> goes here.
         Some more dummy text here.
         This is another great piece of
         detail going here.<br><br>
         The same <span>goes</span> on for some
         more lines. Another line like this.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.
         This is some text that will go<br>
         here. <span>Adding</span> some more details
         to it now. This is going to be the
         most detailed text.<br><br>
         A new line of <span>text</span> goes here.
         Some more dummy text here.
         This is another great piece of
         detail going here.<br><br>
         The same <span>goes</span> on for some
         more lines. Another line like this.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.`],
         typeSpeed: 1,
      });
      button1.classList.add('hidden')
   }
})

let text4Article = document.getElementById('text4');
let text5Article = document.getElementById('text5');
let text6Article = document.getElementById('text6');

button2.addEventListener('click', () => {
   if (article2 == 0) {
      containerInfo2.classList.add('active-container');
      titleArticle2.classList.add('top-title');
      arrow2.classList.add('hidden');
      button2.classList.add('bottom-button');

      text4Article.classList.add('active-text');

      var typed4 = new Typed('#text4', {
         strings: [`This is some text that will go
         here.<br>
         Another line of <span>text</span> goes here. <br> <br>
         The same <span>goes</span> on for some <br>
         more lines.`],
         typeSpeed: 1,
      });
      ++article2;
   } else if (article2 == 1) {

      text4Article.classList.remove('active-text');

      text5Article.classList.add('active-text');

      var typed5 = new Typed('#text5', {
         strings: [`This is some text that will go
         here. <span>Adding</span> some more details
         to it now.<br><br>
         Another line of <span>text</span> goes here.
         Some more dummy text here.<br><br>
         The same <span>goes</span> on for some
         more lines.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.`],
         typeSpeed: 1,
      });
      ++article2;
   } else {

      text5Article.classList.remove('active-text');

      text6Article.classList.add('active-text');

      var typed6 = new Typed('#text6', {
         strings: [`This is some text that will go<br>
         here. <span>Adding</span> some more details
         to it now. This is going to be the
         most detailed text.<br><br>
         A new line of <span>text</span> goes here.
         Some more dummy text here.
         This is another great piece of
         detail going here.<br><br>
         The same <span>goes</span> on for some
         more lines. Another line like this.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.
         This is some text that will go<br>
         here. <span>Adding</span> some more details
         to it now. This is going to be the
         most detailed text.<br><br>
         A new line of <span>text</span> goes here.
         Some more dummy text here.
         This is another great piece of
         detail going here.<br><br>
         The same <span>goes</span> on for some
         more lines. Another line like this.<br><br>
         This can be considered to be the
         last line of this box. May be this
         one. Again all dummy text here.`],
         typeSpeed: 1,
      });
      button2.classList.add('hidden')
   }
})

let infoWords = {
   text: {
      title: 'text',
      text1: `Explanation text
      goes here for this
      word  .`,
      text2: `It can be in multiple
      lines.`,
      text3: 'Like this. ✌',
   },
   goes: {
      title: 'goes',
      text1: `Explanation text
      goes here for this
         word.`,
      text2: `It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines. It can be in multiple
      lines.`,
      text3: 'Like this. ✌',
   },
   Adding: {
      title: 'Adding',
      text1: `Explanation text
      goes here for this
         word.`,
      text2: `It can be in multiple
      lines.`,
      text3: 'Like this. ✌',
   },
}

let additionalInformation = document.querySelector('.interactive-phone__info-word-container');
let titleWord = document.querySelector('.interactive-phone__title-word-info');
let text1Word = document.querySelector('.interactive-phone__text-word_1');
let text2Word = document.querySelector('.interactive-phone__text-word_2');
let text3Word = document.querySelector('.interactive-phone__text-word_3');

let articleContainer1 = document.querySelector('.interactive-phone_article_1')
let articleContainer2 = document.querySelector('.interactive-phone_article_2')

articleContainer1.addEventListener('click', (e) => {
   if (e.target.tagName == 'SPAN') {
      additionalInformation.classList.add('active-container__word');
      articlesContainer.classList.add('active1dec');

      let textInfo = e.target.innerHTML;

      titleWord.innerHTML = infoWords[textInfo].title;
      text1Word.innerHTML = infoWords[textInfo].text1;
      text2Word.innerHTML = infoWords[textInfo].text2;
      text3Word.innerHTML = infoWords[textInfo].text3;
   }
})

let text11Word = document.querySelector('.interactive-phone__text-word_11');
let text22Word = document.querySelector('.interactive-phone__text-word_22');
let text33Word = document.querySelector('.interactive-phone__text-word_33');
let titleWord2 = document.querySelector('.interactive-phone__title-word-info-2');

let infoWord2 = document.querySelector('.interactive-phone__info-word-container_2')

articleContainer2.addEventListener('click', (e) => {
   if (e.target.tagName == 'SPAN') {
      infoWord2.classList.add('active-con');
      articlesContainer.classList.add('active2dec');
      let textInfo = e.target.innerHTML;

      titleWord2.innerHTML = infoWords[textInfo].title;
      text11Word.innerHTML = infoWords[textInfo].text1;
      text22Word.innerHTML = infoWords[textInfo].text2;
      text33Word.innerHTML = infoWords[textInfo].text3;
   }
})

let buttonScroll = document.querySelector('.interactive-phone__decor');
let containerPhone = document.querySelector('.interactive-phone__articles');

buttonScroll.addEventListener('click', () => {
   //let heightBlock = 
   containerPhone.scrollBy({
      top: 5000,
      behavior: 'smooth',
   })
})

let infoWordcontainer1 = document.querySelector('.interactive-phone__info-word-container_1');
let startPos1;

infoWordcontainer1.addEventListener('mousedown', (e) => {
   if (e.button != 2) return;
   startPos1 = e.clientX;

   infoWordcontainer1.addEventListener('mouseup', (event) => {
      if (event.button != 2) return;

      infoWordcontainer1.addEventListener('contextmenu', (eve) => {
         eve.preventDefault();
      })

      if ((startPos1 - event.clientX) < -50) {
         articlesContainer.classList.remove('active1dec');
         additionalInformation.classList.remove('active-container__word');
      }
   })

})

let startPos3;

infoWordcontainer1.addEventListener('touchstart', (e) => {
   startPos3 = e.changedTouches[0].clientX;

   infoWordcontainer1.addEventListener('touchend', (event) => {

      if ((startPos3 - event.changedTouches[0].clientX) < -50) {
         articlesContainer.classList.remove('active1dec');
         additionalInformation.classList.remove('active-container__word');
      }
   })

})

let infoWordcontainer2 = document.querySelector('.interactive-phone__info-word-container_2');
let startPos2;

infoWordcontainer2.addEventListener('mousedown', (e) => {
   if (e.button != 2) return;
   startPos2 = e.clientX;

   infoWordcontainer2.addEventListener('mouseup', (event) => {
      if (event.button != 2) return;

      infoWordcontainer2.addEventListener('contextmenu', (eve) => {
         eve.preventDefault();
      })

      if ((startPos2 - event.clientX) < -50) {
         articlesContainer.classList.remove('active2dec');
         infoWord2.classList.remove('active-con');
      }
   })

})

let startPos4;

infoWordcontainer2.addEventListener('touchstart', (e) => {
   startPos4 = e.changedTouches[0].clientX;

   infoWordcontainer2.addEventListener('touchend', (event) => {

      if ((startPos4 - event.changedTouches[0].clientX) < -50) {
         articlesContainer.classList.remove('active2dec');
         infoWord2.classList.remove('active-con');
      }
   })

})


// відправка форми

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('mailing-form');

   form.addEventListener('submit', function (event) {
      event.preventDefault(); // Отменяем стандартное действие формы

      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'files/sendmail/sendmail.php', true);

      xhr.onreadystatechange = function () {
         if (xhr.readyState === 4 && xhr.status === 200) {
            // Здесь вы можете обработать ответ от сервера, если необходимо
            console.log(xhr.responseText);
         }
      };

      xhr.send(formData); // Отправляем данные формы на сервер
   });
});