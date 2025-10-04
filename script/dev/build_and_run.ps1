docker buildx build -t bot_server -f ./dockerfile .
docker run --env-file=.env -p 8443:8443 -d bot_server