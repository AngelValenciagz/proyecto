import React, { Component } from 'react';
import './App.css';
import Alumno from '../src/alumno';
import Materias from '../src/materias'


  class App extends React.Component {
    constructor(props){
      super(props)
    }
    

      render() {
        return (
          
          <div>
            <script type="text/javascript">
        $(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal" 
            });

$('#dismiss, .overlay').on('click', function () { 
// hide sidebar
    $('#sidebar').removeClass('active'); 
//hide overlay 
    $('.overlay').removeClass('active');
});
    $('#sidebarCollapse').on('click', function () { 
// open sidebar 
    $('#sidebar').addClass('active'); 
// fade in the overlay
    $('.overlay').addClass('active'); 
    $('.collapse.in').toggleClass('in'); 
    $('a[aria-expanded=true]').attr('aria-expanded', 'false'); 
});
}); 
</script>
            
            <Alumno />
            <Materias />            
          </div>
          
          
        );
      }
    }

    export default App;