import React from 'react'
import { Page } from '../sub-components/Page'
import { Section } from '../sub-components/Section'

export const Education = () => {
    return (
        <Page>
            <Section title={'Master of Software Engineer '} from={'9/2023'} to={'Until now'}>
                <p>University of Minho</p>
                <p>Topics: Artificial Intelligence and Software Development</p>
            </Section>
            <Section title={'Bachelor of Software Engineer'} from={'9/2020'} to={'6/2023'}>
                <p>University of Minho</p>
                <p>Final Grade: 16.167</p>
            </Section>
        </Page>
    )
}