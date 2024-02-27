
<script setup>
import { ref } from 'vue';


let formInput = ref({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });

</script>

<template>

<div class="contact-container">
    <div class="contact-info">
        <div class="blob"></div>
        <div class="blob"></div>
        <div class="info-title">
            <h2>Contact information</h2>
            <p>Have an inquiry? Fill out this form to contact our team.</p>
        </div>
        <div class="info">
            <ul>
                <li>
                    <img src="@assets/images/phone.svg" alt="Telephone">
                    <p>+36 30 123 4567</p>
                </li>
                <li>
                    <img src="@assets/images/email.svg" alt="Email">
                    <p>support@dineease.com</p>
                </li>
                <li>
                    <img src="@assets/images/location-filled.svg" alt="Location">
                    <p>  132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
                </li>
            </ul>
        </div>
        <div class="social">
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
    <div class="contact-form">
        
        <h2>Contact Us</h2>
        <p>Have an inquiry? Fill out this form to contact our team.</p>
        <div>
    <form @submit.prevent="submitForm">
        <input type="text" id="first-name" v-model="formInput.firstName" placeholder="First name" required>
        <input type="text" id="last-name" v-model="formInput.lastName" placeholder="Last name" required>
        <input type="email" id="email" v-model="formInput.email" placeholder="Email" required>
        <input type="tel" id="phone" v-model="formInput.phoneNumber" placeholder="Phone Number" required>
        <textarea id="message" v-model="formInput.message" rows="4" placeholder="Message" required></textarea>
    </form>
    <div class="submit-btn">
        <button type="submit">Send message</button>
      </div>
  </div>
    </div>
</div>

</template>

<style scoped>


.contact-container{
    display: flex;
    flex-direction: row;
    width: 95%;
    margin: auto;
    overflow: hidden;
    margin: 1rem auto 1rem auto;
}
.contact-info{
    background-color: #7C3AED;
    color: white;
    padding: 2rem;
    height: 500px;
    max-width: 90%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

}
.info-title{
    h2{
        font-weight: 500;
    }
    p{
        font-weight: 300;
        font-size: 110%;
    }
}
.info{
    display: flex;
    flex-direction: row;


}
.info > ul >li{
    margin: 2rem 0 2rem 0;
    display: flex;
    flex-direction: row;
}
.info > ul >li > img{
    width: 25px;
    height: 25px;
    margin-right: 1rem;
}
.social-links > a{
    margin-right: 1rem;
}
.blob:nth-child(1){
    position: absolute;
    width: 125px;
    height: 125px;
    background-color: white;
    border-radius: 50%;
    bottom: 50px;
    right: 50px;
    opacity: 0.2;
}
.blob:nth-child(2){
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: white;
    border-radius: 50%;
    bottom: -50px;
    right: -50px;
    opacity: 0.2;
}

.contact-form{
    width: 90%;
    padding: 2rem;


    h2{
        font-size: 200%;
    }
    p{
        font-weight: 300;
        margin-bottom: 1rem;
    }
    form{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    input{
        background-color: #F5F5F5;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        margin-right: 1rem;
        border: none;
        
    }
    textarea{
        background-color: #F5F5F5;
        padding: 1rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        margin-right: 1rem;
        border: none;
        width: 90%;
        grid-column: span 2;
    }
    .submit-btn{
        float: right;
        
    }
    .submit-btn button{
        padding: 1rem;
        background-color: #7C3AED;
        border: none;
        color: white;
        border-radius: 10px;
        font-weight: 500;
        transition-duration: 300ms;
    }
    
    .submit-btn button:hover{
        padding: 1rem;
        background-color: white;
        border: #7C3AED 1px solid;
        color: #7C3AED;
        border-radius: 10px;
        font-weight: 500;
        cursor: pointer;
    }
}

@media only screen and (max-width: 768px) {
.contact-container{
    flex-direction: column;
}
.submit-btn{
    float: left !important;
}

}

</style>