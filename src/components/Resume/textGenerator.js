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
        text += `PROFESSIONAL SUMMARY\n`;
        text += `--------------------\n`;
        text += `${profile.about}\n\n`;
    }

    text += `SKILLS & LANGUAGES\n`;
    text += `------------------\n`;
    if (profile.skills && profile.skills.length > 0) {
        text += `Tech: ${profile.skills.map(s => s.name).join(', ')}\n`;
    }
    if (profile.languages && profile.languages.length > 0) {
        text += `Languages: ${profile.languages.map(l => `${l.name} (${l.level})`).join(', ')}\n`;
    }
    text += `\n`;

    if (profile.experience && profile.experience.length > 0) {
        text += `EXPERIENCE\n`;
        text += `----------\n`;
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
        text += `PROJECTS\n`;
        text += `--------\n`;
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
        text += `EDUCATION\n`;
        text += `---------\n`;
        profile.education.forEach(edu => {
            text += `${edu.institution} | ${edu.period}\n`;
            text += `${edu.degree} | ${edu.location}\n\n`;
        });
    }

    return text.trim();
};
