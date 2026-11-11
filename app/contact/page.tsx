import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Halden Deep (concept site, form does not send)." };

export default function Contact() {
  return (
    <main>
      <PageHead tag="Contact" title="Contact" intro="Questions, collaborations, or a seat on the next descent. Write to us." tint="#0f4a4c" />
      <section className="px contact sonar" data-tint="#0f4a4c">
        <ContactForm />
        <aside className="details">
          <div>
            <div className="tag">[Email]</div>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </div>
          <div>
            <div className="tag">[Base]</div>
            <p>Address to be confirmed<br />N 62°14′ · W 04°51′</p>
          </div>
          <div>
            <div className="tag">[Hours]</div>
            <p>To be confirmed</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
