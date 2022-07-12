import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "../../../../api/axios";
import Container from "../../../../components/Generic/Layout/Container";
import Badge from "../../../../components/Generic/Badge";
import Heading from "../../../../components/Generic/Heading";
import Text from "../../../../components/Generic/Text";
import Link from "../../../../components/Generic/Link";

const API = () => {
  const [searchParams] = useSearchParams();
  const _id = searchParams.get("_id");
  const {
    data: api,
    isLoading: loadingAPI,
    error,
  } = useQuery(["fetch-api-by-id", _id], async () => {
    return await axios.get(`/apis/${_id}`);
  });

  if (loadingAPI) {
    return <div>Loading ....</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!api.data) {
    return <div>API not found</div>;
  }

  return (
    <div className="api-page">
      <Container>
        <div className="api-page-content mt-8">
          <div className="flex items-center">
            <Heading>{api.data.API}</Heading>
            <Badge className="ml-4">{api.data.Category}</Badge>
          </div>

          <div className="api-body mt-2">
            <Link
              italic
              href={api.data.Link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {api.data.Link}
            </Link>
            <Text className="mt-4 opacity-90">{api.data.Description}</Text>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default API;
