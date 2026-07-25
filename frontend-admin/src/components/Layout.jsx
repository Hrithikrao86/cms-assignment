import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import {
  Wrapper,
  Main,
  Content,
} from "./LayoutStyles";

function Layout({ children }) {
  return (
    <Wrapper>
      <Sidebar />

      <Main>
        <Navbar />

        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
}

export default Layout;