import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Font } from '@react-pdf/renderer';

// Register a font that supports Cyrillic characters
Font.register({
    family: 'Roboto',
    src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 'normal' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-italic-webfont.ttf', fontStyle: 'italic' }
    ]
});

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 36, // 0.5 inch margins
        fontFamily: 'Roboto',
    },
    header: {
        marginBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        paddingBottom: 4,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 2,
        textTransform: 'uppercase',
    },
    titleHeader: {
        fontSize: 11,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    contact: {
        fontSize: 9,
        marginBottom: 2,
        color: '#000000',
    },
    section: {
        marginTop: 10,
        marginBottom: 4,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: '#DDDDDD',
        paddingBottom: 2,
        marginBottom: 6,
        textTransform: 'uppercase',
        backgroundColor: '#F3F4F6',
        paddingLeft: 4,
    },
    subHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    subHeadingTitle: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    subHeadingDate: {
        fontSize: 9,
        fontStyle: 'italic',
    },
    subHeadingSubtitle: {
        fontSize: 9,
        fontStyle: 'italic',
        marginBottom: 2,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 2,
        marginLeft: 12,
    },
    bulletPoint: {
        width: 10,
        fontSize: 10,
    },
    itemContent: {
        flex: 1,
        fontSize: 10,
        lineHeight: 1.4,
    },
    skillsText: {
        fontSize: 10,
        marginBottom: 3,
        lineHeight: 1.4,
    },
    link: {
        color: '#000000',
        textDecoration: 'none',
    },
});

const ResumePDF = ({ profile }) => (
    <Document title={`${profile.name} - Resume`}>
        <Page size="LETTER" style={styles.page}>
            {/* 1. Contact Information */}
            <View style={styles.header}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.titleHeader}>{profile.title}</Text>
                <Text style={styles.contact}>
                    {profile.socials.phone} | {profile.socials.email} | {profile.location}
                </Text>
                <Text style={styles.contact}>
                    <Link src={profile.socials.linkedin} style={styles.link}>LinkedIn: {profile.socials.linkedin.split('in/')[1]}</Link> | <Link src={profile.socials.github} style={styles.link}>GitHub: github.com/megumi-joy</Link>
                </Text>
            </View>

            {/* 2. Personal Profile / Professional Summary */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>{profile.ui?.summary || "Professional Summary"}</Text>
                <Text style={styles.itemContent}>{profile.about}</Text>
            </View>

            {/* 3. Work Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Work Experience</Text>
                {(profile.experience || []).map((exp, index) => (
                    <View key={index} style={{ marginBottom: 8 }}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTitle}>{exp.role}</Text>
                            <Text style={styles.subHeadingDate}>{exp.period}</Text>
                        </View>
                        <Text style={styles.subHeadingSubtitle}>{exp.company}</Text>
                        {(exp.achievements || []).map((achievement, i) => (
                            <View key={i} style={styles.listItem}>
                                <Text style={styles.bulletPoint}>•</Text>
                                <Text style={styles.itemContent}>{achievement}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>

            {/* 4. Education */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {(profile.education || []).map((edu, index) => (
                    <View key={index} style={{ marginBottom: 4 }}>
                        <View style={styles.subHeading}>
                            <Text style={styles.subHeadingTitle}>{edu.institution}</Text>
                            <Text style={styles.subHeadingDate}>{edu.period}</Text>
                        </View>
                        <Text style={styles.subHeadingSubtitle}>{edu.degree} | {edu.location}</Text>
                    </View>
                ))}
            </View>

            {/* 5. Skills */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                <View style={{ marginBottom: 2 }}>
                    <Text style={styles.skillsText}>
                        <Text style={{ fontWeight: 'bold' }}>Technical Arsenal: </Text>
                        {(profile.skills || []).map(skill => skill.name).join(', ')}
                    </Text>
                    <Text style={styles.skillsText}>
                        <Text style={{ fontWeight: 'bold' }}>Languages: </Text>
                        {(profile.languages || []).map(l => `${l.name} (${l.level})`).join(', ')}
                    </Text>
                </View>
            </View>

            {/* 6. References */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>References</Text>
                <Text style={styles.itemContent}>Professional references available upon request.</Text>
            </View>
        </Page>
    </Document>
);

export default ResumePDF;
