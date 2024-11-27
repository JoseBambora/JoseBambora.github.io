import React from 'react'
import { Page } from '../sub-components/Page'
import { Section } from '../sub-components/Section'
import { MyLink } from '../ui/Link'
import {TableInfo} from '../ui/TableInfo'


const ElementCareer = ({ companyName, companyLink, techs, work }) => (
    <TableInfo 
        content={[
            {name: 'Company', value: <MyLink link={companyLink} text={companyName} />},
            {name: 'Technologies', value: <p>{techs}</p>},
            {name: 'Description', value: <p>{work}</p>}
        ]}
    />
)

const work_its = <p>
    I was able to work a real project, that was <MyLink link={'https://www.bancomontepio.pt/particulares/dia-a-dia/digital-banking'} text='Net 24 website' /> from Montepio Bank.
    I stayed most of the time at the front-end, but I also worked on the back-end.
    In addition to this, I learned more about desing patterns and cloud and did a basic Spring Boot academy project <MyLink link={'https://github.com/JoseBambora/ProjetoITSector'} text={'Link'} />.
</p>

const work_ces = <p>
    I was able to work a real project, that was <MyLink link={'https://github.com/orgs/cesium/teams/sc22-karaokium'} text='Karaokium' />.
    This time I only worked at the front-end, basically developing some pages.
</p>

export const Career = () => {
    return (
        <Page>
            <Section title={'Summer lab - IT Sector'} from={'7/2023'} to={'7/2023'} img={'/itsector.png'} imgAlt={'ITSector'}>
                <ElementCareer companyLink={'https://www.itsector.pt/'} companyName={'IT Sector'} techs={'Java, JSP, Spring Boot.'} work={work_its} />
            </Section>
            <Section title={'Summer Camp - Cesium'} from={'7/2022'} to={'7/2022'} img={'/cesium.png'} imgAlt={'Cesium'}>
                <ElementCareer companyLink={'https://www.cesium.di.uminho.pt/'} companyName={'Cesium'} techs={'Elixir, Phoenix.'} work={work_ces} />
            </Section>
        </Page>
    )
}