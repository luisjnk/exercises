Array.prototype.contains = function ( itemWhoIMLookingFor ) {
    for (i in this) {
        if (this[i] == itemWhoIMLookingFor) return true;
    }
    return false;
 }

var numUniqueEmails = function (emails) {
    let newMails = Array();
    emails.forEach(mail => {
        let emailSplited = mail.split('@');
        emailSplited[0] = emailSplited[0].split('.').join('')
        let strIndexOf = emailSplited[0].indexOf('+');
        if (strIndexOf !== -1) {
            emailSplited[0] = emailSplited[0].substr(0, strIndexOf);
        }
        const emailFormated = emailSplited.join('@');
        var contains  = newMails.contains(emailFormated)
        if(!contains)
            newMails.push(emailSplited.join('@'))
    });

    return newMails.length;
};



var emails =  ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
console.log(numUniqueEmails(emails));


/*let trim = (email) => {
    let trimmed = "";
    let ignore = false;
    let domain = false;
  
    for (let i = 0; i < email.length; i++) {
      if (email[i] === '@') domain = true;
      if (email[i] === '+') ignore = true;
      if (!ignore && email[i] !== '.' || domain) trimmed += email[i];
    }
    return trimmed;
  }
  
  let numUniqueEmails = (emails) => {
    return new Set(emails.map(email => trim(email))).size;
  }

  var emails =  ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
  console.log(numUniqueEmails(emails));*/