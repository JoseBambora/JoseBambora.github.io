import React from 'react'
import { TableSkills } from '../sub-components/SkillsTable'
import { Section } from '../sub-components/Section'
import { Page } from '../sub-components/Page'


export const Skills = () => {
    const databases = [
        { name: 'Mongo DB', level: 5 },
        { name: 'MySQL', level: 4 },
        { name: 'SQLServer', level: 4 },
        { name: 'SQLite', level: 4 },
        { name: 'Realm', level: 4 },
    ]
    const extra = [
        { name: 'Machine Learning', level: 4 },
        { name: 'UML', level: 4 },
        { name: 'Web Delepment', level: 4 },
        { name: 'Docker', level: 4 },
        { name: 'Cloud', level: 3 },
    ]
    const programming_languages = [
        { name: 'Java', level: 5 },
        { name: 'Python', level: 5 },
        { name: 'JavaScript', level: 4 },
        { name: 'Kotlin', level: 4 },
        { name: 'C', level: 4 },
        { name: 'Haskell', level: 3 },
        { name: '.NET C#', level: 3 },
        { name: 'Dart', level: 2 },
    ]
    const frameworks = [
        { name: 'React Native', level: 4 },
        { name: 'React JS', level: 4 },
        { name: 'Android', level: 4 },
        { name: 'NodeJS', level: 4 },
        { name: 'Scikit-Learn', level: 4 },
        { name: 'Pandas', level: 4 },
        { name: 'Numpy', level: 4 },
        { name: 'MatPlotLib', level: 4 },
        { name: 'TensorFlow', level: 3 },
        { name: 'PyTorch', level: 3 },
        { name: 'Spring Boot', level: 3 },
        { name: 'Flask', level: 3 },
        { name: 'JQuery', level: 3 },
        { name: 'Flutter', level: 2 },
        { name: 'Blazor', level: 2 },
        { name: 'OpenGL', level: 2 },
    ]
    const soft_skills = [
        { name: 'Hard Work', level: 5 },
        { name: 'Dedication', level: 5 },
        { name: 'Team Work', level: 4 },
        { name: 'Individual Work', level: 4 },
    ]
    return (
        <Page>
            <Section title={'Programming Languages'}>
                <TableSkills skillName={'Language'} skills={programming_languages} />
            </Section>
            <Section title={'Frameworks'}>
                <TableSkills skillName={'Framework'} skills={frameworks} />
            </Section>
            <Section title={'DataBases'}>
                <TableSkills skillName={'DataBase'} skills={databases} />
            </Section>
            <Section title={'Extras'}>
                <TableSkills skillName={'Extra'} skills={extra} />
            </Section>
            <Section title={'Soft Skills'}>
                <TableSkills skillName={'Skill'} skills={soft_skills} />
            </Section>
        </Page >
    )
}