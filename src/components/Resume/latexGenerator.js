const escapeLatex = (str) => {
  if (typeof str !== 'string') return str;
  return str.replace(/&/g, '\\&').replace(/%/g, '\\%').replace(/\$/g, '\\$').replace(/#/g, '\\#').replace(/_/g, '\\_').replace(/{/g, '\\{').replace(/}/g, '\\}');
};

export const generateLatex = (profile) => {
  const experienceItems = profile.experience.map(exp => `
\\resumeSubheading
  {${escapeLatex(exp.role)}}{${escapeLatex(exp.period)}}
  {${escapeLatex(exp.company)}}{}
  \\resumeItemListStart
    ${exp.achievements.map(achievement => `\\resumeItem{${escapeLatex(achievement)}}`).join('\n    ')}
  \\resumeItemListEnd
`).join('\n');

  const projectItems = profile.projects.map(proj => `
\\resumeProjectHeading
    {\\textbf{${escapeLatex(proj.title)}} $|$ \\emph{${proj.tags.map(t => escapeLatex(t)).join(', ')}}}{}
    \\resumeItemListStart
      \\resumeItem{${escapeLatex(proj.description)}}
    \\resumeItemListEnd
`).join('\n');

  const skillsItems = profile.skills.map(skill => escapeLatex(skill.name)).join(', ');

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
    \\textbf{\\Huge \\scshape ${escapeLatex(profile.name)}} \\\\ \\vspace{1pt}
    \\small ${escapeLatex(profile.socials.phone)} $|$ \\href{mailto:${profile.socials.email}}{\\underline{${escapeLatex(profile.socials.email)}}} $|$ 
    \\href{${profile.socials.linkedin}}{\\underline{linkedin.com/in/${profile.socials.linkedin.split('/').filter(Boolean).pop()}}} $|$
    \\href{${profile.socials.github}}{\\underline{github.com/${profile.socials.github.split('/').filter(Boolean).pop()}}}
\\end{center}

%-----------PROFESSIONAL SUMMARY-----------
\\section{${escapeLatex(profile.ui.summary)}}
\\small{
  ${escapeLatex(profile.about)}
}
\\vspace{-5pt}


%-----------TECHNICAL SKILLS-----------
\\section{${escapeLatex(profile.ui.techSkills)}}
 \\begin{itemize}[leftmargin=0.15in, label={}]
    \\small{\\item{
     \\textbf{${escapeLatex(profile.ui.technologies)}}{: ${skillsItems}} \\\\
     \\textbf{${escapeLatex(profile.ui.languagesLabel)}}{: ${profile.languages.map(l => `${escapeLatex(l.name)} (${escapeLatex(l.level)})`).join(', ')}}
    }}
 \\end{itemize}


%-----------EDUCATION-----------
%-----------EXPERIENCE-----------
\\section{${escapeLatex(profile.ui.experience)}}
  \\resumeSubHeadingListStart
${experienceItems}
  \\resumeSubHeadingListEnd


%-----------PROJECTS-----------
\\section{${escapeLatex(profile.ui.projects)}}
    \\resumeSubHeadingListStart
${projectItems}
    \\resumeSubHeadingListEnd


%-----------EDUCATION-----------
\\section{${escapeLatex(profile.ui.education)}}
  \\resumeSubHeadingListStart
    ${profile.education.map(edu => `\\resumeSubheading
      {${escapeLatex(edu.institution)}}{${escapeLatex(edu.location)}}
      {${escapeLatex(edu.degree)}}{${escapeLatex(edu.period)}}`).join('\n')}
  \\resumeSubHeadingListEnd





%-------------------------------------------
\\end{document}
`;
};
