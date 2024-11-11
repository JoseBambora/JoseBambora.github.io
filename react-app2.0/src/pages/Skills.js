import Container from '../ui/Container';
import { Card, CardSideBySide } from '../ui/Card';
import { Table } from '../ui/Table';


function Skills() {
  const databases = [
    { name: 'Mongo DB', level: 5 },
    { name: 'MySQL', level: 4 },
    { name: 'SQLServer', level: 4 },
    { name: 'SQLite', level: 4 },
    { name: 'Realm', level: 4 },
  ]
  const extra = [
    { name: 'Machine Learning', level: 4 },
    { name: 'UML', level: 4 },
    { name: 'Web Development', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'Cloud', level: 3 },
  ]
  const programming_languages = [
    { name: 'Java', level: 5 },
    { name: 'Python', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'Kotlin', level: 4 },
    { name: 'C', level: 4 },
    { name: 'Haskell', level: 3 },
    { name: '.NET C#', level: 3 },
    { name: 'Dart', level: 2 },
  ]
  const frameworks = [
    { name: 'React Native', level: 4 },
    { name: 'React JS', level: 4 },
    { name: 'Android', level: 4 },
    { name: 'NodeJS', level: 4 },
    { name: 'Scikit-Learn', level: 4 },
    { name: 'Pandas', level: 4 },
    { name: 'Numpy', level: 4 },
    { name: 'MatPlotLib', level: 4 },
    { name: 'TensorFlow', level: 3 },
    { name: 'PyTorch', level: 3 },
    { name: 'Spring Boot', level: 3 },
    { name: 'Flask', level: 3 },
    { name: 'JQuery', level: 3 },
    { name: 'Flutter', level: 2 },
    { name: 'Blazor', level: 2 },
    { name: 'OpenGL', level: 2 },
  ]
  const soft_skills = [
    { name: 'Hard Work', level: 5 },
    { name: 'Dedication', level: 5 },
    { name: 'Team Work', level: 4 },
    { name: 'Individual Work', level: 4 },
  ]
  return (
    <Container center={false} col={true}>
      <CardSideBySide>
        <Card title={"Programming Languages"}>
          <Table header={["Programming Languages", "Level"]} body={programming_languages.map(({ name, level }) => [name, level])} />
        </Card>
        <Card title={"Extra"}>
          <Table header={["Extra", "Level"]} body={extra.map(({ name, level }) => [name, level])} />
        </Card>
      </CardSideBySide>
      <CardSideBySide>
        <Card title={"Databases"}>
          <Table header={["Databases", "Level"]} body={databases.map(({ name, level }) => [name, level])} />
        </Card>
        <Card title={"Soft Skills"}>
          <Table header={["Soft Skills", "Level"]} body={soft_skills.map(({ name, level }) => [name, level])} />
        </Card>
      </CardSideBySide>
      <CardSideBySide>
        <Card title={"Frameworks"}>
          <Table header={["Frameworks", "Level"]} body={frameworks.map(({ name, level }) => [name, level])} />
        </Card>
      </CardSideBySide>
    </Container >
  )
}

export default Skills;