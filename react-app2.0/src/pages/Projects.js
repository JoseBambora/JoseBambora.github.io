import Container from '../ui/Container';
import { Card, Sections, SectionListElement, Section, SectionTitle, SectionList, CardDescription } from '../ui/Card';
import Link from '../ui/Link';


function Projects() {
  /**
   * PI
   * BotDiscord
   * ImageRecognition
   * LLM
   * Agents
   * NodeJS Site
   * Personal Site
   * BraGuia
   * 
   */
  return (
    <Container col={true} center={false}>
      <Card title={"Discord Bot"} label={"Personal Project"} image={"bot.jpg"}>
        <Sections>
          <div className='md:w-4/5'>
            <CardDescription>
              <p>
                This project was created for a Discord community/server called "Os Gverreiros" with more than 3000 members.
                I am a <Link href={"https://scbraga.pt/"}>SC Braga</Link> fan and wanted to join a fan community of this club to stay updated on club news
                and have friendly discussions with other fans about some topics from the club.
                In this Discord server, there is a channel dedicated to predicting the outcomes of specific games.
                To sum up, my bot collects these predictions and the final result for each game, announces the correct predictions, and creates a leaderboard.
              </p>
            </CardDescription>
          </div>
          <div className='md:w-1/4'>
            <Section>
              <SectionTitle title={"Information"} />
              <SectionList>
                <SectionListElement>Java</SectionListElement>
                <SectionListElement>JDA</SectionListElement>
                <SectionListElement>SQLite</SectionListElement>
                <SectionListElement>Maven</SectionListElement>
                <SectionListElement>Python</SectionListElement>
              </SectionList>
            </Section>
          </div>
        </Sections>
      </Card>
    </Container>
  )
}

export default Projects;