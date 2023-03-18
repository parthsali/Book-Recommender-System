from flask import Flask, request, jsonify
import pickle

popular_df = pickle.load(open('popular.pkl', 'rb'))

app = Flask(__name__)



@app.route('/', methods=['GET'])
def index():
    book_title = list(popular_df['Book-Title'].values)
    book_author = list(popular_df['Book-Author'].values)
    book_url = list(popular_df['Image-URL-M'].values)
    book_rating = list(popular_df['avg-book-rating'].values)
    response = jsonify(title = book_title, author = book_author, url = book_url, rating = book_rating)
    print("Data sent to frontend")
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
    

@app.route('/recommend', methods=['POST'])
def search():
    print(features = request.get_json())

if __name__ == '__main__':
    app.run(debug=True)
    