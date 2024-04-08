from flask import Flask, render_template, redirect, url_for
 
# @app.route('/')
# def index():
#     return '<img src="/static/images/bar.png" alt="Number of Languages">'
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# Bar chart page route
@app.route('/bar_chart')
def bar_chart():
    # Code to generate bar chart using pandas and Matplotlib
    # Save the bar chart as an image file
    # Pass the image file path to the template
    # For example, assuming the image is saved as 'bar.png' in the 'static/images' folder
    image_path = '/static/images/bar.png'
    text = "This bar chart shows the total number of languages per endangerment level"
    return render_template('bar_chart.html', image_path=image_path, text=text)

@app.route('/pie_chart')
def pie_chart():
    # Code to generate line chart using pandas and Matplotlib
    # Save the line chart as an image file
    # Pass the image file path to the template
    image_path = '/static/images/pie_chart.png'
    text = "This pie chart shows the percentage of languages that are at each level"

    return render_template('bar_chart.html', image_path=image_path, text=text)

    # return redirect(url_for('index'))

@app.route('/avg_speakers')
def donut_chart():
    # Code to generate line chart using pandas and Matplotlib
    # Save the line chart as an image file
    # Pass the image file path to the template
    image_path = '/static/images/avg_speakers.png'
    text = "This chart shows the average number of speakers per endangerment level"
    return render_template('bar_chart.html', image_path=image_path, text=text)

    # return redirect(url_for('index'))
app.run(debug=True)