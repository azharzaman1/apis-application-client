import { useNavigate, createSearchParams } from "react-router-dom";
import Heading from "../../../Generic/Heading";
import Link from "../../../Generic/Link";
import Text from "../../../Generic/Text";
import PropTypes from "prop-types";
import Badge from "../../../Generic/Badge";

const APICard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="card-primary flex flex-col content-card api-card px-4 py-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-150 shadow border border-gray-100 min-h-[175px]">
      <div className="header flex justify-between items-center max-w-full">
        <Heading
          type="secondary"
          className="cursor-pointer"
          onClick={() => {
            navigate({
              pathname: data.Slug,
              search: `?${createSearchParams({ _id: data._id })}`,
            });
          }}
        >
          {data.API}
        </Heading>
        <div className="min-w-[125px] flex items-center justify-end">
          <Badge>{data.Category}</Badge>
        </div>
      </div>
      <div className="mt-4">
        <Text>{data.Description}</Text>
      </div>
      <div className="mt-auto">
        <Link href={data.Link} target="_blank" rel="noopener noreferrer" italic>
          {data.Link}
        </Link>
      </div>
    </div>
  );
};

APICard.propTypes = {
  data: PropTypes.object,
};

export default APICard;
