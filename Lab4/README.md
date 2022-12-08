## Steps
- Log in to Azure with az login
- Create resource group with **az group create --name lab4 --location westeurope**
- Create AKS cluster with **az aks create -g lab4 -n lab4cluster --node-count 1 --generate-ssh-keys**
- Install the kubectl with **az aks install-cli**
- Run **az aks get-credentials --resource-group lab4 --name lab4cluster** to configure kubectl to connect to the cluster
- Run **kubectl get nodes** to ensure you are connected to the cluster
- Create MySQL password with **kubectl create secret generic mysql-pass --from-literal=password=pwd123**
- Create the files mysql-deployment.yaml and wordpress-deployment.yaml using [link](https://kubernetes.io/docs/tutorials/stateful-application/mysql-wordpress-persistent-volume/)
- Navigate to the folder, where you created mysql-deployment.yaml and wordpress-deployment.yaml
- Run **kubectl apply -f mysql-deployment.yaml** and **kubectl apply -f wordpress-deployment.yaml**
- Run **kubectl get service wordpress --watch** to get the external ip

## Starting the cluster: 
**az aks start --name lab4cluster --resource-group lab4**

## Stopping the cluster: 
**az aks stop --name lab4cluster --resource-group lab4**

## IP Adress:
**20.31.230.137**

## Api adress:
**lab4cluste-lab4-e10632-afb6e3e4.hcp.westeurope.azmk8s.io**