document.addEventListener('DOMContentLoaded', function () {
    const registerNow = document.getElementById('register-now');
    const postProject = document.getElementById('post-project');

    registerNow.addEventListener('click', () => {
      alert('Taking you to the registration page...');
      // window.location.href = '/register.html';
    });

    postProject.addEventListener('click', () => {
      alert('Taking you to the project posting page...');
      // window.location.href = '/post-project.html';
    });

    const ctaSection = document.querySelector('.header .header-buttons');
    const joinStartup = ctaSection.querySelector('.startup');
    const joinContributor = ctaSection.querySelector('.contributor');

    joinStartup.addEventListener('click', () => {
      alert('Redirecting to Startup Registration...');
      // window.location.href = '/startup-register.html';
    });

    joinContributor.addEventListener('click', () => {
      alert('Redirecting to Contributor Registration...');
      // window.location.href = '/contributor-register.html';
    });
  });