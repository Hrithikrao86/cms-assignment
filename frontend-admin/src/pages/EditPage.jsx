import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import Layout from "../components/Layout";

import {
  Container,
  Card,
  Heading,
  FormGroup,
  Label,
  Input,
  TextArea,
  Select,
  Button,
} from "./PageFormStyles";

function EditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
  });

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      const response = await api.get(`/pages/id/${id}`);

      const page = response.data.page;

      setFormData({
        title: page.title,
        slug: page.slug,
        content: page.content.text,
        status: page.status,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/pages/${id}`, {
        title: formData.title,
        slug: formData.slug,
        content: {
          text: formData.content,
        },
        status: formData.status,
      });

      alert("Page Updated Successfully");
      navigate("/pages");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <Layout>
      <Container>
        <Heading>Edit Page</Heading>

        <Card>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Slug</Label>
              <Input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Content</Label>
              <TextArea
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Status</Label>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </Select>
            </FormGroup>

            <Button type="submit">Update Page</Button>
          </form>
        </Card>
      </Container>
    </Layout>
  );
}

export default EditPage;