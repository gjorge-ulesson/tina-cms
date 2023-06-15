import { Container } from "../components/util/container";
import { Section } from "../components/util/section";
import { Posts } from "../components/posts";
import { Layout } from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <Section className="flex-1">
        <h1>About Us</h1>
      </Section>
    </Layout>
  );
}
