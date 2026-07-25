import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFileAlt,
  FaCheckCircle,
  FaRegClock,
  FaPlus,
  FaList,
  FaSignOutAlt,
} from "react-icons/fa";

import api from "../services/api";
import Layout from "../components/Layout";

import {
  Container,
  Header,
  Heading,
  SubHeading,
  CardContainer,
  Card,
  IconBlue,
  IconGreen,
  IconOrange,
  CardInfo,
  CardTitle,
  CardValue,
  SectionTitle,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  LogoutButton,
} from "./DashboardStyles";

function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    draft: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await api.get("/pages");

      const pages = res.data.pages;

      setStats({
        total: pages.length,
        published: pages.filter(
          (page) => page.status === "published"
        ).length,
        draft: pages.filter(
          (page) => page.status === "draft"
        ).length,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout>
     <Container
 
>
        <Header>
          <div>
            <Heading>Dashboard</Heading>
            <SubHeading>
              Welcome back! Here's an overview of your CMS.
            </SubHeading>
          </div>
        </Header>

        <CardContainer>
          <Card>
            <IconBlue>
              <FaFileAlt />
            </IconBlue>

            <CardInfo>
              <CardTitle>Total Pages</CardTitle>
              <CardValue>{stats.total}</CardValue>
            </CardInfo>
          </Card>

          <Card>
            <IconGreen>
              <FaCheckCircle />
            </IconGreen>

            <CardInfo>
              <CardTitle>Published</CardTitle>
              <CardValue>{stats.published}</CardValue>
            </CardInfo>
          </Card>

          <Card>
            <IconOrange>
              <FaRegClock />
            </IconOrange>

            <CardInfo>
              <CardTitle>Draft</CardTitle>
              <CardValue>{stats.draft}</CardValue>
            </CardInfo>
          </Card>
        </CardContainer>

        <SectionTitle>Quick Actions</SectionTitle>

        <ButtonContainer>
          <PrimaryButton onClick={() => navigate("/pages/create")}>
            <FaPlus />
            Create Page
          </PrimaryButton>

          <SecondaryButton onClick={() => navigate("/pages")}>
            <FaList />
            Manage Pages
          </SecondaryButton>

          <LogoutButton onClick={logout}>
            <FaSignOutAlt />
            Logout
          </LogoutButton>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}

export default Dashboard;