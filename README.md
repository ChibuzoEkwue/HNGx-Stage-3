# HNGx Gram

This is simple react project built with vite, yup and formik for form validations and firebase for authentication and has the following minimum viable product (MVP)

- [x] Authenticatiion
- [x] Drag and drop feature
- [x] Search feature



## Pages

This application has three pages

/ The home page

/create-account

/gallery which is auth protected

## Running this project locally

To run clone this project run the following command

```bash
git clone https://github.com/ChibuzoEkwue/HNGx-Stage-3.git
```

This project uses firebase for auth so you will need to create a firebase project then create a .env file in the root folder not under src or public and provide the following keys

```git
VITE_APIKEY=
VITE_AUTHDOMIAN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDINGID=
VITE_APPID=
```

After providing the following keys run command below to spin up a server locally

```bash
npm run dev
```

## Hosting this project

When hosting this project ensure you provide your env keys as the .env file will not be commited to git

```git
VITE_APIKEY=
VITE_AUTHDOMIAN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDINGID=
VITE_APPID=
```

