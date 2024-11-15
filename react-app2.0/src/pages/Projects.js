import Container from '../ui/Container';
import { Card, Sections, SectionListElement, Section, SectionTitle, SectionList, CardDescription } from '../ui/Card';
import Link from '../ui/Link';


function Project({ title, label, image, link, techs, children }) {
  return (
    <Card title={title} label={label} image={image} link={link}>
      <Sections>
        <div className='md:w-4/5'>
          {children}
        </div>
        <div className='md:w-1/4'>
          <Sections>
            <Section>
              <SectionTitle title={"Technologies"} />
              <SectionList wrap={true} >
                {techs.map(t => <SectionListElement>{t}</SectionListElement>)}
              </SectionList>
            </Section>
          </Sections>
        </div>
      </Sections>
    </Card>
  )
}

function Projects() {
  return (
    <Container col={true} center={false}>
      <Project title={"Discord Bot"} label={"Personal Project"} image={"bot.jpg"} link={"https://github.com/JoseBambora/BotDiscord"} techs={["Java", "SQLite", "Maven", "Python", "JDA", "JUnit"]}>
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
      <Project title={"Large Language Model"} label={"University Project"} link={"https://github.com/AbhimanyuAryan/llm-finetuning"} techs={["Python", "PyTorch", "Transformers"]}>
        <CardDescription>
          <p>
            In this project, along with two colleagues, we compared the performance of three different LLM models for Sentiment Analysis (DistilBert, Mistral, Gemma).
            The main goal was to use a public dataset for Sentiment Analysis, train various LLM models, and compare them across multiple factors such as final accuracy, training time, and model size.
            I was responsible for tuning Mistral.
            If you want to use my model, it is available on my <Link href={"https://huggingface.co/JoseBambora/mistral_retrained"}>HuggingFace profile</Link>.
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

      <Project title={"Ruas Braga"} label={"University Project"} link={"https://github.com/JoseBambora/ProjetoEW"} techs={["JavaScript", "HTML", "CSS", "JQuery", "PUG", "MongoDB"]}>
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