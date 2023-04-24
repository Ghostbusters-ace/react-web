import { Button, Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

const { Title } = Typography;

const Header = styled.header`
  padding: 16px 32px;
  background-color: #1677ff;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const HeaderActions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const MainContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 32px;
`;

const Layout = ({ children }) => {
  return (
    <div>
      <Header>
        <Title level={3} style={{ margin: 0, color: "white" }}>
          My Recipes Book
        </Title>
        <HeaderActions>
          <Link to={"/"}>
            <Button type="default">Toute les recettes</Button>
          </Link>
          <Link to={"/create"}>
            <Button type="default">Ajouter</Button>
          </Link>
        </HeaderActions>
      </Header>
      <MainContent>{children}</MainContent>
    </div>
  );
};

export default Layout;
