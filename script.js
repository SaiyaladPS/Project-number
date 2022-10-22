const numberInput = document.querySelector('#inputId');
const divShow = document.querySelector('#show');

function selectnumber () {
    const number = Number(numberInput.value)
    divShow.innerHTML = '';

    if (number != 0) {
        for(let i =1; i<=10; i++) {
            divShow.innerHTML += `<div>${number} x ${i} = <p class='text-danger d-inline'>${(number * i)}</p></div>`;
            divShow.className = 'box bg-dark text-light p-3 mt-2';
        }
    }  else {
        divShow.innerHTML = "<div class='alert alert-danger'>ຂໍ້ມູນນີ້ບໍ່ສາມາດຄູນໄດ້</div>"
    }
    
}
  numberInput.addEventListener('keyup', selectnumber);