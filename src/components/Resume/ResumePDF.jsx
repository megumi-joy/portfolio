import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 10,
        textAlign: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    contact: {
        fontSize: 10,
        marginBottom: 10,
        color: '#000000',
    },
    section: {
        marginTop: 10,
        marginBottom: 5,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 2,
        marginBottom: 5,
        textTransform: 'uppercase',
    },
    subHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    subHeadingTitle: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    subHeadingDate: {
        fontSize: 10,
        fontStyle: 'italic',
    },
    subHeadingSubtitle: {
        fontSize: 10,
        fontStyle: 'italic',
        marginBottom: 2,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 2,
        marginLeft: 10,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
    },
    skillsText: {
        fontSize: 10,
        marginBottom: 2,
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
                    {profile.title} | <Link src="mailto:your.email@example.com" style={styles.link}>email@example.com</Link> | <Link src={profile.socials.github} style={styles.link}>github.com/aurorasunrisegames</Link> | <Link src="https://linkedin.com/in/your-profile" style={styles.link}>linkedin.com/in/your-profile</Link>
                </Text>
            </View>

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {profile.experience.map((exp, index) => (
                    <View key={index} style={{ marginBottom: 5 }}>
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
                {profile.projects.map((proj, index) => (
                    <View key={index} style={{ marginBottom: 5 }}>
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

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Skills</Text>
                <Text style={styles.skillsText}>
                    <Text style={{ fontWeight: 'bold' }}>Languages/Technologies: </Text>
                    {profile.skills.map(skill => skill.name).join(', ')}
                </Text>
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
