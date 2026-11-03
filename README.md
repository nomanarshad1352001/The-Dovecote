# The Dovecote Institute

A Next.js website for The Dovecote Institute. It is self-contained and does not require a database, API keys, environment variables, or external backend services.

## Deploy to Vercel

1. Push this project to a Git repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected **Next.js** framework preset and the default `npm run build` command.
4. Select **Deploy**. No environment variables or database integrations are needed.

## Forms

Contact, newsletter, and nomination forms create pre-addressed emails to the institute's published research contact, `aloewi@dovecoteinstitute.org`. The visitor selects Send in their own email application. The site does not claim to send or store submissions itself.

## Images

Photography and research artwork use direct Squarespace CDN URLs in standard HTML image elements. There is no image upload step, local asset directory, Next.js image optimization dependency, or remote-image configuration required.

## Local development

```sh
npm install
npm run dev
```

Production verification:

```sh
npx next typegen
npm exec tsc -- --noEmit --pretty false
npm run build
```
