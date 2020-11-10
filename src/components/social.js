import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Social = () => (
  
<ul id="social">
  <li><a href="https://github.com/chrisfinazzo"><FontAwesomeIcon icon={faGithub} size="2x" /></a></li>
  <li><a href="https://www.linkedin.com/in/chrisfinazzo"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a></li>
  <li><a href="https://twitter.com/chrisfinazzo"><FontAwesomeIcon icon={faTwitter} size="2x" /></a></li>
</ul>
)

export default Social;
