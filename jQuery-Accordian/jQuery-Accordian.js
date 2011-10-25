var accordian = {

  init : function(el) {
  
    //Variables
    accordian.activeClass = "active";
    accordian.accHeaderClass = "accHeader";
    accordian.accContentClass = "accContent";
  
    //Cache selectors
    accordian.accHeader = el.find("." + accordian.accHeaderClass);
    accordian.accContent = el.find("." + accordian.accContentClass);
  
    //Hide all our content    
    accordian.accContent.hide();
    
    //Attach click handlers
    accordian.accHeader.click(function() {
      
      //Cache selectors
      $el = $(this).parent();
        
      //Open this accordian
      accordian.open($el);
      
      //Close accordian
      //accordian.close();
      
    });
  
  },
  
  open : function(el) {
    
    //If current element is active we need to close it
    if (el.hasClass(accordian.activeClass)) {
      
      accordian.close(el);
      
    } else {
      
      //If there is active content
      if(accordian.active) {
        
        //Close the active content
        accordian.close(accordian.active);
        
      }
    
      //Store the active element
      accordian.active = el;
      
      //Add a classname for styling
      el.addClass(accordian.activeClass);
      
      //Display the content
      el.find("." + accordian.accContentClass).slideDown("fast");
    
    }
    
    
  },
  
  close : function(el) {
  
    //Remove active class
    el.removeClass(accordian.activeClass);
    
    //Hide content
    el.find("." + accordian.accContentClass).slideUp("fast");
  
  }

}