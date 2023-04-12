import { Result } from "antd";
import { useRouteError, Link } from "react-router-dom";
import FillButton from "../../components/UI/Buttons/FillButton";
import { mainPaths } from "../../routers/publicRouter";

const ErorPage = () => {
  const status = "404";
  return (
    <Result
      status={status}
      title={status}
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to={mainPaths.HOME}>
          <FillButton>Back Home</FillButton>
        </Link>
      }
    />
  );
};
export default ErorPage;
