import "./RoutesHeroStyles.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function RoutesHero(props) {
  return (
    <>
      <div className={props.cName}>
        <LazyLoadImage
          src={props.routeImg}
          alt="Image Alt"
          className="routeImg"
          effect="blur"
        />
        <div className="route-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a className={props.btnClass} href={props.url}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default RoutesHero;
