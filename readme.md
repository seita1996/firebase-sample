# Firebase Sample

## init

Executed only for the first time

### Development Environment Construction

Create docker-compose.yml and Dockerfile.

Build and start container.

```
$ docker-compose build
$ docker-compose up -d
```

Attach container and login firebase.

```
# firebase login --no-localhost

...(Follow CLI instructions)

✔  Success! Logged in as xxx
```

### Create Firebase Project

Attach container and initialize.

```
# firebase init
```

Select below and pree Enter.

- Firestore: Configure security rules and indexes files for Firestore
- Functions: Configure a Cloud Functions directory and its files
- Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
- Hosting: Set up GitHub Action deploys

Following the CLI instructions will generate a file under the app directory.

## After project creation

### Start Container

```
$ docker-compose up -d
```

### Deploy

Attach container.

```
# cd /app/functions
# npm run build
# firebase deploy
```
