## API ![Unit test workflow status](https://github.com/UsableSystemsLab/cdhub/actions/workflows/unitTest.yml/badge.svg) [![codecov](https://codecov.io/gh/UsableSystemsLab/cdhub/graph/badge.svg?token=vIRfeXqXjk)](https://codecov.io/gh/UsableSystemsLab/cdhub)




# Project CD-Hub

## Services

| Service            | URL                                     |
|--------------------|-----------------------------------------|
| PostgreSQL         | `postgres://localhost:5432`             |
| pgAdmin            | `http://localhost:5050`                 |
| React App          | `http://localhost:3000`                 |
| Express API Server | `http://localhost:4000/api/health`      |

## Usage

- Copy the example environment file to create your .env file:

```shell
cp example.env .env
```

- Start the containers:

```shell
docker compose up
```

## Database Initialization

To create and populate database tables:
1. Edit the SQL scripts in the db-init-scripts/ directory:
  - `01_init_db.sql`: Create tables
  - `02_insert_db.sql`: Insert initial data

2. Rebuild the containers with the new scripts:

> **Caution:** This will stop all running containers, and remove all named volumes declared in the "volumes" section as well as all anonymous volumes attached to containers.

```shell
docker compose down -v
docker compose build db
docker compose up
```

3. Verify that all four containers are running:
```shell
docker ps
```
If any container is not running, check the logs:
```shell
docker ps -a
docker logs <id_of_the_stopped_container>
```

## Contribution

- Create a new branch for the feature

```
git branch -b new-feature-name
```
- Push your changes to a remote branch

```
git push origin new-feature-name
```

- Create a PR (Pull Request)
  - Go to Github.com and select the branch you just push
  - Click on *Contribute*, then click *Open Pull Request*

## Managing Secrets and Environment Variables

- For production environments, use Docker secrets:
  - Edit the `docker-compose.yml` file
  - Add a secrets attribute under each service that requires secure data.
  ```yaml
  version: '3.7'
  services:
    react_app:
      secrets:
        - app_secret

  secrets:
    app_secret:
      file: ./app_secret.txt
  ```

- For development environments, use environment variables:
  - Add variables to the .env file, e.g.:
  ```shell
  API_SERVER_KEY=0123456789abcdefghijklmnopqrstuvwxyz
  ```
  -  Update the docker-compose.yml file to use the environment variables:
  ```yaml
  api:
    environment:
      - API_SERVER_PORT=${API_SERVER_PORT}
      - POSTGRES_HOST=postgres16
      - API_SERVER_KEY=${API_SERVER_KEY}
  ```

## License
This project is licensed under the MIT License.