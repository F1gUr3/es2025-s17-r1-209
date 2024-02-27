<script setup></script>

<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="info-box">
        <img src="@assets/images/Logomarkvector.svg" alt="DineEase logo" />
        <RouterLink id="privacy-policy" to="/privacy-policy"
          >Privacy Policy</RouterLink
        >
        <div class="contact-container">
          <a href="tel:+36301234567">+36 30 123 4567</a>
          <a href="mailto:support@dineease.com">support@dineease.com</a>
          <p id="copyright">© 2024 - All rights reserved</p>
        </div>
      </div>
      <div class="social">
        <h2>Follow Us</h2>
        <div class="social-links">
          <a href="https://www.facebook.com">
            <img src="@assets/images/Facebook Iconvector.svg" alt="Facebook" />
          </a>

          <a href="https://www.instagram.com">
            <img
              src="@assets/images/Instagram Iconvector.svg"
              alt="Instagram"
            />
          </a>

          <a href="https://www.twitter.com">
            <img src="@assets/images/Twitter Iconvector.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: black;
  width: 100%;
  height: 300px;
  display: flex;
}
.footer-content {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-around;
}

.info-box * {
  margin-bottom: 1rem;
}
.info-box {
  display: flex;
  flex-direction: column;
  img {
    width: 50px;
    height: 50px;
  }
  a:any-link {
    color: white;
    text-decoration: none;
  }
}
.contact-container > a:first-child {
  margin-right: 1rem;
}
.contact-container {
}
#copyright {
  margin-top: 1rem;

  color: white !important;
}
.social {
  color: white;
  h2 {
    font-weight: 300;
    font-size: 100%;
    margin-bottom: 1rem;
  }
  .social-links > a {
    margin-right: 0.5rem;
  }
}


@media only screen and (max-width: 768px) {
  .info-box{
    font-size: 75%;
  }
  .social-links{
    img{
      width: 25%;
    }
  }

}
</style>
