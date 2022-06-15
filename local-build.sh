VERSION=$2
REGISTRY=ghcr.io
REGISTRY_PATH=nhatnn1996/nguyenphat
IMAGE_NAME=nextjs
IMAGE=$REGISTRY/$REGISTRY_PATH/$IMAGE_NAME

if [ -z "$2" ]; then
  VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')
fi

echo 'Building image '$IMAGE_NAME' version latest...'
docker build -t $IMAGE:latest .
docker push $IMAGE:latest

echo 'Building image '$IMAGE_NAME' version '$VERSION'...'
docker build -t $IMAGE:$VERSION .

echo 'Deploying image '$IMAGE_NAME' version  '$VERSION'...'
docker push $IMAGE:$VERSION
echo 'Image ' ${IMAGE} ' version ' ${VERSION} ' build success!'
