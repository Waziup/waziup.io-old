
docker build -t waziup/website .
docker push waziup/website
kubectl delete -f website.yaml --now
kubectl apply -f website.yaml
