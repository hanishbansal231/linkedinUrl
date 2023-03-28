const linkedinUrlInput = document.querySelector('#url');

function checkLinkedinUrlValidity() {
  let icon = document.querySelector('i');
  const linkedinUrlPattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_\-]{5,30}[a-zA-Z0-9]?$/;
  const linkedinUrl = linkedinUrlInput.value;
  const isLinkedinUrlValid = linkedinUrlPattern.test(linkedinUrl);
  if(isLinkedinUrlValid){
    icon.style.visibility = 'visible';
    icon.style.color = 'green';
    icon.classList.add('fa-check')
  }else{
    icon.style.color = 'red';
    icon.classList.add('fa-xmark')
    icon.style.visibility = 'visible';
  }
}

linkedinUrlInput.addEventListener('keyup', checkLinkedinUrlValidity);