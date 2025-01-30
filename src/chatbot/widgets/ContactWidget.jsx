import React from "react";

const ContactWidget = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <p>Feel free to reach out to us using any of the following methods:</p>
      <ul>
        <li>
          <strong>Email:</strong> contact@jadeedsoft.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (555) 123-4567
        </li>
        <li>
          <strong>Address:</strong> 1234 Tech Street, Suite 567, City, Country
        </li>
        <li>
          <strong>Social Media:</strong>
        </li>
        <ul>
          <li>
            <a
              href="https://facebook.com/jadeedsoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jadeedsoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/jadeedsoft"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default ContactWidget;
