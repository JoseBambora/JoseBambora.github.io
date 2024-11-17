import Container from '../ui/Container';
import { Card, Sections, SectionListHorizontalElement, Section, SectionListHorizontal, CardDescription } from '../ui/Card';
import Link from '../ui/Link';


function Project({ title, label, image, link, techs, children }) {
  return (
    <Card title={title} label={label} image={image} link={link}>
      <Sections col={true}>
        {children}
        <Sections>
          <Section>
            <SectionListHorizontal >
              {techs.map((t, index) => <SectionListHorizontalElement key={index * 2}>{t}</SectionListHorizontalElement>)}
            </SectionListHorizontal>
          </Section>
        </Sections>
      </Sections>
    </Card>
  )
}

function Projects() {
  return (
    <Container col={true} center={false}>
      <Project title={"Discord Bot"} label={"Personal Project"} image={"bot.jpg"} link={"https://github.com/JoseBambora/BotDiscord"} techs={["Java", "SQLite", "Maven", "Python", "JDA", "JUnit", "Discord API"]}>
        <CardDescription>
          <p>
            This project was created for a Discord community/server called "Os Gverreiros" with more than 3000 members.
            I am a <Link href={"https://scbraga.pt/"}>SC Braga</Link> fan and wanted to join a fan community of this club to stay updated on club news
            and have friendly discussions with other fans about some topics from the club.
            In this Discord server, there is a channel dedicated to predicting the outcomes of specific games.
            To sum up, my bot collects these predictions and the final result for each game, announces the correct predictions, and creates a leaderboard.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Sentimental Analysis"} label={"University Project"} image={"llm.png"} link={"https://github.com/AbhimanyuAryan/llm-finetuning"} techs={["Python", "PyTorch", "Transformers"]}>
        <CardDescription>
          <p>
            In this project, along with two colleagues, we compared the performance of three different LLM models for Sentiment Analysis (DistilBert, Mistral, Gemma).
            The main goal was to use a public dataset for Sentiment Analysis, train various LLM models, and compare them across multiple factors such as final accuracy, training time, and model size.
            I was responsible for tuning Mistral.
            If you want to use my model, it is available on my <Link href={"https://huggingface.co/JoseBambora/mistral_retrained"}>HuggingFace profile</Link>.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Ruby on Rails"} label={"University Project"} image={"rubyrails.jpg"} link={"https://github.com/regedor/pi-ww"} techs={["Ruby on Rails", "PostgreSQL", "Heroku", "Circle CI", "Slack"]}>
        <CardDescription>
          <p>
            Subject <i>"Projeto de Informática"</i> project (final master dregree project), my group decided to do a proposed project from <Link href={"https://www.wellbeing-warrior.com/welcome"}>Wellbeing Warrior</Link>.
            In this project we had to build an internal web app for Customer Relationship Management (CRM) and a Marketing Campaign Management (MCM).
          </p>
          <p>
            Unfortunately, we only had 2 months for the project, so we were not able to implement as many feature as we would like to, specially in relation with the CRM, such as integration with ChatGPT API, email trackers, etc.
            Despite that, we surpassed our expectations by building a really good Ruby on Rails system, with tests, automatic heroku deployment, slack notifications and MCM almost completed with a base version for the CRM.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Road Signs AI"} label={"Personal Project"} image={"roadsignsai.png"} link={"https://github.com/JoseBambora/PersonalProjects/tree/main/RoadSignsAI"} techs={["Python", "PyTorch", "Pandas", "Numpy", "CNN"]}>
        <CardDescription>
          <p>
            The primary goal of this project is to fine tuned pre trained AI models to identify road signals in images and evaluate those different models.
            The pre trained used models were Resnet, EfficientNet and Mobile Net from PyTorch library.
          </p>
        </CardDescription>
      </Project>
      <Project title={"BraGuia"} label={"University Project"} image={"BraGuia.png"} link={"https://github.com/JoseBambora/Projeto-TDS"} techs={["Java", "JavaScript", "React Native", "Android Native", "SQLite", "Realm"]}>
        <CardDescription>
          <p>
            In this project, my group created an app featuring trails around the city of Braga.
            We developed the app twice: once using Android Native and once using React Native.
            The project aimed to gain experience in mobile development and to compare native development with cross-platform development.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Personal Website"} label={"Personal Project"} image={"react.png"} link={"https://github.com/JoseBambora/JoseBambora.github.io"} techs={["React", "Tailwind"]}>
        <CardDescription>
          <p>
            My personal website that you are consulting. It was made in react and I decided to do it as something auxiliar to my CV, since I have more space.
            I took advantadges of Github pages to host my website for free.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Multi Agents Systems"} label={"University Project"} image={"agents.png"} link={"https://github.com/AbhimanyuAryan/multiagents-transport"} techs={["Python", "Pygame", "Spade"]}>
        <CardDescription>
          <p>
            The goal of this project is to build a multi-agent system for a public/private bus company like <Link href="https://tub.pt/">TUB</Link>.
            The aim is to create a system that dynamically assigns buses to routes.
            My group did not have time to implement an AI that realizes this process, so we made a simple algorithm that analysis some conditions and assign buses to routes based on thos conditions.
          </p>
        </CardDescription>
      </Project>
      <Project title={"Braga Streets"} label={"University Project"} image={"nodejs.png"} link={"https://github.com/JoseBambora/ProjetoEW"} techs={["JavaScript", "HTML", "CSS", "JQuery", "PUG", "MongoDB"]}>
        <CardDescription>
          <p>
            This website was developed with two colleagues.
            The aim was to create a platform showcasing historical roads in Braga and their associated history.
            Our group built everything from scratch, including the database (MongoDB), the backend server (NodeJS), and the frontend server (NodeJS).
          </p>
        </CardDescription>
      </Project>
    </Container>
  )
}

export default Projects;