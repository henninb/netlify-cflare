mkdir -p ssl
cd client || exit
npm run build
cd - || exit
mkdir -p ssl
docker build -f Dockerfile-nginx -t react-app-nginx .
docker rm -f react-app-nginx
docker run --name=react-app-nginx -h react-app-nginx --restart unless-stopped -p 80:80 -d react-app-nginx
docker ps -a
