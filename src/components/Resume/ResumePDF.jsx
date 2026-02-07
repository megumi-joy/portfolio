import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles
// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 20, // Reduced from 30
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 5, // Reduced from 10
        textAlign: 'center',
    },
    name: {
        fontSize: 20, // Reduced from 24
        fontWeight: 'bold',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    contact: {
        fontSize: 8, // Reduced from 10
        marginBottom: 2,
        color: '#000000',
    },
    section: {
        marginTop: 5, // Reduced from 10
        marginBottom: 2, // Reduced from 5
    },
    sectionTitle: {
        fontSize: 10, // Reduced from 12
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 1,
        marginBottom: 3,
        textTransform: 'uppercase',
    },
    subHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    subHeadingTitle: {
        fontSize: 9, // Reduced from 11
        fontWeight: 'bold',
    },
    subHeadingDate: {
        fontSize: 8, // Reduced from 10
        fontStyle: 'italic',
    },
    subHeadingSubtitle: {
        fontSize: 8, // Reduced from 10
        fontStyle: 'italic',
        marginBottom: 1,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 1,
        marginLeft: 8,
    },
    bulletPoint: {
        width: 8,
        fontSize: 8,
    },
    itemContent: {
        flex: 1,
        fontSize: 8, // Reduced from 10
    },
    skillsText: {
        fontSize: 8, // Reduced from 10
        marginBottom: 1,
    },
    link: {
        color: '#000000',
        textDecoration: 'none',
    },
});

const ResumePDF = ({ profile }) => (
    <Document>
        <Page size="LETTER" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.contact}>
                    {profile.title} | {profile.location}
                </Text>
                <Text style={styles.contact}>
                    <Link src={`mailto:${profile.socials.email}`} style={styles.link}>{profile.socials.email}</Link> | <Link src={profile.socials.github} style={styles.link}>github.com/aurorasunrisegames</Link>
                </Text>
            </View>

            {/* Skills & Languages (Moved Top) */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <Text style={styles.skillsText}>
                    <Text style={{ fontWeight: 'bold' }}>Tech: </Text>
                    {profile.skills.map(skill => skill.name).join(', ')}
                </Text>
                <Text style={styles.skillsText}>
                    <Text style={{ fontWeight: 'bold' }}>Languages: </Text>
                    {profile.languages.map(l => `${l.name} (${l.level})`).join(', ')}
                </Text>
            </View>

            {/* Education */}
            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {profile.experience.map((exp, index) => (
                    <View key={index} style={{ marginBottom: 4 }}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTitle}>{exp.role}</Text>
                            <Text style={styles.subHeadingDate}>{exp.period}</Text>
                        </View>
                        <Text style={styles.subHeadingSubtitle}>{exp.company}</Text>
                        {exp.achievements.map((achievement, i) => (
                            <View key={i} style={styles.listItem}>
                                <Text style={styles.bulletPoint}>•</Text>
                                <Text style={styles.itemContent}>{achievement}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* Projects */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Projects</Text>
                {profile.projects.slice(0, 3).map((proj, index) => ( // Show top 3 projects to save space if needed, or all if they fit.
                    <View key={index} style={{ marginBottom: 3 }}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTitle}>{proj.title} | {proj.tags.join(', ')}</Text>
                        </View>
                        <View style={styles.listItem}>
                            <Text style={styles.bulletPoint}>•</Text>
                            <Text style={styles.itemContent}>{proj.description}</Text>
                        </View>
                    </View>
                ))}
            </View>

            {/* Education (Moved Bottom) */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {/* Compact Display for Education */}
                {profile.education.map((edu, index) => (
                    <View key={index} style={{ marginBottom: 2 }}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTitle}>{edu.institution}</Text>
                            <Text style={styles.subHeadingDate}>{edu.period}</Text>
                        </View>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingSubtitle}>{edu.degree}</Text>
                            <Text style={styles.subHeadingSubtitle}>{edu.location}</Text>
                        </View>
                    </View>
                ))}
            </View>


        </Page>
    </Document>
);

export default ResumePDF;
