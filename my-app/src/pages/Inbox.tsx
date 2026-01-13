import { useState } from "react";
import Layout from "../components/Layout";
import { emails } from "../data/emails";

export default function Inbox() {
  const [selectedEmail, setSelectedEmail] = useState<any>(null);
  const [language, setLanguage] = useState<"en" | "pt">("en");

  function toggleLanguage() {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  }

  return (
    <Layout>
      <h1>Inbox</h1>

      <div className="inbox-container">
        <div className="email-list">
          {emails.map((email) => (
            <div
              key={email.id}
              className="email-item"
              onClick={() => setSelectedEmail(email)}
            >
              <strong>{email.client}</strong>
              <p>{email.subject[language]}</p>
            </div>
          ))}
        </div>

        {selectedEmail && (
          <div className="email-thread">
            <h3>{selectedEmail.subject[language]}</h3>

            <p>{selectedEmail.message[language]}</p>

            <div className="email-actions">
              <button
                className="btn-secondary"
                onClick={toggleLanguage}
              >
                Traduzir
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
