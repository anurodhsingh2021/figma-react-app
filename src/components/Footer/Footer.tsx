import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_top">
        <strong>DEPT®</strong>
        <nav>
          <a>Work</a>
          <a>Services</a>
          <a>Stories</a>
          <a>About</a>
          <a>Careers</a>
          <a>Contact</a>
        </nav>
      </div>

      <div className="footer_bottom">
        <div className="footer_bottom_row">
          <span>Chamber of Commerce: 63464101</span>
          <span>VAT: NL 8552.47.502.B01</span>
          <span>Terms and conditions</span>
        </div>
        <span>© 2025 Dept Agency</span>
      </div>
    </footer>
  );
};

export default Footer;
