# Get python 3.8 image
FROM python:3.8

# Add all files in . to /app of image
ADD . /app

# Change directory to /app in image
WORKDIR /app

# Run pip install in WORKDIR
RUN pip install -r requirements.txt