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
    \\small ${profile.title} \\\\
    \\small ${profile.location} $|$ 
    \\href{${profile.socials.github}}{\\underline{github.com/aurorasunrisegames}} $|$ 
    \\href{mailto:${profile.socials.email}}{\\underline{${profile.socials.email}}}
\\end{center}


%-----------TECHNICAL SKILLS-----------
\\section{Technical Skills}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{Technologies}{: ${skillsItems}} \\\\
     \\textbf{Languages}{: ${profile.languages.map(l => `${l.name} (${l.level})`).join(', ')}}
    }}
 \\end{itemize}


%-----------EDUCATION-----------
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


%-----------EDUCATION-----------
\\section{Education}
  \\resumeSubHeadingListStart
    ${profile.education.map(edu => `\\resumeSubheading
      {${edu.institution}}{${edu.location}}
      {${edu.degree}}{${edu.period}}`).join('\n')}
  \\resumeSubHeadingListEnd





%-------------------------------------------
\\end{document}
`;
};
