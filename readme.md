# ColdChain PWA – Excursion Upload and Analysis

This is the Progressive Web App (PWA) frontend for the **ColdChain** solution, created and maintained by **Follow Advisor**, under the guidance of **Marcelo Gomes**, a senior logistics consultant.

The interface allows users to upload shipment documents and temperature reports in PDF format and analyze them through the backend API.

---

## 🌐 How It Works

1. The user fills out a simple form:
   - Shipment identifier
   - Temperature Report (PDF)
   - Shipment Manifest (SM) (PDF)

2. Upon submission, the frontend sends the files to the backend API hosted on Render (`/analisar` endpoint).

3. The summarized Markdown report is displayed on the same screen.

---

## 🧰 Tech Stack

- **HTML5 + Vanilla JS**
- **Fetch API** for sending files
- **Progressive Web App (PWA)** features
- Compatible with desktop and mobile devices

---

## 🔗 Backend

Make sure the backend is deployed and available.  
You can find the backend repository here:  
👉 [`coldchain-backend`](https://github.com/MarceloGomesFollow/coldchain-backend)

---

## 🧪 Live Preview

Try the application at:  
👉 [https://marcelogomesfollow.github.io/coldchain_followIA-pwa/](https://marcelogomesfollow.github.io/coldchain_followIA-pwa/)

---

## 👨‍💼 Project Lead

**Marcelo Gomes**  
Senior Consultant – Logistics, Cold Chain & Regulatory Projects  
📧 marcelo.gomes@followadvisor.com  
🌐 [www.followadvisor.com](https://www.followadvisor.com)

---

## ⚠️ Notes

- All uploaded PDFs are processed in memory; no files are stored.
- This version is a prototype and intended for demonstration purposes only.
- For production, improvements in error handling and layout are planned.

