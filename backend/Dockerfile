FROM python:3.10
RUN mkdir /app
WORKDIR /app
COPY requirements.txt .
RUN python3 -m pip install -r requirements.txt
COPY . .

CMD ["sh", "-c", "gunicorn app:app --workers $WORKERS --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:$PORT"]