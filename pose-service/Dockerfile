FROM python:3.10-slim

WORKDIR /app

# Folosim pachetele moderne (libgl1) și scriem totul pe o linie pentru siguranță
RUN apt-get update && apt-get install -y libgl1 libglib2.0-0 libsm6 libxext6 && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "test_setup.py"]