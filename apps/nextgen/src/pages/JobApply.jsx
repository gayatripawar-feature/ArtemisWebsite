import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './JobApply.module.css';

const jobsData = {
  '1': {
    title: 'Senior Frontend Developer',
    dept: 'Engineering',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: '3+ Years',
    education: 'Any Graduate',
    tags: ['#ReactJS', '#React Developer', '#Frontend Developer', '#JavaScript'],
    perks: 'Flexible working hours, Medical insurance, Lucrative package',
    description: 'Join Our Innovative Team to Build Scalable, High-Performance Web Applications with React.',
    responsibilities: [
      'Design, develop, test, and maintain scalable web applications using React.js, Redux, Next.js, Tailwind CSS, Webpack, Hooks, Context API, Axios.',
      'Build reusable components and front-end libraries for future use.',
      'Ensure responsive and cross-browser compatible UI/UX.',
      'Optimize applications for maximum speed and scalability.',
      'Work closely with backend developers, UI/UX designers, and product managers to deliver seamless user experiences.',
      'Implement state management solutions such as Redux, Context API, or Zustand.',
      'Integrate RESTful APIs and third-party services into React applications.',
      'Participate in code reviews, testing, and debugging to ensure quality.',
    ],
  },
  '2': {
    title: 'Product Designer',
    dept: 'Design',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: '2+ Years',
    education: 'Any Graduate',
    tags: ['#Figma', '#UI/UX', '#Design Systems', '#Product Design'],
    perks: 'Flexible working hours, Medical insurance, Learning budget',
    description: 'Create intuitive and beautiful user experiences for our products.',
    responsibilities: [
      'Design end-to-end user experiences from wireframes to high-fidelity prototypes.',
      'Conduct user research and usability testing.',
      'Build and maintain design systems.',
      'Collaborate with engineering teams to ensure pixel-perfect implementation.',
    ],
  },
  '3': {
    title: 'Backend Developer',
    dept: 'Engineering',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: '3+ Years',
    education: 'Any Graduate',
    tags: ['#.Net', '#SQL Server', '#Azure', '#Backend'],
    perks: 'Flexible working hours, Medical insurance, Lucrative package',
    description: 'Build robust and scalable backend systems.',
    responsibilities: [
      'Design and develop backend services using .NET.',
      'Manage SQL Server databases and optimize queries.',
      'Deploy and manage Azure cloud infrastructure.',
      'Write unit and integration tests.',
    ],
  },
  '4': {
    title: 'DevOps Engineer',
    dept: 'Engineering',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Remote',
    experience: '2+ Years',
    education: 'Any Graduate',
    tags: ['#Docker', '#AWS', '#CI/CD', '#DevOps'],
    perks: 'Flexible working hours, Medical insurance',
    description: 'Streamline our development and deployment pipelines.',
    responsibilities: [
      'Set up and maintain CI/CD pipelines.',
      'Manage cloud infrastructure on AWS.',
      'Containerize applications using Docker and Kubernetes.',
      'Monitor system performance and ensure uptime.',
    ],
  },
  '5': {
    title: 'Product Manager',
    dept: 'Product',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: '4+ Years',
    education: 'MBA preferred',
    tags: ['#Strategy', '#Agile', '#Analytics', '#Product'],
    perks: 'Flexible working hours, Medical insurance, Equity',
    description: 'Drive product strategy and deliver value to users.',
    responsibilities: [
      'Define product roadmaps and prioritize features.',
      'Work with engineering and design teams.',
      'Analyze market trends and user feedback.',
      'Drive product launches and measure outcomes.',
    ],
  },
  '6': {
    title: 'Data Scientist',
    dept: 'Data',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: '2+ Years',
    education: 'B.Tech / M.Tech',
    tags: ['#Python', '#ML', '#SQL', '#Data Science'],
    perks: 'Flexible working hours, Medical insurance, Learning budget',
    description: 'Extract insights from data to drive business decisions.',
    responsibilities: [
      'Build and deploy machine learning models.',
      'Analyze large datasets and create actionable insights.',
      'Collaborate with product and engineering teams.',
      'Present findings to stakeholders.',
    ],
  },
  'general': {
    title: 'General Application',
    dept: 'Open',
    location: 'Pune',
    type: 'Full-time',
    workMode: 'Hybrid',
    experience: 'Any',
    education: 'Any Graduate',
    tags: ['#Careers', '#Join Us'],
    perks: 'Flexible working hours, Medical insurance, Lucrative package',
    description: 'Don\'t see a perfect fit? Apply here and we\'ll find the right role for you.',
    responsibilities: [
      'We are always looking for talented individuals across all departments.',
      'Submit your application and our team will reach out.',
    ],
  },
};

const locations = ['Pune', 'Mumbai', 'Bangalore', 'Delhi', 'Hyderabad', 'Chennai', 'Other'];
const noticePeriods = ['Immediate', '15 Days', '30 Days', '60 Days', '90 Days'];
const experienceOptions = ['Fresher', '0-1 Years', '1-3 Years', '3-5 Years', '5-8 Years', '8+ Years'];
const qualifications = ['B.Tech / B.E.', 'M.Tech / M.E.', 'BCA', 'MCA', 'B.Sc', 'M.Sc', 'MBA', 'Other'];

export default function JobApply() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const job = jobsData[jobId] || jobsData['general'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [jobId]);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', mobile: '', currentLocation: '',
    tenthMarks: '', twelfthMarks: '', qualification: '',
    currentCompany: '', currentCTC: '', noticePeriod: '', totalExperience: '',
    linkedinUrl: '',
  });
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const fileRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted && successRef.current) {
      successRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [submitted]);

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim()) e.lastName = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.mobile.trim()) e.mobile = 'Required';
    else if (!/^\d{10}$/.test(form.mobile.replace(/\s/g, ''))) e.mobile = 'Enter 10-digit number';
    if (!form.currentLocation) e.currentLocation = 'Required';
    if (!form.tenthMarks.trim()) e.tenthMarks = 'Required';
    if (!fileName) e.resume = 'Resume is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  if (submitted) {

    return (

      <div className={styles.applyPage} ref={successRef}>
        <div className={styles.successContainer}>
          <div className={styles.successIcon}>✓</div>
          <h2>Application Submitted!</h2>
          <p>Thank you for applying to <strong>{job.title}</strong>. We'll review your application and get back to you within 5 business days.</p>
          <button className={styles.btnPrimary} onClick={() => navigate('/careers')}>Back to Careers</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.applyPage}>
      {/* Hero */}
      <section className={styles.jobHero}>
        <div className={styles.heroInner}>
          <button className={styles.backLink} onClick={() => navigate('/careers')}>
            ‹ Back to all opportunities
          </button>
          <h1 className={styles.jobTitle}>{job.title}</h1>
          <div className={styles.tagsList}>
            {job.tags.map(tag => (
              <span key={tag} className={styles.heroTag}>{tag}</span>
            ))}
          </div>
          <p className={styles.jobIntro}>{job.description}</p>
        </div>
      </section>

      {/* Job Description + Details */}
      <section className={styles.jobDetailsSection}>
        <div className={styles.detailsGrid}>
          <div className={styles.descriptionCol}>
            <h2 className={styles.detailHeading}>Job description</h2>
            <p className={styles.descText}>{job.description}</p>
            <h3 className={styles.subHeading}>Roles and Responsibilities</h3>
            <ul className={styles.respList}>
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
          <div className={styles.detailsCol}>
            <h2 className={styles.detailHeading}>Job details</h2>
            <div className={styles.detailsTable}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Education</span>
                <span className={styles.detailValue}>{job.education}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Experience</span>
                <span className={styles.detailValue}>{job.experience}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Location</span>
                <span className={styles.detailValue}>{job.location}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Work Mode</span>
                <span className={styles.detailValue}>{job.workMode}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Perks & Benefits</span>
                <span className={styles.detailValue}>{job.perks}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className={styles.formSection}>
        <h2 className={styles.formMainTitle}>Apply for this Job Opportunity</h2>
        <form className={styles.applicationForm} onSubmit={handleSubmit}>

          {/* Personal Information */}
          <div className={styles.formBlock}>
            <div className={styles.formBlockLabel}>
              <h3>Personal Information</h3>
              <p>Provide your basic personal details.</p>
            </div>
            <div className={styles.formBlockFields}>
              <div className={styles.fieldRow}>
                <div className={styles.formGroup}>
                  <label>First name *</label>
                  <input type="text" value={form.firstName} onChange={e => update('firstName', e.target.value)} className={errors.firstName ? styles.inputError : ''} />
                  {errors.firstName && <span className={styles.errorText}>{errors.firstName}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Last name *</label>
                  <input type="text" value={form.lastName} onChange={e => update('lastName', e.target.value)} className={errors.lastName ? styles.inputError : ''} />
                  {errors.lastName && <span className={styles.errorText}>{errors.lastName}</span>}
                </div>
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.formGroup}>
                  <label>Email address *</label>
                  <input type="email" value={form.email} onChange={e => update('email', e.target.value)} className={errors.email ? styles.inputError : ''} />
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>Mobile No *</label>
                  <input type="tel" value={form.mobile} onChange={e => update('mobile', e.target.value)} className={errors.mobile ? styles.inputError : ''} />
                  {errors.mobile && <span className={styles.errorText}>{errors.mobile}</span>}
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Current location *</label>
                <select value={form.currentLocation} onChange={e => update('currentLocation', e.target.value)} className={errors.currentLocation ? styles.inputError : ''}>
                  <option value="">Please select</option>
                  {locations.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
                {errors.currentLocation && <span className={styles.errorText}>{errors.currentLocation}</span>}
              </div>
            </div>
          </div>

          <div className={styles.formDivider} />

          {/* Academic Information */}
          <div className={styles.formBlock}>
            <div className={styles.formBlockLabel}>
              <h3>Academic Information</h3>
              <p>Provide your education details and qualifications.</p>
            </div>
            <div className={styles.formBlockFields}>
              <div className={styles.fieldRow}>
                <div className={styles.formGroup}>
                  <label>10th Marks(%) *</label>
                  <input type="text" value={form.tenthMarks} onChange={e => update('tenthMarks', e.target.value)} className={errors.tenthMarks ? styles.inputError : ''} />
                  {errors.tenthMarks && <span className={styles.errorText}>{errors.tenthMarks}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label>12th Marks(%)</label>
                  <input type="text" value={form.twelfthMarks} onChange={e => update('twelfthMarks', e.target.value)} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Which is your highest qualification completed?</label>
                <select value={form.qualification} onChange={e => update('qualification', e.target.value)}>
                  <option value="">Please select</option>
                  {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.formDivider} />

          {/* Employment History */}
          <div className={styles.formBlock}>
            <div className={styles.formBlockLabel}>
              <h3>Employment history</h3>
              <p>Use a permanent address where you can receive mail.</p>
            </div>
            <div className={styles.formBlockFields}>
              <div className={styles.fieldRow}>
                <div className={styles.formGroup}>
                  <label>Current company</label>
                  <input type="text" value={form.currentCompany} onChange={e => update('currentCompany', e.target.value)} />
                </div>
                <div className={styles.formGroup}>
                  <label>Current CTC</label>
                  <input type="text" placeholder="5.0 LPA" value={form.currentCTC} onChange={e => update('currentCTC', e.target.value)} />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Notice Period</label>
                <select value={form.noticePeriod} onChange={e => update('noticePeriod', e.target.value)}>
                  <option value="">Please select</option>
                  {noticePeriods.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Total relevant experience</label>
                <select value={form.totalExperience} onChange={e => update('totalExperience', e.target.value)}>
                  <option value="">Please select</option>
                  {experienceOptions.map(x => <option key={x} value={x}>{x}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.formDivider} />

          {/* Professional Information */}
          <div className={styles.formBlock}>
            <div className={styles.formBlockLabel}>
              <h3>Professional information *</h3>
              <p>Share your professional details.</p>
            </div>
            <div className={styles.formBlockFields}>
              <div className={`${styles.fileUpload} ${fileName ? styles.hasFile : ''} ${errors.resume ? styles.inputError : ''}`} onClick={() => fileRef.current?.click()}>
                <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" onChange={handleFile} style={{ display: 'none' }} />
                {fileName ? (
                  <span className={styles.fileName}>📄 {fileName}</span>
                ) : (
                  <div className={styles.filePlaceholder}>
                    <div className={styles.uploadIconWrap}>📄</div>
                    <span>Upload your latest resume</span>
                    <small>Word, PDF files allowed up to 10MB</small>
                  </div>
                )}
              </div>
              {errors.resume && <span className={styles.errorText}>{errors.resume}</span>}
            </div>
          </div>

          <div className={styles.formDivider} />

          {/* LinkedIn */}
          <div className={styles.formBlock}>
            <div className={styles.formBlockLabel}>
              <h3>LinkedIn URL</h3>
              <p>Share your LinkedIn profile.</p>
            </div>
            <div className={styles.formBlockFields}>
              <div className={styles.formGroup}>
                <input type="url" placeholder="https://linkedin.com/in/yourprofile" value={form.linkedinUrl} onChange={e => update('linkedinUrl', e.target.value)} />
              </div>
            </div>
          </div>

          <div className={styles.submitRow}>
            <button type="submit" className={styles.btnPrimary}>Submit Application</button>
          </div>
        </form>
      </section>
    </div>
  );
}
