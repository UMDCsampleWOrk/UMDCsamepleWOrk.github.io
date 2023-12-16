 function Home(){
    window.location.href = 'index.html';
 }
 function AboutMe(){
    window.location.href = 'aboutme.html';
 }
 function Contact(){
    window.location.href = 'contact.html';
 }
 function Portfolio(){
    window.location.href = 'portfolio.html';
 }
 function Extra(){
    window.location.href = 'extra.html';
 }
 function FB(){
   window.location.href = 'https://www.facebook.com/limuelbobbisalarza05'
 }
 function IG(){
   window.location.href = 'https://www.instagram.com/bilpap%20/?fbclid=IwAR1SUXqwUhuIK90RmMpU4vphU8a71kGB19HiRAxHCh74Sc_5Ggz-EpTjZkc';
 }
 function EMAIL(){
   window.location.href ='mailto:<limuelsalarza@gmail.com>'
 }
function scal(value){
   console.log(value);
   switch (value) {
      case '0':
          window.location.href = 'sc.html';
          break;
      case '1':
          window.location.href = 'LF.html';
          break;
      case '2':
          window.location.href = 'rg.html';
          break;
      case '3':
          window.location.href = 'LFJ.html';
          break;
      case '4':
          window.location.href = 'resume.html';
          break;
      case '5':
          window.location.href = 'sc5.html';
          break;
      default:
          console.error('Invalid value:', value);
  }
}