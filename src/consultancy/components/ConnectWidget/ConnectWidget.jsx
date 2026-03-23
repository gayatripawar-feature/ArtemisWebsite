import React, { useState } from "react";
import styles from "./ConnectWidget.module.css";
import { FaWhatsapp } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ConnectWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [customQuery, setCustomQuery] = useState("");
  const navigate = useNavigate();

  const whatsappBase = "https://wa.me/917447777412?text=";
  const openWhatsApp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`${whatsappBase}${encoded}`, "_blank", "noreferrer");
  };

  return (
    <>
      {isOpen && (
        <div className={styles.panel} role="dialog" aria-label="Connect with us">
          <button
            type="button"
            className={styles.panelClose}
            onClick={() => setIsOpen(false)}
            aria-label="Close connect panel"
          >
            ✕
          </button>
          <div className={styles.panelHeader}>
            <p>
              Chat with us on WhatsApp or book a free demo to explore our services and get expert support.
            </p>
          </div>
          <div className={styles.panelBody}>
            <h2>How can we help you today?</h2>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.action}
                aria-label="Chat with us on WhatsApp"
                onClick={() => setShowChatOptions((prev) => !prev)}
              >
                <span className={`${styles.actionIcon} ${styles.actionIconGreen}`}>
                  <FaWhatsapp size={22} color="#25D366" />
                </span>
                <span>Chat with us</span>
              </button>

              {showChatOptions && (
                <div className={styles.chatOptions}>
                  <button
                    type="button"
                    className={styles.chatOption}
                    onClick={() => openWhatsApp("Hello Artemis Consultants, I'm interested in project consultation.")}
                  >
                    Project consultation
                  </button>
                  <button
                    type="button"
                    className={styles.chatOption}
                    onClick={() => openWhatsApp("Hello Artemis Consultants, I have a pricing inquiry.")}
                  >
                    Pricing inquiry
                  </button>
                  <button
                    type="button"
                    className={styles.chatOption}
                    onClick={() => openWhatsApp("Hello Artemis Consultants, I'd like to schedule a demo.")}
                  >
                    Schedule a demo
                  </button>
                  <button
                    type="button"
                    className={styles.chatOption}
                    onClick={() => openWhatsApp("Hello Artemis Consultants, I need support.")}
                  >
                    Support
                  </button>
                  <div className={styles.chatCustom}>
                    <input
                      type="text"
                      value={customQuery}
                      onChange={(e) => setCustomQuery(e.target.value)}
                      placeholder="Other: type your query"
                      className={styles.chatInput}
                    />
                    <button
                      type="button"
                      className={styles.chatSend}
                      onClick={() => {
                        if (customQuery.trim()) {
                          openWhatsApp(`Hello Artemis Consultants, ${customQuery.trim()}`);
                          setCustomQuery("");
                        }
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
              <button
                type="button"
                className={styles.action}
                onClick={() => {
                  setIsOpen(false);
                  navigate("/consultancy/contact#contact-form");
                }}
                aria-label="Book a free demo"
              >
                <span className={`${styles.actionIcon} ${styles.actionIconPurple}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2h-2v2h2v1H7V4h2V2H7Zm13 7H4v9h16V9Zm-2 2v2h-2v-2h2Zm-4 0v2h-2v-2h2ZM10 11v2H8v-2h2Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>Book a free demo</span>
              </button>
            </div>
            <p className={styles.legal}>
              Chat may be recorded as described in our Privacy Policy.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.fab}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
      >
        <span className={styles.fabIcon} aria-hidden="true">
          <MdChat size={22} color="var(--primary-maroon)" />
        </span>
        <span>Connect With Us</span>
      </button>
    </>
  );
};

export default ConnectWidget;
