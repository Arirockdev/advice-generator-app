const idNumber = document.getElementById('id-number');
const quoteSentence = document.querySelector('#quote q');
const btn = document.querySelector('#btn');

const apiQuote = async () => {
  
  try {

    const apiFecht = await fetch('https://api.adviceslip.com/advice');
    const data = await apiFecht.json(); 

    print(data);

  }catch {
    console.log('error');
    error();


  }finally {
    console.log('Fin de ejecucion de la app');
  }
 
}
apiQuote();

function print(data){
    let id = data.slip.id;
    let quote = data.slip.advice;

    
    idNumber.append(id);

    quoteSentence.append(quote);

 
}


const container = document.querySelector('.container');
const errorConainer = document.querySelector('.error');

function error (){
  if(error){
    container.classList.add('disable');
    errorConainer.classList.remove('disable');
  }else{
    container.classList.remove('disable');
    errorConainer.classList.add('disable');
  }
}

btn.addEventListener('click', (e) => {
  apiQuote();
  idNumber.textContent = '';
  quoteSentence.textContent = '';
});

