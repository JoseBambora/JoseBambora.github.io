import Container from '../ui/Container';
import { LinkProject, Sections, Card } from '../ui/Card';


function Education() {
  const projectsMaster = [
    <LinkProject href={"https://github.com/AbhimanyuAryan/llm-finetuning"} text={"Large Language Models"} />,
    <LinkProject href={"https://github.com/regedor/pi-ww"} text={"Final Software Engineering Project"} />,
    <LinkProject href={"https://github.com/JoseBambora/Projeto-TDS"} text={"Mobile App BraGuia"} />,
  ]
  const projectsBachelor = [
    <LinkProject href={"https://github.com/JoseBambora/ProjetoEW"} text={"Node JS Website"} />,
    <LinkProject href={"https://github.com/JoseBambora/ProjetoADI"} text={"Artificial Intelligence (ADI)"} />,
    <LinkProject href={"https://github.com/JoseBambora/ProjetoSD"} text={"Distributed Systems"} />,
  ]
  return (
    <Container col={true} center={false}>
      <Card title={"Master of Software Engineering"} label={"University of Minho"} extra={"9/2023-Until Now"}>
        <Sections topics={["Software Engineering", "Artificial Intelligence", "Software Development"]} projects={projectsMaster} />
      </Card>
      <Card title={"Bachelor of Software Engineering"} label={"University of Minho"} extra={"9/2020 - 6/2023"}>
        <Sections topics={["Distributed Systems", "Software Engineering", "Artificial Inteligence"]} projects={projectsBachelor} />
      </Card>
    </Container>
  )
}

export default Education;