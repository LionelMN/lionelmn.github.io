/**************************************************NAVBAR**************************************************/
window.addEventListener("scroll", function(){
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
  })
/**********************************************************************************************************/
/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

/**************************************************EMAIL**************************************************/
function validate(){
    let errors = false;
    let msgError = "";
    if (!document.form.email.value) {
        errors = true;
        msgError += "Ooops don't forget your email."
    }
    if (!document.form.subject.value) {
        errors = true;
        msgError += " Please, tell me what you want."
    }
    if (!document.form.body.value) {
        errors = true;
        msgError += ""
    }
    if(!errors){
        send()
    } else {
        document.getElementById("contact-form__errors").innerHTML=msgError;
    }
}

function send(){
  Email.send({
      SecureToken : 'c2f3abdb-4248-4f4f-aa3e-c02389ede1c8',
      To: `lionelmontesnuez@gmail.com`,
      From: `${document.form.email.value}`,
      Subject: `${document.form.subject.value}`,
      Body: `${document.form.body.value}`
    }).then(
      document.getElementById("contact-form__errors").innerHTML="Email sent succesfuly"
    );
}
/*********************************************************************************************************/

/**************************************************MODAL**************************************************/
// Open the Modal
function openModal(modal) {
    document.getElementById(`myModal${modal}`).style.display = "block";
  }

  // Close the Modal
  function closeModal(modal) {
    document.getElementById(`myModal${modal}`).style.display = "none";
  }

  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
/*********************************************************************************************************/