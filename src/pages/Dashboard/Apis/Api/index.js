import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "../../../../api/axios";
import Container from "../../../../components/Generic/Layout/Container";
import Badge from "../../../../components/Generic/Badge";
import Heading from "../../../../components/Generic/Heading";
import Text from "../../../../components/Generic/Text";
import Link from "../../../../components/Generic/Link";
import { Skeleton } from "@mui/material";

const API = () => {
  const [searchParams] = useSearchParams();
  const _id = searchParams.get("_id");

  // react-query - fetches api from server per API
  const {
    data: api,
    isLoading: loadingAPI,
    error,
  } = useQuery(
    ["fetch-api-by-id", _id],
    async () => {
      return await axios.get(`/apis/${_id}`);
    },
    {
      onSuccess: (res) => {
        document.title = `${res.data.API} - API Archive`;
        console.log("API fetch response by id", res);
      },
      onError: (err) => {
        console.log(err.message);
      },
    }
  );

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!api?.data) {
    return <div>API not found</div>;
  }

  return (
    <div className="api-page">
      <Container>
        <div className="api-page-content mt-8">
          <div className="flex items-center">
            {!loadingAPI ? (
              <Heading>{api?.data?.API}</Heading>
            ) : (
              <Skeleton width={150} height={35} />
            )}

            {!loadingAPI ? (
              <Badge className="ml-4">{api?.data?.Category}</Badge>
            ) : (
              <Skeleton width={100} height={50} className="!ml-4" />
            )}
          </div>

          <div className="api-body mt-2">
            {!loadingAPI ? (
              <Link
                italic
                href={api?.data?.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {api?.data?.Link}
              </Link>
            ) : (
              <Skeleton width={200} height={35} />
            )}
            {!loadingAPI ? (
              <Text className="mt-4 opacity-90">{api?.data?.Description}</Text>
            ) : (
              <div>
                <Skeleton width={250} height={35} />
                <Skeleton width={190} height={35} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default API;
