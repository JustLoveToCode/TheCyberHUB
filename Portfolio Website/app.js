const sections = document.querySelectorAll('.section');
// This is the parent div with all the control div inside the parent div
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// Creating the functionality of PageTransitions
function PageTransitions(){
    // Button Click active class
    // Using the for loop to loop through the sectBtn.length()
    // Let the initial i be 0, when i is less than sectBtn.length,
    // increment the i by 1
    // This will loop through the div with the control class
    for (let i = 0; i < sectBtn.length; i++){
        // Adding the EventListener to each of the sectBtn
        sectBtn[i].addEventListener('click',function(){
            // Once it find the addEventListener 'click'
            // It will then find the .active-btn class and
            // store it in the currentBtn
            // When the button is clicked, add the active-btn class to that btn
            let currentBtn = document.querySelectorAll('.active-btn');
            // When the next button is clicked, remove the active-btn class
            // and replaced them using the replace keyword and trim keyword
            // currentBtn[0] refer to the Button with the active-btn
            currentBtn[0].className= currentBtn[0].className.replace('active-btn','').trim();
            // and replace the className with the active-btn control control-1
            // this keyword refer to the Specific element that trigger the click event
            // This is when you actually click onto the next Button
            this.className = 'active-btn control control-1';
        })
    }

    // Section active class
    // Using the addEventListener to listen for click EventListener
    allSections.addEventListener('click', (e)=>{
        // This is the element that we give data-id
        // We get the id from that particular dataset-id:
        const id = e.target.dataset.id;
        // If the id actually exist
        if(id){
            console.log(id)
            //Remove Selected from the Other
            // Using the forEach method to Loop through the Button
            sectBtns.forEach((btn)=>{
                // Having the classList removing the 'active'
                // from the btn
                btn.classList.remove('active');
            });
            // Adding the active class into the clicked element
            e.target.classList.add('active');

            // Hide Other Sections
            sections.forEach((section)=>{
                // Remove the classList of active here
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            // Add the classList of active Here
            element.classList.add('active');
        }
    })

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');

    themeBtn.addEventListener('click', () => {
        // Select the body element
        let element = document.body;
        // Toggle Between the light and dark mode
        // It add the class if it is not present
        // and remove if it is.
        // Hence, if it is light-mode, clicking it
        // will toggle to dark-mode and if it is dark-mode
        // toggle it will change to light-mode
        element.classList.toggle('light-mode');
        element.classList.toggle('dark-mode');
    
        // Changing the Icon Based on the Theme
        if (element.classList.contains('dark-mode')) {
            // Sun Icon for Dark Mode
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>'; 
        } else {
            // Moon Icon for Light Mode
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>'; 
        }
    });
}

// Invoking the Function PageTransitions()
PageTransitions()