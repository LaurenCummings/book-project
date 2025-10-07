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

        required_fields = ["title", "author", "plot", "genre"]
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f'Missing required field: {field}'}), 400

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
    
# Delete a book
@app.route("/api/books/<int:id>", methods=["DELETE"])
def delete_book(id):
    try:
        book = Book.query.get(id)
        if book is None:
            return jsonify({"error": "Book not found"}), 404
        db.session.delete(book)
        db.session.commit()
        return jsonify({"msg": "Book deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
    
# Update a book
@app.route("/api/books/<int:id>", methods=["PATCH"])
def update_book(id):
    try:
        book = Book.query.get(id)
        if book is None:
            return jsonify({"error": "Book not found"}), 404
        
        data = request.json
        
        book.title = data.get("title", book.title)
        book.author = data.get("author", book.author)
        book.plot = data.get("plot", book.plot)
        book.genre = data.get("genre", book.genre)
        book.img_url = data.get("img_url", book.img_url)

        db.session.commit()
        return jsonify(book.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500