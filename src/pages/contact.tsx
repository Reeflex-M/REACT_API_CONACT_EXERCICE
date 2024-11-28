import { useParams } from "react-router-dom";

export const Contact = () => {
  const params = useParams();

  return <div>Contact number {params.id}</div>;
};