import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

function CreatePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    status: "draft",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/pages", {
        title: formData.title,
        slug: formData.slug,
        content: {
          text: formData.content,
        },
        status: formData.status,
      });

      alert("Page Created Successfully");
      navigate("/pages");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Layout>
      <Container>
        <Heading>Create Page</Heading>

        <Card>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                placeholder="Enter page title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Slug</Label>
              <Input
                type="text"
                name="slug"
                placeholder="about-us"
                value={formData.slug}
                onChange={handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label>Content</Label>
              <TextArea
                name="content"
                placeholder="Write your page content..."
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

            <Button type="submit">Create Page</Button>
          </form>
        </Card>
      </Container>
    </Layout>
  );
}

export default CreatePage;