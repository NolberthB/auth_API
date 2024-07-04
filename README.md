# Servicio de Autenticación y Autorización

## Descripción

Este proyecto es un servicio de autenticación y autorización de usuarios, desarrollado con Node.js y Express. El servicio permite a los usuarios registrarse, iniciar sesión, y acceder a rutas protegidas según sus roles (usuario o administrador).

## Características

- **Registro de Usuarios**: Los usuarios pueden registrarse proporcionando un correo electrónico, contraseña y rol (usuario o administrador).
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña para obtener un token de autenticación (JWT).
- **Autorización de Roles**: Rutas protegidas que solo pueden ser accesibles por usuarios con roles específicos.
- **Seguridad**: Las contraseñas se almacenan de forma segura utilizando bcrypt y los tokens JWT se utilizan para la autenticación.

## Tecnologías Utilizadas

- Node.js
- Express
- bcrypt
- jsonwebtoken (JWT)
- dotenv

## Instalación

