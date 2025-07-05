const applyButton = document.getElementById('apply-filters-btn');
const noResultsMessage = document.getElementById('no-results');

applyButton.addEventListener('click', () => {

        const searchQuery = document.getElementById('search-query').value.toLowerCase();
        const category = document.getElementById('category-filter').value;
        const skill = document.getElementById('skill-filter').value;
        const status = document.getElementById('status-filter').value;
        const projects = document.querySelectorAll('.project-card');
        
        let anyVisible = false;

        projects.forEach(project => {
            const projectText = project.textContent.toLowerCase();
            const projectCategory = project.getAttribute('data-category');
            const projectSkill = project.getAttribute('data-skill');
            const projectStatus = project.getAttribute('data-status');

            let searchMatch;
            if(projectText.includes(searchQuery)){    // include is case sensitive..
            searchMatch = true;
            }else{
                searchMatch = false;
            } 

            let categoryMatch;
            if (category === 'All Categories') {
            categoryMatch = true;
            } else if (category === projectCategory) {
            categoryMatch = true;
            } else {
            categoryMatch = false;
            } 

            let skillMatch;
            if(skill === ''){
                skillMatch = true;
            }else if(skill === projectSkill){
                skillMatch = true;
            }else{
                skillMatch = false;
            }

            let statusMatch;
            if(status === ''){
                statusMatch = true;
            }else if(status === projectStatus){
                statusMatch = true;
            }else{
                statusMatch = false;
            }
            const isMatch = categoryMatch && skillMatch && statusMatch && searchMatch;

            if (isMatch) {
                project.style.display = 'block'; // Show matching card
                anyVisible = true;
            } else {
                project.style.display = 'none'; // Hide non-matching card
            }
            });


        // Show message only if filters were actually applied
        if ( !anyVisible) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    
});

