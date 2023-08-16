import "./RoutesHeroStyles.css";

function RoutesHero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.routeImg} alt="routeImg" className="routeImg" loading="lazy" />
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