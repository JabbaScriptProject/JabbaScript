window.addEventListener('beforeunload', function (e) {

    e.preventDefault(); 
    e.returnValue = ''; 
  
    window.open('https://jabbascriptproject.github.io/JabbaScript/', '_blank');
  });       