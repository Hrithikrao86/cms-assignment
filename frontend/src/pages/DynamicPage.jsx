import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

import {
  Wrapper,
  Card,
  Title,
  Content,
  Loading,
  Error,
} from "./DynamicPageStyles";

function DynamicPage() {
  const { slug } = useParams();

  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPage();
  }, [slug]);

  const fetchPage = async () => {
    try {
      const response = await api.get(`/pages/${slug}`);
      setPage(response.data.page);
    } catch (err) {
      setPage(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <>
        <Navbar />
        <Loading>Loading...</Loading>
      </>
    );

  if (!page)
    return (
      <>
        <Navbar />

        <Error>
          <h1>404</h1>
          <p>Page Not Found</p>
        </Error>

        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      <Wrapper>
        <Card>
          <Title>{page.title}</Title>

          <Content>{page.content.text}</Content>
        </Card>
      </Wrapper>

      <Footer />
    </>
  );
}

export default DynamicPage;