from flask import Flask
from flask_mysqldb import MySQL
app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'velib_pos'

mysql = MySQL(app)


@app.route('/api', methods=['GET',  'POST'])
def api():
    cur = mysql.connection.cursor()
    cur.execute("SELECT nom_station,geo FROM velib_pos LIMIT 0, 10")
    fetchdata = cur.fetchall()
    cur.close()
    return{
        'data': fetchdata, 
        'completed': True
    }
    