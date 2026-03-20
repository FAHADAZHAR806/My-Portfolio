import { Mail, MessageCircle, Github, Linkedin } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

export default function ContactSection({ data }) {
  const { contact } = data;
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center
                 bg-light-bg dark:bg-dark-bg
                 px-6 sm:px-10 lg:px-14 py-20"
    >
      <div className="w-full max-w-xl mx-auto text-center">
        <SectionHeader title="Get In Touch" />

        <p
          className="font-body text-base leading-relaxed mb-10
                      text-light-subtle dark:text-dark-subtle"
        >
          I'm currently open to new opportunities. Whether you have a project
          idea, a question, or just want to connect — my inbox is always open.
        </p>

        {/* Email & WhatsApp */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       bg-[#EA4335] text-light-text dark:text-dark-text -bg font-ui font-semibold text-sm
                       hover:brightness-110 hover:-translate-y-0.5
                       shadow-md hover:shadow-accent/30 transition-all duration-200"
          >
            <Mail size={16} strokeWidth={2} />
            {contact.email}
          </a>

          <a
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            style={{ backgroundColor: "#25D366" }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                       font-ui font-semibold text-sm  text-light-text dark:text-dark-text
                       hover:brightness-110 hover:-translate-y-0.5
                       shadow-md transition-all duration-200"
          >
            <MessageCircle size={16} strokeWidth={2} />
            {contact.phone}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex gap-3 justify-center">
          {[
            {
              href: contact.github,
              Icon: Github,
              label: "GitHub",
              bg: "#24292e",
              color: "#ffffff",
            },
            {
              href: contact.linkedin,
              Icon: Linkedin,
              label: "LinkedIn",
              bg: "#0077B5",
              color: "#ffffff",
            },
          ].map(({ href, Icon, label, bg, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={label}
              style={{ backgroundColor: bg, color: color }}
              className="w-11 h-11 rounded-xl flex items-center justify-center
                         hover:-translate-y-0.5 hover:brightness-110
                         transition-all duration-200"
            >
              <Icon size={19} strokeWidth={1.8} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
