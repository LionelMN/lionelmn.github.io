  function validate(){
      let errors = false;
      let msgError = "";
      if (!document.form.email.value) {
          errors = true;
          msgError += "Ooops don't forget your email."
      }
      if (!document.form.subject.value) {
          errors = true;
          msgError += "Please, tell me what you want."
      }
      if (!document.form.body.value) {
          errors = true;
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
        To: `lionelmontesnuez@gmail.com, ${document.form.email.value}`,
        From: 'lionelmontesnuez@gmail.com',
        Subject: `${document.form.subject.value}`,
        Body: `${document.form.body.value}`
      }).then();
  }