from app import app, db
from flask import request, jsonify
from models import Book

# Get all Books
@app.route("/api/books", methods=["GET"])
def get_books():
    books = Book.query.all()
    result = [book.to_json() for book in books]
    return jsonify(result)