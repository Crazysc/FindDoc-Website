

function check_contact()
{
    var name= document.getElementById("nam").value;
    var email= document.getElementById("em").value;
    var val=0;

    

    button.addEventListener('click', () => {
        let rates = document.getElementsByName('rate');
        rates.forEach((rate) => {
            if (rate.checked) {
                //output.innerText = `You selected: ${rate.value}`;
                val++;
            }
        });

    });

    var emas1= email.split("@");
    var em1= emas1[0];
    var emm= emas1[1];
    var emas2= emm.split(".");
    var em2= emas2[0];
    var em3= emas2[1];
}