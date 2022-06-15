fetch("http://103.101.162.28:9000/api/stacks/12?endpointId=2", {
  "headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "vi-VN,vi;q=0.9,en;q=0.8",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsInJvbGUiOjEsImV4cCI6MTY1NTI4Nzg2M30.I4tOXN1dFrd06mqJCe_Sonfgj5CbyN9qk4ZjN4bBGMY",
    "content-type": "application/json"
  },
  "referrer": "http://103.101.162.28:9000/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"id\":12,\"StackFileContent\":\"version: \\\"3.9\\\"\\nnetworks:\\n  traefik-net:\\n    external: true\\n  \\nservices:\\n\\n  nextjs:\\n    image: ghcr.io/nhatnn1996/nguyenphat/nextjs:$VERSION\\n    restart: always\\n    labels:\\n      - \\\"traefik.enable=true\\\"\\n      - \\\"traefik.http.routers.nextjs.rule=Host(`chongthamnguyenphat.com`)\\\"\\n      - \\\"traefik.http.routers.nextjs.entrypoints=websecure\\\"\\n      - \\\"traefik.http.routers.nextjs.tls.certresolver=myresolver\\\"\\n      #- \\\"traefik.port=80\\\"\\n      - \\\"traefik.http.services.nextjs.loadbalancer.server.port=3000\\\"\\n    networks: \\n      - traefik-net\",\"Env\":[{\"name\":\"VERSION\",\"value\":\"1.0.0\"}],\"Prune\":false}",
  "method": "PUT",
  "mode": "cors",
  "credentials": "include"
});