from app import db

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    author = db.Column(db.String(100), nullable=False)
    plot = db.Column(db.Text, nullable=False)
    genre = db.Column(db.String(100), nullable=False)
    img_url = db.Column(db.String(200), nullable=True)
