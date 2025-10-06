from app import app, db
from flask import request, jsonify
from models import Book

# Get all Books
@app.route("/api/books", methods=["GET"])
def get_books():
    books = Book.query.all()
    result = [book.to_json() for book in books]
    return jsonify(result)

# Create a book
@app.route("/api/books", methods=["POST"])
def create_book():
    try: 
        data = request.json

        title = data.get("title")
        author = data.get("author")
        plot = data.get("plot")
        genre = data.get("genre")
        img_url = data.get("img_url")

        new_book = Book(title=title, author=author, plot=plot, genre=genre, img_url=img_url)

        db.session.add(new_book)

        db.session.commit()

        return jsonify({"msg": "Book created successfully"}), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500