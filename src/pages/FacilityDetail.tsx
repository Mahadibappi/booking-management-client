import { useParams } from "react-router-dom";
import facilities from "../utils/utils";
const FacilityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const facility = facilities.find((facility) => facility.id === id);
  if (!facility) {
    return <div>Facility not found</div>;
  }

  return (
    <div>
      <h2>{facility.title}</h2>
      <p>{facility.description}</p>
      <p>{facility.price} $ per hour</p>
      <img src={facility.imageUrl} alt={facility.title} />
    </div>
  );
};

export default FacilityDetail;
