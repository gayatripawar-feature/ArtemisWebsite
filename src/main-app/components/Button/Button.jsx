
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: {
      ...baseStyles,
      background: 'var(--gradient-primary)',
      color: 'var(--text-white)',
    },
    secondary: {
      ...baseStyles,
      background: 'transparent',
      border: '2px solid var(--primary-maroon)',
      color: 'var(--primary-maroon)',
    },
  };

  return (
    <button style={variants[variant]} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
