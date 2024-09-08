"use strict";
function addSkill() {
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
        const newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.className = 'skill-input';
        newSkillInput.placeholder = 'e.g., HTML';
        skillsContainer.appendChild(newSkillInput);
    }
    else {
        console.error('Skills container not found');
    }
}
function addHobby() {
    const hobbiesContainer = document.getElementById('hobbies-container');
    if (hobbiesContainer) {
        const newHobbyInput = document.createElement('input');
        newHobbyInput.type = 'text';
        newHobbyInput.className = 'hobby-input';
        newHobbyInput.placeholder = 'e.g., Badminton';
        hobbiesContainer.appendChild(newHobbyInput);
    }
    else {
        console.error('Hobbies container not found');
    }
}
function addCompetency() {
    const competenciesContainer = document.getElementById('competencies-container');
    if (competenciesContainer) {
        const newCompetencyInput = document.createElement('input');
        newCompetencyInput.type = 'text';
        newCompetencyInput.className = 'competency-input';
        newCompetencyInput.placeholder = 'e.g., Ability to work in a fast-paced environment to meet deadlines.';
        competenciesContainer.appendChild(newCompetencyInput);
    }
    else {
        console.error('Competencies container not found');
    }
}
function generateResume() {
    const form = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    if (form && resumeOutput) {
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const profilePic = formData.get('profile-pic');
        const degree = formData.get('degree');
        const duration = formData.get('duration');
        const institution = formData.get('institution');
        const jobTitle = formData.get('job-title');
        const jobDuration = formData.get('job-duration');
        const company = formData.get('company');
        const jobDescription = formData.get('job-description');
        const projectName = formData.get('project-name');
        const projectDescription = formData.get('project-description');
        const references = formData.get('references');
        const skills = Array.from(document.querySelectorAll('.skill-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        const hobbies = Array.from(document.querySelectorAll('.hobby-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        const competencies = Array.from(document.querySelectorAll('.competency-input'))
            .map(input => input.value)
            .filter(value => value.trim() !== '');
        resumeOutput.innerHTML = `
      <div class="resume">
        <h2 class="resume-title">Resume</h2>
        <div class="section">
          <h3>Personal Information</h3>
          <p><img src="${profilePic}" alt="Profile Picture" class="profile-pic" /></p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>

        <div class="section">
          <h3>Education</h3>
          <p><strong>Degree:</strong> ${degree}</p>
          <p><strong>Duration:</strong> ${duration}</p>
          <p><strong>Institution:</strong> ${institution}</p>
        </div>

        <div class="section">
          <h3>Work Experience</h3>
          <p><strong>Job Title:</strong> ${jobTitle}</p>
          <p><strong>Duration:</strong> ${jobDuration}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Description:</strong> ${jobDescription}</p>
        </div>

        <div class="section">
          <h3>Skills</h3>
          <ul class="list">
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>Projects</h3>
          <p><strong>Project Name:</strong> ${projectName}</p>
          <p><strong>Project Description:</strong> ${projectDescription}</p>
        </div>

        <div class="section">
          <h3>Hobbies</h3>
          <ul class="list">
            ${hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>Personal Competencies</h3>
          <ul class="list">
            ${competencies.map(competency => `<li>${competency}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h3>References</h3>
          <p>${references}</p>
        </div>
      </div>
    `;
    }
    else {
        console.error('Form or resume output container not found');
    }
}
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
    event.preventDefault();
    generateResume();
});
window.addSkill = addSkill;
window.addHobby = addHobby;
window.addCompetency = addCompetency;
