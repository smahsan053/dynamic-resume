// Function to add a new skill input field
function addSkill(): void {
  const skillsContainer = document.getElementById('skills-container') as HTMLDivElement | null;
  if (skillsContainer) {
    const newSkillInput = document.createElement('input') as HTMLInputElement;
    newSkillInput.type = 'text';
    newSkillInput.className = 'skill-input';
    newSkillInput.placeholder = 'e.g., HTML'; // Placeholder for skill input
    skillsContainer.appendChild(newSkillInput);
  } else {
    console.error('Skills container not found');
  }
}

// Function to add a new hobby input field
function addHobby(): void {
  const hobbiesContainer = document.getElementById('hobbies-container') as HTMLDivElement | null;
  if (hobbiesContainer) {
    const newHobbyInput = document.createElement('input') as HTMLInputElement;
    newHobbyInput.type = 'text';
    newHobbyInput.className = 'hobby-input';
    newHobbyInput.placeholder = 'e.g., Badminton'; // Placeholder for hobby input
    hobbiesContainer.appendChild(newHobbyInput);
  } else {
    console.error('Hobbies container not found');
  }
}

// Function to add a new competency input field
function addCompetency(): void {
  const competenciesContainer = document.getElementById('competencies-container') as HTMLDivElement | null;
  if (competenciesContainer) {
    const newCompetencyInput = document.createElement('input') as HTMLInputElement;
    newCompetencyInput.type = 'text';
    newCompetencyInput.className = 'competency-input';
    newCompetencyInput.placeholder = 'e.g., Ability to work in a fast-paced environment to meet deadlines.';
    competenciesContainer.appendChild(newCompetencyInput);
  } else {
    console.error('Competencies container not found');
  }
}

// Function to handle form submission and generate resume
function generateResume(): void {
  const form = document.getElementById('resume-form') as HTMLFormElement | null;
  const resumeOutput = document.getElementById('resume-output') as HTMLDivElement | null;

  if (form && resumeOutput) {
    const formData = new FormData(form);

    // Extracting form data
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const profilePic = formData.get('profile-pic') as string;
    const degree = formData.get('degree') as string;
    const duration = formData.get('duration') as string;
    const institution = formData.get('institution') as string;
    const jobTitle = formData.get('job-title') as string;
    const jobDuration = formData.get('job-duration') as string;
    const company = formData.get('company') as string;
    const jobDescription = formData.get('job-description') as string;
    const projectName = formData.get('project-name') as string;
    const projectDescription = formData.get('project-description') as string;
    const references = formData.get('references') as string;

    // Extracting dynamic fields
    const skills = Array.from(document.querySelectorAll('.skill-input'))
      .map(input => (input as HTMLInputElement).value)
      .filter(value => value.trim() !== '');

    const hobbies = Array.from(document.querySelectorAll('.hobby-input'))
      .map(input => (input as HTMLInputElement).value)
      .filter(value => value.trim() !== '');

    const competencies = Array.from(document.querySelectorAll('.competency-input'))
      .map(input => (input as HTMLInputElement).value)
      .filter(value => value.trim() !== '');

    // Generating resume HTML with styling
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
  } else {
    console.error('Form or resume output container not found');
  }
}


// Add event listener to handle form submission
document.getElementById('resume-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  generateResume();
});

// global exposure to functions
(window as any).addSkill = addSkill;
(window as any).addHobby = addHobby;
(window as any).addCompetency = addCompetency;
