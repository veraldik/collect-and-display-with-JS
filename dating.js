var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var briefInput = document.getElementById('brief')
var htmlPreview = document.getElementById('htmlPreview')

var updatePreview = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var brief = briefInput.value

  htmlPreview.innerHTML =
    'There once were three ' +
    '<strong>' + firstName + '</strong> ' +
    'that were very ' +
    '<strong>' + lastName + '</strong> ' +
    'because they couldn\'t stop ' +
    '<strong>' + brief + '</strong> ' +
    'all day.'
}

firstNameInput.addEventListener('input', updatePreview)
lastNameInput.addEventListener('input', updatePreview)
briefInput.addEventListener('input', updatePreview)
