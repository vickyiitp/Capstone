document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('project-form');

    if (form) {
        form.addEventListener('submit', (event) => {
            // Prevent the form from submitting the traditional way
            event.preventDefault();

            // Create a FormData object from the form
            const formData = new FormData(form);
            
            // Convert FormData to a plain object
            const submittedData = {};
            for (const [key, value] of formData.entries()) {
                 // Handle multi-select for skills
                if (key === 'skills') {
                    if (!submittedData[key]) {
                        submittedData[key] = [];
                    }
                    submittedData[key].push(value);
                } 
                // Handle tags - split by comma and trim whitespace
                else if (key === 'tags') {
                    submittedData[key] = value.split(',').map(tag => tag.trim()).filter(tag => tag);
                }
                // Handle budget as a number
                else if (key === 'budget') {
                    submittedData[key] = parseFloat(value);
                }
                // Handle dates
                else if (key.toLowerCase().includes('deadline')) {
                    submittedData[key] = new Date(value);
                }
                else {
                    submittedData[key] = value;
                }
            }

            // Log the data to the console
            console.log('Form Submitted Data:', submittedData);

            // Show an alert to the user
            alert('Project posted! Check the console for the submitted data.');

            // Optionally, you can reset the form after submission
            // form.reset();
        });
    }
});