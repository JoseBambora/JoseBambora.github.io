import Container from '../ui/Container';
import { Card, Sections, LinkProject, SectionListElement, Section, SectionTitle, SectionList } from '../ui/Card';


function Career() {
  return (
    <Container col={true} center={false}>
      <Card title={"IT Sector"} label={"Summer Lab"} extra={"7/2023 - 7/2023"}>
        <Sections>
          <Section>
            <SectionTitle title={"Topics"} />
            <SectionList>
              <SectionListElement>Java / Java Servlet /Spring Boot</SectionListElement>
              <SectionListElement>Web Development</SectionListElement>
            </SectionList>
          </Section>
          <Section>
            <SectionTitle title={"Projects"} />
            <SectionList>
              <SectionListElement>
                <LinkProject href={"https://github.com/JoseBambora/ProjetoITSector"} text={"Academy Project"} />
              </SectionListElement>
              <SectionListElement>
                <LinkProject href={"https://www.bancomontepio.pt/"} text={"Montepio Net 24"} />
              </SectionListElement>
            </SectionList>
          </Section>
        </Sections>
      </Card>

      <Card title={"Cesium"} label={"Summer Camp"} extra={"7/2022 - 7/2022"}>
        <Sections>
          <Section>
            <SectionTitle title={"Topics"} />
            <SectionList>
              <SectionListElement>Elixir / Phoenix</SectionListElement>
              <SectionListElement>Web Development</SectionListElement>
            </SectionList>
          </Section>
          <Section>
            <SectionTitle title={"Projects"} />
            <SectionList>
              <SectionListElement>
                <LinkProject href={"https://github.com/orgs/cesium/teams/sc22-karaokium"} text={"Karaokium"} />
              </SectionListElement>
            </SectionList>
          </Section>
        </Sections>
      </Card>
    </Container>
  )
}

export default Career;