# To run this model using docker
### For Windows
- Install Docker Desktop

### For Ubuntu
- Run the following commands
```bash
sudo apt install -y docker.io
```
```bash
sudo systemctl enable --now docker
```
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Pull the image of model
```bash
docker pull atharva25s/model-img:04
```

### Run the container
```bash
docker exec -it --name modelimage -p 8000:8000 atharva25s/model-img:04
```

### You can check logs
```bash
docker logs -f modelimage
```