import Container from '../ui/Container';
import { LinkProject, Sections, Section, SectionList, SectionListElement, SectionTitle, Card } from '../ui/Card';


function Education() {
  return (
    <Container col={true} center={false}>
      <Card title={"Master of Software Engineering"} label={"University of Minho"} extra={"9/2023-Until Now"}>
        <Sections>
          <Section>
            <SectionTitle title={"Topics"} />
            <SectionList>
              <SectionListElement>Software Engineering</SectionListElement>
              <SectionListElement>Artificial Intelligence</SectionListElement>
              <SectionListElement>Software Development</SectionListElement>
            </SectionList>
          </Section>
          <Section>
            <SectionTitle title={"Projects"} />
            <SectionList>
              <SectionListElement><LinkProject href={"https://github.com/AbhimanyuAryan/llm-finetuning"} text={"Large Language Models"} /></SectionListElement>
              <SectionListElement><LinkProject href={"https://github.com/regedor/pi-ww"} text={"Final Software Engineering Project"} /></SectionListElement>
              <SectionListElement><LinkProject href={"https://github.com/JoseBambora/Projeto-TDS"} text={"Mobile App BraGuia"} /></SectionListElement>
            </SectionList>
          </Section>
        </Sections>
      </Card>
      <Card title={"Bachelor of Software Engineering"} label={"University of Minho"} extra={"9/2020 - 6/2023"}>
        <Sections>
          <Section>
            <SectionTitle title={"Topics"} />
            <SectionList>
              <SectionListElement>Distributed Systems</SectionListElement>
              <SectionListElement>Software Engineering</SectionListElement>
              <SectionListElement>Artificial Inteligence</SectionListElement>
            </SectionList>
          </Section>
          <Section>
            <SectionTitle title={"Projects"} />
            <SectionList>
              <SectionListElement><LinkProject href={"https://github.com/JoseBambora/ProjetoEW"} text={"Node JS Website"} /></SectionListElement>
              <SectionListElement><LinkProject href={"https://github.com/JoseBambora/ProjetoADI"} text={"Artificial Intelligence (ADI)"} /></SectionListElement>
              <SectionListElement><LinkProject href={"https://github.com/JoseBambora/ProjetoSD"} text={"Distributed Systems"} /></SectionListElement>
            </SectionList>
          </Section>
        </Sections>
      </Card>
    </Container>
  )
}

export default Education;