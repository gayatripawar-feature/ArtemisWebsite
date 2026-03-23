
import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaChevronDown,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle,
  FaSpinner,
} from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";
import PageBanner from "../components/PageBanner";

export default function Contact() {
  const [contactRef, contactVisible] = useScrollAnimation(0.15);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (contactVisible) {
      setIsVisible(true);
    }
  }, [contactVisible]);

  useEffect(() => {

    const hash = window.location.hash;
    if (hash) {

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -150;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    projectType: "",
    city: "",
    requirement: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const breadcrumbs = [{ label: "Home" }, { label: "Contact" }];

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case "name":
        if (!value.trim()) errors.name = "Name is required";
        else if (value.trim().length < 2)
          errors.name = "Name must be at least 2 characters";
        else delete errors.name;
        break;
      case "company":
        if (!value.trim()) errors.company = "Company is required";
        else if (value.trim().length < 2)
          errors.company = "Company must be at least 2 characters";
        else delete errors.company;
        break;
      case "projectType":
        if (!value) errors.projectType = "Please select a project type";
        else delete errors.projectType;
        break;
      case "city":
        if (!value.trim()) errors.city = "City is required";
        else if (value.trim().length < 2)
          errors.city = "City must be at least 2 characters";
        else delete errors.city;
        break;
      case "requirement":
        if (!value.trim()) errors.requirement = "Requirement is required";
        else if (value.trim().length < 10)
          errors.requirement = "Requirement must be at least 10 characters";
        else delete errors.requirement;
        break;
      case "message":
        if (!value.trim()) errors.message = "Message is required";
        else if (value.trim().length < 10)
          errors.message = "Message must be at least 10 characters";
        else delete errors.message;
        break;
      default:
        break;
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, [name]: newValue }));
    if (type !== "checkbox") validateField(name, newValue);
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const fields = [
    "name",
    "company",
    "projectType",
    "city",
    "requirement",
    "message",
  ];

  let hasErrors = false;
  fields.forEach((f) => {
    if (!validateField(f, formData[f])) hasErrors = true;
  });

  if (Object.keys(formErrors).length > 0 || hasErrors) {
    setSubmitStatus("error");
    setTimeout(() => setSubmitStatus(null), 3000);
    return;
  }

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    await fetch("https://script.google.com/macros/s/AKfycbxu1J2uwcANdI3CIprdUqPT1aR_LJ3dFzae7SpRewzpVePcET-HHpeFJR6KRA856cBQ/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setSubmitStatus("success");

    setFormData({
      name: "",
      company: "",
      projectType: "",
      city: "",
      requirement: "",
      message: "",
    });

    setFormErrors({});
  } catch (error) {
    console.error(error);
    setSubmitStatus("error");
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  }
};

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in your consulting services. Can we discuss my requirements?",
    );
    window.open(`https://wa.me/910000000000?text=${message}`, "_blank");
  };

  return (
    <div className={styles.page}>
      <PageBanner
        title="Contact Us"
        breadcrumbs={breadcrumbs}
        bgImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop&crop=center"
      />

      <section className={styles.contact}>
        <div className={styles.container}>
          {/* Section Header */}
          <div className={styles.sectionHeader}>
            <div className={styles.sectionSubtitle}>
              <span className={styles.subtitleLine}></span>
              Reach Out
              <span className={styles.subtitleLine}></span>
            </div>
            <h2 className={styles.sectionTitle}>
              We'd Love to{" "}
              <span className={styles.sectionTitleAccent}>Hear from You</span>
            </h2>
            <p className={styles.sectionDescription}>
              Whether you have a question about our services, need a
              consultation, or want to discuss your next project — our team is
              ready to help.
            </p>
          </div>

          <div
            ref={contactRef}
            className={`${styles.contactContent} ${isVisible ? styles.animateIn : ""}`}
          >
            <div className={styles.contactGrid}>
              {/* Left Info Panel */}
              <div className={styles.infoPanel}>
                {/* Floating decorative shapes */}
                <div
                  className={`${styles.floatingShape} ${styles.floatingShape1}`}
                ></div>
                <div
                  className={`${styles.floatingShape} ${styles.floatingShape2}`}
                ></div>
                <div
                  className={`${styles.floatingShape} ${styles.floatingShape3}`}
                ></div>

                <div className={styles.infoContent}>
                  <h1 className={styles.infoTitle}>
                    Get in Touch with
                    <span className={styles.companyName}>
                      Artemis Infratech Consultancy
                    </span>
                  </h1>
                  <p className={styles.infoDescription}>
                    Let’s Build a Timeless Legacy{" "}
                  </p>

                  <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                      <div className={styles.iconBadge}>
                        <FaMapMarkerAlt className={styles.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <h3 className={styles.contactLabel}>Office Address</h3>
                        <p className={styles.contactValue}>
                          Chovisawadi, Charholi Budruk, Maharashtra 412105.
                        </p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBadge}>
                        <FaPhone className={styles.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <h3 className={styles.contactLabel}>Phone</h3>
                        <p className={styles.contactValue}>+91 7447777413</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBadge}>
                        <FaEnvelope className={styles.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <h3 className={styles.contactLabel}>Email</h3>
                        <p className={styles.contactValue}>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=priyanka.patil@artemisinfratech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.emailLink}
                          >
                            priyanka.patil@artemisinfratech.com
                          </a>
                        </p>
                        <p className={styles.contactValue}>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=shubhangi.deore@artemisinfratech.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.emailLink}
                          >
                            shubhangi.deore@artemisinfratech.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className={styles.socialSection}>
                    <h3 className={styles.socialTitle}>Follow Us</h3>
                    <div className={styles.socialLinks}>
                      <button
                        className={styles.socialButton}
                        // onClick={handleWhatsAppClick}
                        aria-label="Contact us on WhatsApp"
                      >
                        <FaWhatsapp className={styles.socialIcon} />
                        <span className={styles.socialText}>WhatsApp</span>
                      </button>
                      <a
                        href="https://www.linkedin.com/company/artemis-infratech-consultancy/ "
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        aria-label="Follow us on LinkedIn"
                      >
                        <FaLinkedin className={styles.socialIcon} />
                        <span className={styles.socialText}>LinkedIn</span>
                      </a>
                      <a
                        // href=" "
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialButton}
                        aria-label="Follow us on Instagram"
                      >
                        <FaInstagram className={styles.socialIcon} />
                        <span className={styles.socialText}>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className={styles.formCard} id="contact-form">
                <div className={styles.formContent}>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Let's Connect With Us</h2>
                    <p className={styles.formSubtitle}>
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </div>



                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <FaUser className={styles.inputIcon} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            className={`${styles.input} ${formErrors.name ? styles.inputError : ""}`}
                            required
                          />
                        </div>
                        {formErrors.name && (
                          <span className={styles.errorMessage}>
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <FaBuilding className={styles.inputIcon} />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company Name"
                            className={`${styles.input} ${formErrors.company ? styles.inputError : ""}`}
                            required
                          />
                        </div>
                        {formErrors.company && (
                          <span className={styles.errorMessage}>
                            {formErrors.company}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <FaChevronDown className={styles.inputIcon} />
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className={`${styles.select} ${formErrors.projectType ? styles.inputError : ""}`}
                            required
                          >
                            <option value="">Project Type</option>
                            <option value="ongoing">Ongoing Projects</option>
                            <option value="upcoming">Upcoming Projects</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        {formErrors.projectType && (
                          <span className={styles.errorMessage}>
                            {formErrors.projectType}
                          </span>
                        )}
                      </div>

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <FaMapMarkerAlt className={styles.inputIcon} />
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="City"
                            className={`${styles.input} ${formErrors.city ? styles.inputError : ""}`}
                            required
                          />
                        </div>
                        {formErrors.city && (
                          <span className={styles.errorMessage}>
                            {formErrors.city}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={styles.inputGroup}>
                      <textarea
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleInputChange}
                        placeholder="Your Requirement"
                        className={`${styles.textarea} ${formErrors.requirement ? styles.inputError : ""}`}
                        rows="3"
                        required
                      />
                      {formErrors.requirement && (
                        <span className={styles.errorMessage}>
                          {formErrors.requirement}
                        </span>
                      )}
                    </div>

                    <div className={styles.inputGroup}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        className={`${styles.textarea} ${formErrors.message ? styles.inputError : ""}`}
                        rows="3"
                        required
                      />
                      {formErrors.message && (
                        <span className={styles.errorMessage}>
                          {formErrors.message}
                        </span>
                      )}
                    </div>


                     {submitStatus === "success" && (
                    <div
                      className={`${styles.statusMessage} ${styles.success}`}
                    >
                      <FaCheckCircle className={styles.statusIcon} />
                      <span>
                        Thank you! Your message has been sent successfully.
                        We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className={`${styles.statusMessage} ${styles.error}`}>
                      <FaExclamationCircle className={styles.statusIcon} />
                      <span>
                        Sorry, there was an error sending your message. Please
                        try again.
                      </span>
                    </div>
                  )}

                    <button
                      type="submit"
                      className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className={styles.spinnerIcon} />
                          <span className={styles.buttonText}>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span className={styles.buttonText}>
                            Submit & Schedule Consultation
                          </span>
                          <FaPaperPlane className={styles.buttonIcon} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className={styles.mapSection}>
              <div className={styles.mapHeader}>
                <div className={styles.mapSubtitle}>
                  <span className={styles.subtitleLine}></span>
                  Our Location
                  <span className={styles.subtitleLine}></span>
                </div>
                <h2 className={styles.mapTitle}>Find Us</h2>
              </div>
              <div className={styles.mapWrapper}>
                <div className={styles.mapContainer}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4094394185813!2d73.8839434232337!3d18.659307316494456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a77908c005%3A0x118d208303ecd855!2sPriti!5e0!3m2!1sen!2sin!4v1768990785175!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Artemis Infratech Consultancy Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
