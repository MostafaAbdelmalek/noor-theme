jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{ variant.id }}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });
});

// Create the button element
const backButton = document.createElement('button');
backButton.textContent = '← Back';
backButton.style.position = 'fixed';
backButton.style.left = '40px';
backButton.style.top = '150px';
backButton.style.padding = '8px 16px';
backButton.style.color = '#000';
backButton.style.backgroundColor = '#f0f0f0';
backButton.style.border = '1px solid #ccc';
backButton.style.borderRadius = '4px';
backButton.style.cursor = 'pointer';
backButton.style.zIndex = '1000';
backButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
backButton.classList.add("backbutton");
// Add hover effect
backButton.style.transition = 'background-color 0.3s';
backButton.onmouseover = function() {
    this.style.backgroundColor = '#e0e0e0';
};
backButton.onmouseout = function() {
    this.style.backgroundColor = '#f0f0f0';
};

// Add click handler to go back
backButton.onclick = function() {
    window.history.back();
};

// Add the button to the body
document.body.appendChild(backButton);
