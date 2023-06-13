import Container from "@/components/Container";
import MainLayout from "@/components/Layouts/MainLayout/MainLayout";
import SEO from "@/components/Seo";

export default function Home() {
  return (
    <>
      <SEO title="techday" description={"Supperb Tech Day"} />
      <Container>
        <h2>Welcome to techday</h2>
      </Container>
    </>
  );
}

Home.layout = MainLayout;
