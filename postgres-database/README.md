# Gym Management System - Base de Datos

Este repositorio contiene la configuración de la base de datos del proyecto **Gym Management System** usando **PostgreSQL** y **PgAdmin** en contenedores Docker.

---

## 📦 Contenido del repositorio

- `docker-compose.yml` → Configuración de contenedores PostgreSQL y PgAdmin.  
- `.env.example` → Variables de entorno de ejemplo (NO contiene credenciales reales).  
- Carpeta `data/` → Volumen para persistencia de datos de PostgreSQL
- Carpeta `pgadmin_data/` → Volumen para persistencia de PgAdmin 

---

## ⚙️ Requisitos

- [Docker](https://www.docker.com/get-started) instalado en tu máquina.  
- [Docker Compose](https://docs.docker.com/compose/install/) instalado.  
- Opcional: Cliente visual como [TablePlus](https://tableplus.com/) o PgAdmin.

---

## 🔧 Configuración

1. Copia `.env.example` a `.env`:

```bash
cp .env.example .env

2. Edita .env con tus credenciales locales:
    POSTGRES_USER=tu_usuario
    POSTGRES_PASSWORD=tu_contraseña_segura
    POSTGRES_DB=nombre_de_tu_base
    DB_PORT=5432

    PGADMIN_DEFAULT_EMAIL=tu_email
    PGADMIN_DEFAULT_PASSWORD=tu_password_pgadmin
    PGADMIN_PORT=5050

3. Levantar los contenedores(Desde la carpeta del proyecto)
    
    -docker compose up -d
        Esto levantará dos contenedores:
            postgres_server → Servidor de PostgreSQL
            pgadmin_server → Interfaz web de administración

4. Acceder a PgAdmin
    
    Abre el navegador en: http://localhost:5050

    Login con:
        Email: valor de PGADMIN_DEFAULT_EMAIL
        Password: valor de PGADMIN_DEFAULT_PASSWORD

    Añadir servidor dentro de PgAdmin:
    General Tab: Name: Gym Database
        Connection Tab:
            Host name/address: db
            Port: 5432
            Username: POSTGRES_USER de .env
            Password: POSTGRES_PASSWORD de .env
            Maintenance DB: postgres

5. Para reiniciar limpio el contenedor: 
    docker compose down --volumes
    docker compose up -d

