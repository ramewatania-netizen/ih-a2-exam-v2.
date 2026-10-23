# IH End of Module A2 Exam

**A standalone new implementation, NOT an edit of the existing chatgpt.site URL.**

## Included
- 50 original assessment items grounded in the user's A2 Adult English Lessons 1–5: 10 choice, 10 gap fill, 8 ordering, 6 writing, 6 reading, 6 listening, 4 matching.
- Pink graduation-themed responsive interface, simple instructions for Spanish-speaking A1 readers.
- Per-attempt autosave on the current browser, review page, disabled paste in typed answers.
- Server-side answer keys, marking of 44 objective items, and six writing items **pending manual teacher review**.
- Individual result files in private-results/, containing personal student data. Protect this folder, use an encrypted persistent volume, and restrict teacher access in production.
- SMTP email to ramewatania@gmail.com WHEN properly configured. Email is not guaranteed until tested on the deployment.

## Run locally
```bash
npm install
npm start
```
Open http://localhost:3000

## Email
Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and optionally SMTP_FROM on the server. Gmail authorization inside ChatGPT is **not** an SMTP credential. Never expose secrets to the frontend. This demo uses nodemailer; the hosting server needs outbound SMTP access.

## Production requirements / limitations
- No access to the original deployment or its source, so this is a separate site to host on a new URL. You cannot upload a zip and automatically replace the existing chatgpt.site website.
- Reading/writing was compared with workbook themes, but teachers should verify each question before students take the official exam.
- Listening uses the device's speech synthesis, NOT certified male/female pre-generated audio; voice quality and voice gender vary by browser/device. Production-quality audio should replace it.
- Six writing answers deliberately remain pending manual review rather than unsafe automatic scoring.
- SMTP result emails only work after valid server configuration.
- localStorage is a convenience recovery method, not a reliable secure cross-device authentication system. Use an authenticated DB and teacher dashboard for a serious exam service.
- No login, rate limiting, CSRF defense, retention policy or monitored SMTP retries are included. These should be added prior to widespread use.


## Free email via Resend HTTPS (Render Free compatible)
Create a Resend account using `ramewatania@gmail.com`, verify your account email, generate an API key and add these variables in Render > your Web Service > Environment:
- `RESEND_API_KEY`: your PRIVATE key (paste into Render only, never GitHub or chat).
- `RESULTS_EMAIL`: `ramewatania@gmail.com`
- `RESEND_FROM`: `IH A2 Exam <onboarding@resend.dev>` (test sender only).
For testing without a custom verified sending domain, Resend allows sending to the Resend account owner only. Check the Resend email log after a test exam. `accepted_by_provider` means Resend accepted the API request, not that inbox delivery is certain.
IMPORTANT: Render's free instance storage is ephemeral; the local `private-results` directory may disappear after sleeping, restarting or deploying. Email reports are the only external copy until a persistent datastore is integrated. Writing items are still pending manual marking, so 44 is the objective score, not a final grade out of 50. Do NOT rely on this version for official high-stakes grades.
