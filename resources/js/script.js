function changeHeader() {
    // Accede al elemento con id 'header'
    const header = document.getElementById('header');
    // Cambia el contenido de texto del elemento
    header.textContent = 'Hello, DOM!';
    // Cambia el color del texto
    header.style.color = 'blue';
  }
  
  function changeHelloWorld(){
    const header = document.getElementById('header');
    header.textContent = 'Hello, World!';
    
    header.style.color = 'black';
  }

  function changeHelloWorldDOM(){
    const header = document.getElementById('header');
    header.textContent = 'Hello, World! Hello, DOM';
    
    header.style.color = 'black';
  }