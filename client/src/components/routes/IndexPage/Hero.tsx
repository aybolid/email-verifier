import { NavLink } from 'react-router-dom';
import { HeroWrapper } from './Hero.styled';

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="content">
        <h1 className="title">
          Easily verify <span>email addresses</span>
        </h1>
        <p className="info">
          Check email format and DNS records to know if address is valid
        </p>
        <NavLink className="start" to={'/verify'}>
          Start verifying
        </NavLink>
      </div>
      <div className='image-wrapper'>
        <img className='img' src="/valid-email.svg" alt="hero image" />
      </div>
    </HeroWrapper>
  );
}
