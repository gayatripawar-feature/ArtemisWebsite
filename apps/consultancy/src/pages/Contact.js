import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaMailBulk, FaChevronDown, FaPaperPlane, FaWhatsapp, FaLinkedin, FaInstagram, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import useScrollAnimation from '../hooks/useScrollAnimation';
import PageBanner from '../components/PageBanner';

export default function Contact() {
  const [contactRef, contactVisible] = useScrollAnimation(0.3);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (contactVisible) {
      setIsVisible(true);
    }
  }, [contactVisible]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    projectType: '',
    city: '',
    requirement: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const breadcrumbs = [
    { label: 'Home' },
    { label: 'Contact' }
  ];

  const validateField = (name, value) => {
    const errors = { ...formErrors };

    switch (name) {
      case 'name':
        if (!value.trim()) {
          errors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          errors.name = 'Name must be at least 2 characters';
        } else {
          delete errors.name;
        }
        break;

      case 'company':
        if (!value.trim()) {
          errors.company = 'Company is required';
        } else if (value.trim().length < 2) {
          errors.company = 'Company must be at least 2 characters';
        } else {
          delete errors.company;
        }
        break;

      case 'projectType':
        if (!value) {
          errors.projectType = 'Please select a project type';
        } else {
          delete errors.projectType;
        }
        break;

      case 'city':
        if (!value.trim()) {
          errors.city = 'City is required';
        } else if (value.trim().length < 2) {
          errors.city = 'City must be at least 2 characters';
        } else {
          delete errors.city;
        }
        break;

      case 'requirement':
        if (!value.trim()) {
          errors.requirement = 'Requirement is required';
        } else if (value.trim().length < 10) {
          errors.requirement = 'Requirement must be at least 10 characters';
        } else {
          delete errors.requirement;
        }
        break;

      case 'message':
        if (!value.trim()) {
          errors.message = 'Message is required';
        } else if (value.trim().length < 10) {
          errors.message = 'Message must be at least 10 characters';
        } else {
          delete errors.message;
        }
        break;

      default:
        break;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Real-time validation
    if (type !== 'checkbox') {
      validateField(name, newValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const isNameValid = validateField('name', formData.name);
    const isCompanyValid = validateField('company', formData.company);
    const isProjectTypeValid = validateField('projectType', formData.projectType);
    const isCityValid = validateField('city', formData.city);
    const isRequirementValid = validateField('requirement', formData.requirement);
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isCompanyValid || !isProjectTypeValid || !isCityValid || !isRequirementValid || !isMessageValid) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulate success (90% success rate for demo)
      if (Math.random() > 0.1) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          projectType: '',
          city: '',
          requirement: '',
          message: ''
        });
        setFormErrors({});
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in your consulting services. Can we discuss my requirements?");
    window.open(`https://wa.me/910000000000?text=${message}`, '_blank');
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
          <div
            ref={contactRef}
            className={`${styles.contactContent} ${isVisible ? styles.animateIn : ""}`}
          >
            <div className={styles.contactGrid}>
              <div className={styles.infoPanel}>
                <div className={styles.infoContent}>
                  <h1 className={styles.infoTitle}>
                    Get in Touch with{" "}
                    <span className={styles.companyName}>
                      Artemis Consultants
                    </span>
                  </h1>

                  <p className={styles.infoDescription}>
                    Let's Build with Certainty
                  </p>

                  <div className={styles.contactDetails}>
                    <div className={styles.contactItem}>
                      <div className={styles.iconBadge}>
                        <FaMapMarkerAlt className={styles.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <h3 className={styles.contactLabel}>Office Address:</h3>
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
                        <h3 className={styles.contactLabel}>Phone:</h3>
                        <p className={styles.contactValue}>+91 7447777413</p>
                      </div>
                    </div>

                    <div className={styles.contactItem}>
                      <div className={styles.iconBadge}>
                        <FaEnvelope className={styles.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <h3 className={styles.contactLabel}>Email:</h3>
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
  title="Email via Gmail"
    className={styles.emailLink}
>
  shubhangi.deore@artemisinfratech.com
</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className={styles.socialSection}>
                    <h3 className={styles.socialTitle}>Follow Us</h3>
                    <div className={styles.socialLinks}>
                      <button
                        className={`${styles.socialButton} ${styles.whatsapp}`}
                        onClick={handleWhatsAppClick}
                        aria-label="Contact us on WhatsApp"
                      >
                        <FaWhatsapp className={styles.socialIcon} />
                        <span className={styles.socialText}>WhatsApp</span>
                      </button>
                      <a
                        href=" "
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialButton} ${styles.linkedin}`}
                        aria-label="Follow us on LinkedIn"
                      >
                        <FaLinkedin className={styles.socialIcon} />
                        <span className={styles.socialText}>LinkedIn</span>
                      </a>
                      <a
                        href=" "
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.socialButton} ${styles.instagram}`}
                        aria-label="Follow us on Instagram"
                      >
                        <FaInstagram className={styles.socialIcon} />
                        <span className={styles.socialText}>Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div className={styles.formCard}>
                <div className={styles.formContent}>
                  <h2 className={styles.formTitle}> Lets Connect With Us</h2>

                  {/* Status Messages */}
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

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formRow}>
                      <div className={styles.inputGroup}>
                        <div className={styles}>
                          <FaUser className={styles.inputIcon} />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className={`${styles.input} ${formErrors.name ? styles.inputError : ""}`}
                            required
                            aria-describedby={
                              formErrors.name ? "name-error" : undefined
                            }
                          />
                        </div>
                        {formErrors.name && (
                          <span id="name-error" className={styles.errorMessage}>
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div className={styles.inputGroup}>
                        <div className={styles.inputWrapper}>
                          <FaMailBulk className={styles.inputIcon} />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Company"
                            className={`${styles.input} ${formErrors.company ? styles.inputError : ""}`}
                            required
                            aria-describedby={
                              formErrors.company ? "company-error" : undefined
                            }
                          />
                        </div>
                        {formErrors.company && (
                          <span
                            id="company-error"
                            className={styles.errorMessage}
                          >
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
                            aria-describedby={
                              formErrors.projectType
                                ? "projectType-error"
                                : undefined
                            }
                          >
                            <option value="">Project Type</option>
                            <option value="residential">Project 1</option>
                            <option value="commercial">Project 2</option>
                            <option value="industrial">Project 3</option>
                            <option value="infrastructure">Project 4</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        {formErrors.projectType && (
                          <span
                            id="projectType-error"
                            className={styles.errorMessage}
                          >
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
                            aria-describedby={
                              formErrors.city ? "city-error" : undefined
                            }
                          />
                        </div>
                        {formErrors.city && (
                          <span id="city-error" className={styles.errorMessage}>
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
                        placeholder="Requirement"
                        className={`${styles.textarea} ${formErrors.requirement ? styles.inputError : ""}`}
                        rows="4"
                        required
                        aria-describedby={
                          formErrors.requirement
                            ? "requirement-error"
                            : undefined
                        }
                      ></textarea>
                      {formErrors.requirement && (
                        <span
                          id="requirement-error"
                          className={styles.errorMessage}
                        >
                          {formErrors.requirement}
                        </span>
                      )}
                    </div>

                    <div className={styles.inputGroup}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Message"
                        className={`${styles.textarea} ${formErrors.message ? styles.inputError : ""}`}
                        rows="4"
                        required
                        aria-describedby={
                          formErrors.message ? "message-error" : undefined
                        }
                      ></textarea>
                      {formErrors.message && (
                        <span
                          id="message-error"
                          className={styles.errorMessage}
                        >
                          {formErrors.message}
                        </span>
                      )}
                    </div>

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

            {/* Google Map Section */}
            <div className={styles.mapSection}>
              <h2 className={styles.mapTitle}>Find Us</h2>
              <div className={styles.mapContainer}>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4094394185813!2d73.8839434232337!3d18.659307316494456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c7a77908c005%3A0x118d208303ecd855!2sPriti!5e0!3m2!1sen!2sin!4v1768990785175!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Artemis Consultants Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
