var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var briefInput = document.getElementById('brief')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var htmlPreview = document.getElementById('htmlPreview')
var codePreview = document.getElementById('codePreview')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var brief = briefInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  htmlPreview.innerHTML =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + brief + '</p>' +
  '<p>If youre interested in a date, you can email me at' +
  '<a href="mailto:' + email + '" target="_blank">' + ' ' + email + ' ' + '</a>' +
  'or give me a call at' +
  '<a href="tel:' + phone + '" target="_blank">' + ' ' + phone + ' ' + '</a>' +
  '</p>'

  codePreview.textContent =
  '<h1>Hi, my name is ' + firstName + ' ' + lastName + '!</h1>' +
  '<p>' + brief + '</p>' +
  '<p>If youre interested in a date, you can email me at' +
  '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
  'or give me a call at' +
  '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>' +
  '</p>'
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
briefInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
