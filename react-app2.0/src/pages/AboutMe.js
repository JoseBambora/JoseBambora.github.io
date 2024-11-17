
import Container from '../ui/Container';
import { Card, CardSideBySide, Section, SectionList, SectionListElement, SectionListHorizontal, SectionListHorizontalElement } from '../ui/Card';
import Link from '../ui/Link';
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { FaFilePdf } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import CopyToClipBoard from '../ui/CopyToClipBoard';


function AboutMeIconText({ icon, text, copyToClipboard }) {
  return (
    <div className="flex text-lg space-x-3 items-center">
      <div className='text-xl text-zinc-700 dark:text-white'>{icon}</div>
      <p>{text}</p>
      {copyToClipboard ?
        <CopyToClipBoard text={text} />
        : null}
    </div>
  )
}

function AboutMeImportantInfo() {
  return (
    <Section>
      <SectionList>
        <SectionListElement>
          <AboutMeIconText icon={<FaEnvelope />} text={"josecarvalho.ei@gmail.com"} copyToClipboard={true} />
        </SectionListElement>
        <SectionListElement>
          <AboutMeIconText icon={<FaPhone />} text={"(+351) 969 598 852"} copyToClipboard={true} />
        </SectionListElement>

        <div className='hidden md:block'>
          <SectionListHorizontal>
            <SectionListHorizontalElement>
              <Link href={"cvs/JoséCarvalho_PT.pdf"}>
                <AboutMeIconText icon={<FaFilePdf />} text={"Portuguese"} />
              </Link>
            </SectionListHorizontalElement>
            <SectionListHorizontalElement>
              <Link href={"cvs/JoséCarvalho_EN.pdf"}>
                <AboutMeIconText icon={<FaFilePdf />} text={"English"} />
              </Link>
            </SectionListHorizontalElement>
          </SectionListHorizontal>
        </div>
        <div className='md:hidden'>
          <SectionList>
            <SectionListElement>
              <Link href={"cvs/JoséCarvalho_PT.pdf"}>
                <AboutMeIconText icon={<FaFilePdf />} text={"Portuguese CV"} />
              </Link>
            </SectionListElement>
            <SectionListElement>
              <Link href={"cvs/JoséCarvalho_EN.pdf"}>
                <AboutMeIconText icon={<FaFilePdf />} text={"English CV"} />
              </Link>
            </SectionListElement>
          </SectionList>
        </div>
      </SectionList>
    </Section>
  )
}

function AboutMePicture() {
  return (
    <Container col={false} center={false}>
      <img src="Zé.jpg" alt="My face" className='aspect-square w-1/3 md:w-1/4 object-contain mr-3 rounded-lg' />
      <Container col={false} center={false}>
        <div className='flex flex-col space-y-3'>
          <h1 className='text-3xl font-bold'>José Carvalho</h1>
          <AboutMeIconText icon={<FaLocationDot />} text={"Braga, Portugal"} />
          <Section>
            <div className='hidden md:block'>
              <SectionListHorizontal>
                <SectionListHorizontalElement>Software Engineering</SectionListHorizontalElement>
                <SectionListHorizontalElement>Programmer</SectionListHorizontalElement>
              </SectionListHorizontal>
            </div>
            <div className='md:hidden'>
              <SectionList>
                <SectionListElement>Software Engineering</SectionListElement>
                <SectionListElement>Programmer</SectionListElement>
              </SectionList>
            </div>
          </Section>
        </div>
      </Container>
    </Container >
  )
}

function AboutMe() {
  return (
    <Container col={true} center={false}>
      <CardSideBySide>
        <Card>
          <AboutMePicture />
        </Card>
        <Card title={'Contacts'}>
          <AboutMeImportantInfo />
        </Card>
      </CardSideBySide>
      <Card title={'Introduction'}>
        <p>Hello! My name is José Carvalho, I am 22 years old and I live in Braga, Portugal 🇵🇹.</p>
      </Card>
      <Card title={'Life'}>
        <p>
          Since I was born, I have always loved technology. When I was younger, I enjoyed playing various video games across different categories, from car racing to football games.
          One of the reasons I became a software engineer is this early passion for computers, mobile phones, and consoles.
        </p>
        <p>
          I entered the software engineering world in 2019, with C# as my first programming language.
          My favorite programming languages are Java, Python, and Kotlin, but I also enjoy C#, JavaScript, and C.
          Currently, I am still pursuing my degree in software engineering, and I am in the final year of my master's program at the <Link href={'https://www.uminho.pt/PT'}>University of Minho</Link> in Braga, Portugal.
        </p>
        <p>
          Regarding activities outside of computers, such as sports or physical activity, I have been going to the gym since 2023.
          In the past, I have practiced canoeing, football, and swimming. In canoeing, I was a federated athlete but did not achieve any significant accomplishments.
          Since 2018, I have been donating blood three times a year.
        </p>
        <p>
          The rest of my hobbies are just basically, hang out with my friends, watch some movies, play some video games and also developing personal projects, like this website.
        </p>
      </Card>
      <Card title={'Curiosities'}>
        <p>
          Like 90% of Portuguese people, I support a football club ⚽ and, obviously, football is like a religion 😅.
          The club that I support is <Link href={'https://scbraga.pt/'}>SC Braga</Link>, and I have been associated with the club since I was born.
        </p>
        <p>
          The people that more inspire me are my parents, for all the hard work and dedication that they gave me. In addition, Cristiano Ronaldo for his determination and hard work to be always the best and for the gym, I took insipiration from Jay Cutler and Kevin Levrone.
        </p>
      </Card>
    </Container>
  )
}

export default AboutMe