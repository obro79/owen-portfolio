#!/bin/bash

# Create the books directory if it doesn't exist
mkdir -p public/books

# Function to save an image
save_image() {
    local filename="$1"
    local source="$2"
    
    # Copy the image to the books directory
    cp "$source" "public/books/$filename"
    echo "Saved $filename"
}

# Save each book cover
save_image "how-to-not-die-alone.jpg" "how-to-not-die-alone.jpg"
save_image "deep-work.jpg" "deep-work.jpg"
save_image "4-hour-work-week.jpg" "4-hour-work-week.jpg"
save_image "richest-man-babylon.jpg" "richest-man-babylon.jpg"
save_image "rich-dad-poor-dad.jpg" "rich-dad-poor-dad.jpg"
save_image "straight-a-student.jpg" "straight-a-student.jpg"
save_image "make-it-stick.jpg" "make-it-stick.jpg"
save_image "atomic-habits.jpg" "atomic-habits.jpg"
save_image "compound-effect.jpg" "compound-effect.jpg"
save_image "running-on-empty.jpg" "running-on-empty.jpg"
save_image "transfer-of-training.jpg" "transfer-of-training.jpg"

echo "All book cover images have been saved!" 