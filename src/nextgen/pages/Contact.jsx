import React, { useState, useRef, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import PageBanner from "../components/PageBanner";
import heroImage from "../assets/images/ServicePage/services-hero.jpg";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Visit Us",
    value: "Chovisawadi, Charholi Budruk",
    sublabel: "Pune,Maharashtra 412105",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Call Us",
    value: "+91 7447777413",
    sublabel: "Mon - Sat, 10AM - 6PM IST",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email Us",
    value: "priyanka.patil@artemisinfratech.com",
    sublabel: "We reply within 24 hours",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const phoneDigits = value.replace(/\D/g, "");
      if (phoneDigits.length > 10) {
        setPhoneError("Phone number cannot exceed 10 digits");
      } else {
        setPhoneError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if phone validation error exists
    if (phoneError) {
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyjLRu1gzp1khxurlhpHk9CrskzjgWJ1S5oMcPR1nzcNv9UbBW0d0QkikIGgxW7-EVrqw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contactPage}>
      <PageBanner
        title="Contact Us"
        image={heroImage}
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Contact Info Cards */}
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          {contactInfo.map((info, index) => (
            <div key={index} className={styles.infoCard}>
              <div className={styles.infoIconWrap}>
                <div className={styles.infoIcon}>{info.icon}</div>
                <div className={styles.iconGlow} />
              </div>
              <span className={styles.infoLabel}>{info.label}</span>
              <span className={styles.infoValue}>{info.value}</span>
              <span className={styles.infoSublabel}>{info.sublabel}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainSection}>
        <div className={styles.mainContainer}>
          {/* Left: Text Content */}
          <div className={styles.leftCol}>
            <div className={styles.sectionTag}>
              <span className={styles.tagDot} />
              Get In Touch
            </div>
            <h2 className={styles.sectionTitle}>
              Have a project in mind?
              <span className={styles.titleHighlight}> Let's talk.</span>
            </h2>
            <p className={styles.sectionDesc}>
              Whether you need a custom software solution, want to modernize
              your existing systems, or simply have a question — we're here to
              help. Fill out the form and our team will get back to you within
              24 hours.
            </p>

            <div className={styles.features}>
              {[
                { icon: "⚡", text: "Quick Response — within 24 hours" },
                { icon: "🔒", text: "Your data is secure and confidential" },
                { icon: "💬", text: "Free initial consultation" },
              ].map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <span className={styles.featureText}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className={styles.decoBlock}>
              <div className={styles.decoLine} />
              <div className={styles.decoCircle}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              </div>
              <div className={styles.decoLine} />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={styles.rightCol}>
            <div className={styles.formCard}>
              {/* Card background effects */}
              <div className={styles.formCardGlow} />
              <div className={styles.formCardBorder} />

              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Send us a message</h3>
                <p className={styles.formSubtitle}>
                  Fill in the details below and we'll be in touch.
                </p>
              </div>



              <form
                ref={formRef}
                className={styles.form}
                onSubmit={handleSubmit}
              >
                <div className={styles.formRow}>
                  <div
                    className={`${styles.inputGroup} ${focusedField === "name" ? styles.focused : ""}`}
                  >
                    <label className={styles.inputLabel}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className={styles.input}
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                  <div
                    className={`${styles.inputGroup} ${focusedField === "email" ? styles.focused : ""}`}
                  >
                    <label className={styles.inputLabel}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div
                    className={`${styles.inputGroup} ${focusedField === "phone" ? styles.focused : ""} ${phoneError ? styles.error : ""}`}
                  >
                    <label className={styles.inputLabel}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                    />
                    {phoneError && <span className={styles.errorMsg}>{phoneError}</span>}
                  </div>
                  <div
                    className={`${styles.inputGroup} ${focusedField === "subject" ? styles.focused : ""}`}
                  >
                    <label className={styles.inputLabel}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className={styles.input}
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>

                <div
                  className={`${styles.inputGroup} ${focusedField === "message" ? styles.focused : ""}`}
                >
                  <label className={styles.inputLabel}>Message</label>
                  <textarea
                    name="message"
                    className={styles.textarea}
                    placeholder="Tell us about your project, goals, or questions..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>

                 {submitted && (
                <div className={styles.successMsg}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

                <button
                  type="submit"
                  className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className={styles.spinnerIcon} />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 2L11 13" />
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <div className={styles.mapHeader}>
            <div className={styles.mapTag}>
              <span className={styles.mapTagDot} />
              Our Location
            </div>
            <h2 className={styles.mapTitle}>Find Us on the Map</h2>
            <p className={styles.mapSubtitle}>
              Visit our office in Pune, Maharashtra
            </p>
          </div>
          <div className={styles.mapWrapper}>
            <iframe
              className={styles.mapIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4094394185813!2d73.8839434232337!3d18.659307316494456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a77908c005%3A0x118d208303ecd855!2sPriti!5e0!3m2!1sen!2sin!4v1768990785175!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Artemis Infratech Location"
            />
          </div>
        </div>
      </section>

      {/* Map / CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaGrid} />
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Business?
            </h2>
            <p className={styles.ctaDesc}>
              Schedule a free consultation and discover how our technology
              solutions can accelerate your growth.
            </p>
            <div className={styles.ctaButtons}>
              <a href="tel:+91 7447777413" className={styles.ctaBtnPrimary}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Schedule a Call
              </a>
              <a
                href="mailto:priyanka.patil@artemisinfratech.com"
                className={styles.ctaBtnSecondary}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
