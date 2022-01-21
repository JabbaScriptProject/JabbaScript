var callback = function test() {
      
      // Log how the height increases to the console
      console.log(document.getElementById('infinite').style.height)
      
      // equivalent to $('#infinite') in jQuery
      var el = document.getElementById('infinite');
      var newHeight = document.getElementById('infinite').offsetHeight + 200;
      
      // Update the height property of the selected element
      el.style.height = newHeight + 'px';
      }
      
      window.addEventListener('scroll', callback, false);
//test
