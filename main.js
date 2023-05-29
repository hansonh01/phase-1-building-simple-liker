// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likedGlyph = document.querySelectorAll('.like-glyph')
const heartValues = {
  '♡':'♥',
  '♥':'♡'
}
for (const glyph of likedGlyph){
  glyph.addEventListener('click',()=>{
    mimicServerCall()
    .then((message)=>{
      alert(message);
      glyph.innerText = heartValues[glyph.innerText];
      if (glyph.classList.contains('activated-heart')){
        glyph.classList.remove('activated-heart');
      } else{
        glyph.classList.add('activated-heart');
      };
    })
    .catch((error)=>{
      alert(error);
      document.querySelector('#modal').classList.remove('hidden');
      setTimeout(()=>{
        document.querySelector('#modal').classList.add('hidden');
      },3000);
    })
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
