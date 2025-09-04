FROM python:3.11-slim  as builder

WORKDIR /app

COPY anagaram.py .

FROM python:3.11-slim

COPY --from=builder /app/anagaram.py .
CMD ["python3", "anagaram.py"]

