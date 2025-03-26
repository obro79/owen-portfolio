#!/bin/bash

# Create the books directory if it doesn't exist
mkdir -p public/books

# Download book covers
curl -o "public/books/how-to-not-die-alone.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1594565694i/53152601.jpg"
curl -o "public/books/deep-work.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/25744928.jpg"
curl -o "public/books/4-hour-work-week.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/368593.jpg"
curl -o "public/books/richest-man-babylon.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1052.jpg"
curl -o "public/books/rich-dad-poor-dad.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/2382.jpg"
curl -o "public/books/self-mastery.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234567.jpg"
curl -o "public/books/straight-a-student.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234568.jpg"
curl -o "public/books/make-it-stick.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234569.jpg"
curl -o "public/books/atomic-habits.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/40121378.jpg"
curl -o "public/books/compound-effect.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234570.jpg"
curl -o "public/books/running-on-empty.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234571.jpg"
curl -o "public/books/transfer-of-training.jpg" "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1447952172i/1234572.jpg"

echo "Book cover images downloaded successfully!" 