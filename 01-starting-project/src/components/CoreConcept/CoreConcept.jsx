/* eslint-disable react/prop-types */
const CoreConcept = ({ image, title, description }) => {
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;
