import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

import api from "../services/api";
import Layout from "../components/Layout";

import {
  Container,
  Header,
  Heading,
  CreateButton,
  SearchInput,
  TableContainer,
  Table,
  Th,
  Td,
  Status,
} from "./PagesStyles";

function Pages() {
  const navigate = useNavigate();

  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await api.get("/pages");
      setPages(response.data.pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this page?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/pages/${id}`);
      fetchPages();
      alert("Page deleted successfully");
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  const filteredPages = pages.filter(
    (page) =>
      page.title.toLowerCase().includes(search.toLowerCase()) ||
      page.slug.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <Container>
        <Header>
          <Heading>Pages</Heading>

          <CreateButton onClick={() => navigate("/pages/create")}>
            + Create Page
          </CreateButton>
        </Header>

        <SearchInput
          type="text"
          placeholder="Search pages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Title</Th>
                <Th>Slug</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {filteredPages.length === 0 ? (
                <tr>
                  <Td colSpan="4" style={{ textAlign: "center" }}>
                    No pages found.
                  </Td>
                </tr>
              ) : (
                filteredPages.map((page) => (
                  <tr key={page._id}>
                    <Td>{page.title}</Td>

                    <Td>{page.slug}</Td>

                    <Td>
                      <Status
                        style={{
                          background:
                            page.status === "published"
                              ? "#dcfce7"
                              : "#fef3c7",
                          color:
                            page.status === "published"
                              ? "#15803d"
                              : "#b45309",
                        }}
                      >
                        {page.status}
                      </Status>
                    </Td>

                    <Td>
                      <button
                        onClick={() =>
                          navigate(`/pages/edit/${page._id}`)
                        }
                        style={{
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          color: "#2563eb",
                          marginRight: "15px",
                          fontSize: "18px",
                        }}
                      >
                        <FaEdit />
                      </button>

                      <button
                        onClick={() => handleDelete(page._id)}
                        style={{
                          border: "none",
                          background: "transparent",
                          cursor: "pointer",
                          color: "#dc2626",
                          fontSize: "18px",
                        }}
                      >
                        <FaTrash />
                      </button>
                    </Td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </TableContainer>
      </Container>
    </Layout>
  );
}

export default Pages;