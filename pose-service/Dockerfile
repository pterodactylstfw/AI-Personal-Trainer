FROM python:3.10-slim

WORKDIR /app

# FIX: Folosim 'libgl1' in loc de 'libgl1-mesa-glx' pentru versiunile noi de Debian
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .

# --no-cache-dir este vital pentru a nu instala versiuni vechi din memoria cache
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "main.py"]