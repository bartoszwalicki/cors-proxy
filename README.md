# CORS proxy

![Rage of CORS for localhost](./rage.png)

When remote API endpoint is stubborn and don't want to pass localhost requests for development process use this marvelous piece of code and pass all requests through local proxy! Easy to use with Angular, React and Vue.

## Usage

### Config env.list

Edit `env.list` file and provide remote API endpoint URL and local port.

### Docker

- Build `docker build -t ssc/cors-proxy .`
- Run `docker run -p 3000:3000 --env-file ./env.list -d ssc/cors-proxy` - it will return container UUID
- Stop container `docker stop UUID_from_run_command`

### Manual

`npm install && LOCAL_PORT=3000 REMOTE_ENDPOINT=http://place-here-remote-api-url.com node server`
