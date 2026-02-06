export const generateLatex = (profile) => {
    const experienceItems = profile.experience.map(exp => `
\\resumeSubheading
  {${exp.role}}{${exp.period}}
  {${exp.company}}{}
  \\resumeItemListStart
    ${exp.achievements.map(achievement => `\\resumeItem{${achievement}}`).join('\n    ')}
  \\resumeItemListEnd
`).join('\n');

    const projectItems = profile.projects.map(proj => `
\\resumeProjectHeading
    {\\textbf{${proj.title}} $|$ \\emph{${proj.tags.join(', ')}}}{}
    \\resumeItemListStart
      \\resumeItem{${proj.description}}
    \\resumeItemListEnd
`).join('\n');

    const skillsItems = profile.skills.map(skill => skill.name).join(', ');

    return `\\documentclass[letterpaper,11pt]{article}

\\usepackage{latexsym}
\\usepackage[empty]{fullpage}
\\usepackage{titlesec}
\\usepackage{marvosym}
\\usepackage[usenames,dvipsnames]{color}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage[english]{babel}
\\usepackage{tabularx}

\\pagestyle{fancy}
\\fancyhf{} 
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}

% Adjust margins
\\addtolength{\\oddsidemargin}{-0.5in}
\\addtolength{\\evensidemargin}{-0.5in}
\\addtolength{\\textwidth}{1in}
\\addtolength{\\topmargin}{-.5in}
\\addtolength{\\textheight}{1.0in}

\\urlstyle{same}

\\raggedbottom
\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]

\\begin{document}

%----------HEADING----------
\\begin{center}
    \\textbf{\\Huge \\scshape ${profile.name}} \\\\ \\vspace{1pt}
    \\small ${profile.title} $|$ \\href{mailto:email@example.com}{\\underline{email@example.com}} $|$ 
    \\href{${profile.socials.github}}{\\underline{github.com/aurorasunrisegames}} $|$
    \\href{https://linkedin.com/in/your-profile}{\\underline{linkedin.com/in/your-profile}}
\\end{center}


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    \\resumeSubheading
      {University Name}{City, State}
      {Bachelor of Science in Computer Science}{Start Year -- End Year}
  \\resumeSubHeadingListEnd


%-----------EXPERIENCE-----------
\\section{Experience}
  \\resumeSubHeadingListStart
${experienceItems}
  \\resumeSubHeadingListEnd


%-----------PROJECTS-----------
\\section{Projects}
    \\resumeSubHeadingListStart
${projectItems}
    \\resumeSubHeadingListEnd


%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Languages/Technologies}{: ${skillsItems}} \\\\
    }}
 \\end{itemize}


%-------------------------------------------
\\end{document}
`;
};
