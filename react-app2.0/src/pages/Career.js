import Container from '../ui/Container';
import { Card, LinkProject, Sections } from '../ui/Card';


function Career() {
  const projectsCesium = [
    <LinkProject href={"https://github.com/orgs/cesium/teams/sc22-karaokium"} text={"Karaokium"} />
  ]
  const projectsITSector = [
    <LinkProject href={"https://github.com/JoseBambora/ProjetoITSector"} text={"Academy Project"} />,
    <LinkProject href={"https://www.bancomontepio.pt/"} text={"Montepio Net 24"} />,
  ]
  return (
    <Container col={true} center={false}>
      <Card title={"IT Sector"} label={"Summer Lab"} extra={"7/2023 - 7/2023"}>
        <Sections topics={["Java / Java Servlet /Spring Boot", "Web Development"]} projects={projectsITSector} />
      </Card>

      <Card title={"Cesium"} label={"Summer Camp"} extra={"7/2022 - 7/2022"}>
        <Sections topics={["Elixir / Phoenix", "Web Development"]} projects={projectsCesium} />
      </Card>
    </Container>
  )
}

export default Career;