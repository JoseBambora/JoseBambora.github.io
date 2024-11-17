import Container from '../ui/Container';
import { Card, CardSideBySide, Section, Sections } from '../ui/Card';
import { Table } from '../ui/Table';

function LevelToStart(level) {
  const number = [...Array(level).keys()]
  return (
    <div className="flex space-x-3 items-start">
      {number.map((_, index) => <span key={index} className='bg-zinc-500 dark:bg-white w-5 h-5 rounded-full'></span>)}
    </div>
  )
}

function DictToArray(array) {
  return array.map(({ name, level }) => [name, LevelToStart(level)])
}

function Skills() {
  const databases = DictToArray([
    { name: 'Mongo DB', level: 5 },
    { name: 'MySQL', level: 4 },
    { name: 'SQLServer', level: 4 },
    { name: 'SQLite', level: 4 },
    { name: 'Realm', level: 4 },
    { name: 'PostgreSQL', level: 4 },
  ])
  const extra = DictToArray([
    { name: 'Machine Learning', level: 4 },
    { name: 'UML', level: 4 },
    { name: 'Web Development', level: 4 },
    { name: 'Docker', level: 4 },
    { name: 'Cloud', level: 3 },
  ])
  const programming_languages = DictToArray([
    { name: 'Java', level: 5 },
    { name: 'Python', level: 5 },
    { name: 'JavaScript', level: 4 },
    { name: 'Kotlin', level: 4 },
    { name: 'C', level: 4 },
    { name: 'Ruby', level: 4 },
    { name: 'Haskell', level: 3 },
    { name: '.NET C#', level: 3 },
    { name: 'Dart', level: 2 },
  ])
  const frameworks1 = DictToArray([
    { name: 'React Native', level: 4 },
    { name: 'React JS', level: 4 },
    { name: 'Android', level: 4 },
    { name: 'NodeJS', level: 4 },
    { name: 'Scikit-Learn', level: 4 },
    { name: 'Pandas', level: 4 },
    { name: 'Numpy', level: 4 },
    { name: 'MatPlotLib', level: 4 },
    { name: 'Ruby on Rails', level: 4 },
  ])
  const frameworks2 = DictToArray([
    { name: 'TensorFlow', level: 3 },
    { name: 'PyTorch', level: 3 },
    { name: 'Spring Boot', level: 3 },
    { name: 'Flask', level: 3 },
    { name: 'JQuery', level: 3 },
    { name: 'Flutter', level: 2 },
    { name: 'Blazor', level: 2 },
    { name: 'OpenGL', level: 2 }
  ])
  const soft_skills = DictToArray([
    { name: 'Hard Work', level: 5 },
    { name: 'Dedication', level: 5 },
    { name: 'Team Work', level: 4 },
    { name: 'Individual Work', level: 4 },
  ])
  return (
    <Container center={false} col={true}>
      <CardSideBySide>
        <Card title={"Programming Languages"}>
          <Table header={["Programming Languages", "Level"]} body={programming_languages} />
        </Card>
        <Card title={"Databases"}>
          <Table header={["Databases", "Level"]} body={databases} />
        </Card>
      </CardSideBySide>
      <CardSideBySide>
        <Card title={"Frameworks"}>
          <Sections>
            <Section>
              <Table header={["Frameworks", "Level"]} body={frameworks1} />
            </Section>
            <Section>
              <Table header={["Frameworks", "Level"]} body={frameworks2} />
            </Section>
          </Sections>
        </Card>
      </CardSideBySide>
      <CardSideBySide>
        <Card title={"Extra"}>
          <Table header={["Extra", "Level"]} body={extra} />
        </Card>
        <Card title={"Soft Skills"}>
          <Table header={["Soft Skills", "Level"]} body={soft_skills} />
        </Card>
      </CardSideBySide>
    </Container >
  )
}

export default Skills;