import Container from '../ui/Container';
import { Card, Sections, LinkProject, SectionListElement, Section, SectionTitle, SectionList, CardDescription } from '../ui/Card';
import { FaGlobe } from "react-icons/fa6";
import Link from '../ui/Link';


function Career() {
  return (
    <Container col={true} center={false}>
      <Card title={"IT Sector"} label={"Summer Lab"} extra={"7/2023 - 7/2023"} >
        <Sections>
          <div className='md:w-4/5'>
            <CardDescription>
              <p>
                I was able to work a real project called Net 24 which is a website from Montepio Bank.
                I spent most of the time at the front-end, but I also worked on the back-end.
                In addition to this, I learned more about desing patterns, cloud and did a basic Spring Boot academy project.
              </p>
              <p>
                This was my first professional experience, and I am very grateful to ITSector and all the people I interacted with and who helped me,
                with special thanks to <Link href={"https://www.linkedin.com/in/jbrites/"}>João Brites</Link>, who was responsible for giving me tasks
                and providing all the help I needed.
              </p>
            </CardDescription>
          </div>
          <div className='md:w-1/4'>
            <Section>
              <SectionTitle title={"Information"} />
              <SectionList>
                <SectionListElement>Java / Java Servlet / Spring Boot</SectionListElement>
                <SectionListElement>Web Development</SectionListElement>
                <SectionListElement>
                  <LinkProject href={"https://github.com/JoseBambora/ProjetoITSector"} text={"Academy Project"} />
                </SectionListElement>
                <SectionListElement>
                  <LinkProject href={"https://www.bancomontepio.pt/"} text={"Montepio Net 24"} icon={<FaGlobe />} />
                </SectionListElement>
              </SectionList>
            </Section>
          </div>
        </Sections>
      </Card>

      <Card title={"Cesium"} label={"Summer Camp"} extra={"7/2022 - 7/2022"}>
        <Sections>
          <div className='md:w-4/5'>
            <CardDescription>
              <p>
                I was able to work a real project for the Software Engineering students core at University of Minho Cesium.
                The name of the project that I integrated is Karaokium.
                I only worked at the front-end, basically developing html some pages.
              </p>
              <p>
                I really love this experience, not only for the project itself, but by all the organized activities during this summer camp.
              </p>
            </CardDescription>
          </div>
          <div className='md:w-1/4'>
            <Section>
              <SectionTitle title={"Information"} />
              <SectionList>
                <SectionListElement>Elixir / Phoenix</SectionListElement>
                <SectionListElement>Web Development</SectionListElement>
                <SectionListElement>
                  <LinkProject href={"https://github.com/orgs/cesium/teams/sc22-karaokium"} text={"Karaokium"} />
                </SectionListElement>
              </SectionList>
            </Section>
          </div>
        </Sections>
      </Card>
    </Container>
  )
}

export default Career;