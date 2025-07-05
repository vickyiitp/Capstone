// Wait until the entire HTML document is loaded and ready
document.addEventListener('DOMContentLoaded', () => {

    // 1. Find the save button element by its ID
    const saveButton = document.getElementById('save-button');

    // 2. Check if the button actually exists on the page
    if (saveButton) {
        
        // 3. Add a 'click' event listener to the button
        saveButton.addEventListener('click', () => {
            
            // 4. When clicked, toggle the 'saved' class on the button.
            //    - If the class is not there, it adds it.
            //    - If the class is already there, it removes it.
            saveButton.classList.toggle('saved');

            // You can also log a message to the console to see it working
            if (saveButton.classList.contains('saved')) {
                console.log('Project Saved!');
            } else {
                console.log('Project Unsaved.');
            }
        });
    }

});