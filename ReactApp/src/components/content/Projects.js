import React from 'react'
import { MyLink } from '../ui/Link'
import { Page } from '../sub-components/Page'
import { Section } from '../sub-components/Section'
import { TableInfo } from '../ui/TableInfo'
import { FaGithub } from 'react-icons/fa'


const ElementProject = ({ link, projectName, techs, work, type }) => (
    <TableInfo 
        content={[
            {name:'Project Link', value:<p><FaGithub color="black" /> <MyLink link={link} text={projectName} /></p>},
            {name:'Type', value:<p>{type}</p>},
            {name:'Technologies', value:<p>{techs}</p>},
            {name:'Description', value:<p>{work}</p>}
        ]}
    />
)


const descriptionDiscordBot = <p>
    This project was created for a Discord community/server.
    I am a <MyLink link={'https://scbraga.pt/'} text={'SC Braga'}/> fan and wanted to join a fan community of this club to stay updated on club news and discuss with other fans about some topics.
    In this Discord server, there is a channel dedicated to predicting the outcomes of specific games. My bot collects these predictions, determines the final result, announces the correct predictions, and creates a leaderboard.
</p>

const descriptionLLM = <p>
    In this project, along with two colleagues, we compared the performance of three different LLM models for Sentiment Analysis (DistilBert, Mistral, Gemma). 
    The main goal was to use a public dataset for Sentiment Analysis, train various LLM models, and compare them across multiple factors such as final accuracy, training time, and model size.
    I was responsible for tuning Mistral. If you want to use my model, it is available on my <MyLink link={'https://huggingface.co/JoseBambora/mistral_retrained'} text={'HuggingFace profile'}/>.
</p>

const descriptionSensorization = <p>
    In this project, I developed an Android mobile app to analyze the impact of daily activities on video game performance.
    My two colleagues and I analyzed sleep duration, weather conditions, and physical activity. The app displays graphs to help users understand how to improve their performance.
</p>

const descriptionMultiAgentSystem = <p>
    The goal of this project is to build a multi-agent system for a public/private bus company like <MyLink link={'https://tub.pt/'} text={'TUB'}/>.
    The aim is to create a system that dynamically assigns buses to routes.
</p>

const descriptionMobileApp = <p>
    In this project, my group created an app featuring trails around the city of Braga. 
    We developed the app twice: once using Android Native and once using React Native.
    The project aimed to gain experience in mobile development and to compare native development with cross-platform development.
</p>

const descriptionWebsite = <p>
    This website was developed with two colleagues.
    The aim was to create a platform showcasing historical roads in Braga and their associated history.
    Our group built everything from scratch, including the database (MongoDB), the backend server (NodeJS), and the frontend server (NodeJS).
</p>


export const Projects = () => {
    return (
        <Page>
            <Section title={'Discord Bot'} img={'bot.jpg'} imgAlt={'Bot'}>
                <ElementProject link={'https://github.com/JoseBambora/PersonalProjects/tree/main/BotDiscord'} projectName={'BotDiscord'} techs={'Python, Java, Maven, SQLite'} work={descriptionDiscordBot} type={'Personal'}/>
            </Section>
            <Section title={'Sentimental Analysis with Large Language Models'} img={'llm.png'} imgAlt={'LLM'}>
                <ElementProject link={'https://github.com/AbhimanyuAryan/llm-finetuning'} projectName={'LLM Fine Tuning'} techs={'Python, Sckitlearn, HuggingFace'} work={descriptionLLM} type={'University'}/>
            </Section>
            <Section title={'Sensorization Mobile Application'} img={'sensors.png'} imgAlt={'Sensors'}>
                <ElementProject link={'https://github.com/JoseBambora/SAProject'} projectName={'Sensors'} techs={'Android, Kotlin, SQLite'} work={descriptionSensorization} type={'University'}/>
            </Section>
            <Section title={'Multi Agents System'} img={'agents.png'} imgAlt={'Agents'}>
                <ElementProject link={'https://github.com/AbhimanyuAryan/multiagents-transport'} projectName={'Multi Agent Systems'} techs={'Python'} work={descriptionMultiAgentSystem} type={'University'}/>
            </Section>
            <Section title={'Mobile App'} img={'BraGuia.png'} imgAlt={'Braguia'}>
                <ElementProject link={'https://github.com/JoseBambora/Projeto-TDS'} projectName={'Android Native + React Native'} techs={'Java, Android, React Native, JavaScript, SQLite, Realm'} work={descriptionMobileApp} type={'University'}/>
            </Section>
            <Section title={'Website'} img={'nodejs.png'} imgAlt={'Nodejs'}>
                <ElementProject link={'https://github.com/JoseBambora/ProjetoEW'} projectName={'NodeJS Website'} techs={'JavaScript, Express, Pug, NodeJS, MongoDB'} work={descriptionWebsite} type={'University'}/>
            </Section>
        </Page>
    )
}