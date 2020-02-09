import { StyledHeroCarousel } from './Hero.styles';

import Wallpaper1 from '../../static/wallpaper/fractal-nucleus.jpg';
import Wallpaper2 from '../../static/wallpaper/star-celestial-body.jpg';
import Wallpaper3 from '../../static/wallpaper/polygonal-mountain.jpg';

const HeroCarousel = () => (
  <StyledHeroCarousel
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    bullets={false}
    organicArrows={false}
  >
    <div data-src={Wallpaper1}>1</div>
    <div data-src={Wallpaper2}>2</div>
    <div data-src={Wallpaper3}>3</div>
  </StyledHeroCarousel>
);

export default HeroCarousel;
