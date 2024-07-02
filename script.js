let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks ) {
        tablink.classList.remove("active-link");
    }
    for ( let tabcontent of tabcontents ) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

let sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right = "-200px";
}





  const scriptURL = 'https://script.google.com/macros/s/AKfycby2Psp3bfPJTXk8c0-g7PntBiBV_5_qsrPvzmirYbXkZhq7cqjToOnEIAg1gdBXZkRU/exec'
  const form = document.forms['submit-to-google-sheet']
    
    const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
                msg.innerHTML = "Message sent succesfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 1000)
                form.reset()
      } )
      .catch(error => console.error('Error!', error.message))
  })
