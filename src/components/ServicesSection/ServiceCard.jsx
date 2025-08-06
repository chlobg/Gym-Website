import "../../assets/css/fontello.css";

const ServiceCard = ({ iconClass, title, description }) => {
  return (
    <div className="service-card">
      <i className={iconClass}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
