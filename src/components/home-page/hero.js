import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/danny.jpg"
          alt="Danny Bogatko"
          width={300}
          height={350}
        />
      </div>
      <h1>Hi I'm Danny</h1>
      <p>I blog about web development - especially front end frameworks.</p>
    </section>
  );
};
export default Hero;
