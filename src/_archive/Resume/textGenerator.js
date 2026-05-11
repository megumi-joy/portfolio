export const generateTextResume = (profile) => {
    let text = `${profile.name?.toUpperCase() || ''}\n`;
    text += `${profile.title || ''} | ${profile.location || ''}\n`;

    if (profile.socials) {
        const links = [];
        if (profile.socials.email) links.push(profile.socials.email);
        if (profile.socials.github) links.push(profile.socials.github);
        if (profile.socials.linkedin) links.push(profile.socials.linkedin);
        if (links.length > 0) text += links.join(' | ') + '\n';
    }
    text += '\n';

    if (profile.about) {
        text += `${profile.ui.summary?.toUpperCase() || 'PROFESSIONAL SUMMARY'}\n`;
        text += `${'-'.repeat(profile.ui.summary?.length || 20)}\n`;
        text += `${profile.about}\n\n`;
    }

    text += `${profile.ui.techSkills?.toUpperCase() || 'SKILLS & LANGUAGES'}\n`;
    text += `${'-'.repeat(profile.ui.techSkills?.length || 18)}\n`;
    if (profile.skills && profile.skills.length > 0) {
        text += `${profile.ui.technologies || 'Tech'}: ${profile.skills.map(s => s.name).join(', ')}\n`;
    }
    if (profile.languages && profile.languages.length > 0) {
        text += `${profile.ui.languagesLabel || 'Languages'}: ${profile.languages.map(l => `${l.name} (${l.level})`).join(', ')}\n`;
    }
    text += `\n`;

    if (profile.experience && profile.experience.length > 0) {
        text += `${profile.ui.experience?.toUpperCase() || 'EXPERIENCE'}\n`;
        text += `${'-'.repeat(profile.ui.experience?.length || 10)}\n`;
        profile.experience.forEach(exp => {
            text += `${exp.role}\n`;
            text += `${exp.company} | ${exp.period}\n`;
            if (exp.description) {
                text += `${exp.description}\n`;
            }
            if (exp.achievements && exp.achievements.length > 0) {
                exp.achievements.forEach(ach => {
                    text += `- ${ach}\n`;
                });
            }
            text += `\n`;
        });
    }

    if (profile.projects && profile.projects.length > 0) {
        text += `${profile.ui.projects?.toUpperCase() || 'PROJECTS'}\n`;
        text += `${'-'.repeat(profile.ui.projects?.length || 8)}\n`;
        profile.projects.forEach(proj => {
            let techStr = proj.tags ? proj.tags.join(', ') : '';
            text += `${proj.title} [${techStr}]\n`;
            if (proj.description) {
                text += `${proj.description}\n`;
            }
            text += `\n`;
        });
    }

    if (profile.education && profile.education.length > 0) {
        text += `${profile.ui.education?.toUpperCase() || 'EDUCATION'}\n`;
        text += `${'-'.repeat(profile.ui.education?.length || 9)}\n`;
        profile.education.forEach(edu => {
            text += `${edu.institution} | ${edu.period}\n`;
            text += `${edu.degree} | ${edu.location}\n\n`;
        });
    }

    return text.trim();
};
