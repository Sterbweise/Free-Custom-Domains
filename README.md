# Free domain names for Frog.tech funnel
[![Frog.tech - latest](https://img.shields.io/badge/Frog.tech-latest-43ddf6?style=for-the-badge&logo=fueler)](https://frog.tech) [![Cloudflare - Workers x DNS](https://img.shields.io/badge/Cloudflare-Workers_x_DNS-f6821f?style=for-the-badge&logo=cloudflare)](https://cloudflare.com) ![JavaScript - latest](https://img.shields.io/badge/JavaScript-latest-f7df1e?style=for-the-badge&logo=javascript)

*In this tutorial, I will show you how to save on a monthly subscription to Frog.tech if your goal is to associate a custom domain name to your funnels.*

**It takes 10 minutes to set up.**

Configuration
---

1. **Purchase a Domain Name**  
   You can purchase a domain name from any provider. However, I recommend Ionos, where you can acquire a domain name for $1 per year.

2. **Create a Cloudflare Account**  
   Create a Cloudflare account and register it for personal use.

3. **Register Your Domain Name on Cloudflare**  
   To do this, follow Cloudflare's instructions. To do this, you need to change your DNS name servers from ionos or your provider to those of Cloudflare.

4. **Configure the DNS Zone**  
   If your domain name is already in use for your activities, reconfigure the DNS zone on Cloudflare. If your domain name points to a server, you can move on to the next step. Otherwise, create two A-type DNS records for the root (`@`) and `www`, pointing to `192.0.2.1`, with the Cloudflare proxy option enabled (the orange cloud).

5. **Create a Worker**  
   Go to the "Workers Routes" section and click on "Manage Workers". Create a new worker with a name of your choice (reference to your redirection). Confirm the creation and access the code modification panel. You will arrive at an IDE page with the `worker.js` file ready to be modified.

6. **Configure the Worker**  
   Copy the code from the `worker.js` file in the repository and modify the `destinationUrl` string with your funnel's URL.

7. **Set Up the Redirection**  
   Return to the "Workers Routes" page, then click on the "Add Route" button and enter the URL you want to use for your funnel. Then, select the worker you just created.

8. **Final Test**  
   If you have followed all the steps, your redirection should be effective and functional.
   
---

*If you encounter any problems, you can contact me directly. You will find my contact details on my profile.*
