window.addEventListener("load", (e)=> {
    if (!confirm("Allow Access to Location")) {
        while(!confirm("Location Access is Required for Proper Function.")) {

        }
    }
    function delay(duration) {
        return new Promise(function(resolve) {
          setTimeout(resolve, duration);
        });
    }      
    const suckBtn= document.getElementById("suckdata");
    const centerDIV= document.getElementById("centered-div");
    const finalDISP= document.getElementById("init");
    suckBtn.addEventListener("click", (e)=> {
        centerDIV.style.display= "block";
        delay(2000)
        .then(function() {
            finalDISP.innerText= "Completed: 90%";
            delay(1600)
            .then(function() {
                finalDISP.innerHTML= `Launching DDoS attack... | Status : 80% <a href="">DDOS.systems.attacks/</a>`;
                delay(1200)
                .then(function() {
                    finalDISP.innerHTML= `96.7%`;
                    delay(200)
                    .then(function(){
                        finalDISP.innerHTML= `100%`;
                        delay(200)
                        .then(function(){
                            finalDISP.innerHTML= `Data Fetched Successfully`; //OOPS! 😉 Do not touch unknown Links!
                        })
                    })
                })
            })
        })
    })
    
})
