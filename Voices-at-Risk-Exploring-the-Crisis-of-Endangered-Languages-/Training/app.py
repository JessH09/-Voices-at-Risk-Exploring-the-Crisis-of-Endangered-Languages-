from flask import Flask, render_template,send_from_directory
 
# @app.route('/')
# def index():
#     return '<img src="/static/images/bar.png" alt="Number of Languages">'



app = Flask(__name__)

# home page route
@app.route('/')
def index():
    return render_template('index.html')

#map page route  
# @app.route('/map')  
# def map():
#     # Code to fetch data and pass to template
#     # return render_template('index.html', data=data)
#     return '<img src="/resources/map" alt="Number of Languages">'

# bar chart page route
@app.route('/bar_chart')
def bar_chart():
    # Code to generate bar chart using pandas and Matplotlib
    # Save the bar chart as an image file
    # Pass the image file path to the template
    return '<img src="/static/images/bar.png" alt="Number of Languages">'
    return redirect(url_for('index'))
                           

# if __name__ == '__main__':

@app.route('/pie_chart')
def pie_chart():
    # Code to generate line chart using pandas and Matplotlib
    # Save the line chart as an image file
    # Pass the image file path to the template
    return '<img src="/static/images/pie_chart.png" alt="percentage of languages per endangerment">'
    return redirect(url_for('index'))

@app.route('/avg_speakers')
def donut_chart():
    # Code to generate line chart using pandas and Matplotlib
    # Save the line chart as an image file
    # Pass the image file path to the template
    return '<img src="/static/images/avg_speakers.png" alt="avergage number of speakers left">'
    return redirect(url_for('index'))

app.run(debug=True)