var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var briefInput = document.getElementById('brief')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var htmlPreviewName = document.getElementById('htmlPreview-name')
var htmlPreviewDescribe = document.getElementById('htmlPreview-describe')
var htmlPreviewEmail = document.getElementById('htmlPreview-email')
var htmlPreviewPhone = document.getElementById('htmlPreview-phone')
var codePreviewName = document.getElementById('codePreview-name')
var codePreviewDescribe = document.getElementById('codePreview-describe')
var codePreviewEmail = document.getElementById('codePreview-email')
var codePreviewPhone = document.getElementById('codePreview-phone')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var brief = briefInput.value
  var email = emailInput.value
  var phone = phoneInput.value

  htmlPreviewName.innerHTML =
    'Hi, my name is ' + firstName + ' ' + lastName + '!'

  htmlPreviewDescribe.innerHTML =
    brief

  htmlPreviewEmail.innerHTML =
    email

  htmlPreviewPhone.innerHTML =
    phone

  codePreviewName.textContent =
    'Hi, my name is ' + firstName + ' ' + lastName + '!'

  codePreviewDescribe.textContent =
    brief

  codePreviewEmail.textContent =
    email

  codePreviewPhone.textContent =
    phone
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
briefInput.addEventListener('input', updatePreview)
emailInput.addEventListener('input', updatePreview)
phoneInput.addEventListener('input', updatePreview)
