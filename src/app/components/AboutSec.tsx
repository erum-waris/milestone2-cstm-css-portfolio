import Image from 'next/image';
import Button from './Button';

const AboutSec = () => {
  return (
    <section className="about-me-container">
      <div className="text-container">
        <h2 className="heading-gradient">
          About Me
        </h2>
        <h1 className="text-big">I am a Passionate FrontEnd Developer</h1>
      <p className="text-content">  I am a passionate developer creating responsive, modern web applications that blend innovative design with seamless functionality. As a dedicated student of the Governor’s Initiative for Artificial Intelligence, Web 3.0, and Metaverse (GIAIC), I’ve been mastering technologies like HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and Next.js.

Currently, I am expanding my expertise in React.js and building a strong foundation in frontend development through the Xounity Online Frontend Bootcamp.

Driven by a love for learning and innovation, I strive to craft efficient and visually appealing digital experiences.

My academic journey began with matriculation from <b>Islamia Girl High School</b> , where I graduated with an A+ grade, securing 81% from 2008 to 2010. Pursuing my passion for learning, I am now completing an Intermediate Degree in Commerce through the Ziauddin Board, Karachi. I have already cleared HSC Part I with an A+ grade and 86%, and I am currently preparing for HSC Part II.
I successfully completed an Intermediate-Level English Language Course through SKH Online Education, enhancing my communication skills and linguistic proficiency. Here is a Certication:
                </p>
        <div className="buttons">
          <Button text="LinkedIn" href="https://www.linkedin.com/in/erum-waris-16008b282/" />
          <Button text="GitHub" href="https://github.com/erum-waris" />
        </div>
        </div>

      {/* Right Image */}
      <div className="image-container ">
        <Image
          src="/images/lang-certificate.png"
          alt="Developer"
          width={350}
          height={350}
          className="about-me-img"
        />
         <Image
          src="/images/certificate.jpeg"
          alt="Developer"
          width={350}
          height={350}
          className="about-me-img"
        />
      </div>
    
    </section>
  );
};

export default AboutSec;
