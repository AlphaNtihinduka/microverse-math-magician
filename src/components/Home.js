import Linking from './Linking';
import '../css/home.css';

const Home = () => (
  <>
    <Linking />
    <section className="welcome">
      <h1 className="magic-title">Welcome to our page!</h1>
      <p className="welcome-message"> Magical Mathematics [is] a dazzling tour of math-based magic tricks. . . . Lovers of recreational mathematics, and especially fans of the late Martin Gardner, who contributed the foreword, will find many pleasures in Magical Mathematics  </p>
      <p className="welcome-message"> Maths and magic have been partners for a long time. Back in the days of Pythagoras, numbers were connected more with mysticism than with conjuring, but discoveries like the 3, 4, 5 triangle were enough to make people believe that some numbers must have magical powers.  </p>
    </section>
  </>
);

export default Home;
