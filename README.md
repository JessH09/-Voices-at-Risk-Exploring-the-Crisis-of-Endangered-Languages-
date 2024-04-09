# Project 3

# *Voices at Risk Exploring the Crisis of Endangered Languages*
---

# Topic
https://www.kaggle.com/datasets/the-guardian/extinct-languages

## Acknowledgments on the topic
Data was originally organized and published by The Guardian and can be accessed via this Datablog post.


## Project Overview: Data Visualization Track

### *Project Description*

This project focuses on telling a story using data visualizations. Our group chose to explore `Endangered Languages`. We aimed to uncover insights and trends within the data and present them through interactive visualizations. Our project includes a variety of visualizations created using Python libraries such as Matplotlib, Pandas plotting, and Plotly. The data is stored in a PostgreSQL database and extracted using SQLAlchemy. 

### *Summarizing the efforts for ethical considerations made in the project*

In a project focused on endangered languages, ethical considerations are paramount. This involves adhering to community guidelines, obtaining consent for data collection, and minimizing harm to language communities. It's crucial to handle and share data sensitively, respecting the rights and dignity of language speakers. Prioritizing ethics ensures integrity, trust, and positive contributions to language preservation efforts.

## Installation and Usage

- Clone this repository to your local machine.
- Ensure you have Python and PostgreSQL installed.
- Create a virtual environment and install the required dependencies listed in requirements.txt.
- Run the Flask application using python app.py.
- Access the web application through your browser and interact with the visualizations.
  
## Project Details

1. **Data and Delivery**:  
 - `Dataset Creation`: Utilize data from various sources to compile a dataset containing at least 100 unique records. 
 - `Database Setup`: Create a database using PostgreSQL to store the dataset. Design the database schema to efficiently organize and manage the data.

2. **Visualizations**: Create four CSV files based on the transformed data:
 - `Unique Views Creation`: Develop at least three distinct visualizations to present the data. These visualizations should offer different perspectives on the dataset and highlight various insights.
 - `Clear Presentation`: Ensure that the visualizations are presented in a clear and easily understandable manner. Use appropriate labels, titles, and colors to enhance readability and comprehension.
 - `Interpretability`: Design the visualizations to be easily interpretable by users of all levels. Provide explanations or tooltips where necessary to clarify any complex or unfamiliar aspects of the data.

3. **Usability**:
  - `Error-Free Showcase`: Create a script, notebook, or webpage to showcase the data visualizations. Test the functionality thoroughly to ensure that it runs without errors on different platforms and browsers.
  - `Library Integration`: Incorporate a Python or JavaScript library not covered in class to enhance the project's functionality and visual appeal. This library should complement the existing tools and contribute to the overall user experience.
  - `User-Driven Interaction`:
       - HTML/JavaScript: Implement menus, dropdowns, or textboxes on the webpage to allow users to interact with the visualizations dynamically. Use JavaScript to update the visualizations based on user inputs.
       - Flask API: Develop interactive API routes using Flask to serve back Python or JavaScript-created plots. Enable users to request specific data subsets or customize the visualizations according to their preferences.
       - Filtered Data Visualization: Enable users to select and filter the data interactively, guiding them through the process step by step. Provide intuitive controls and feedback to enhance the user experience.

## Rough Breakdown of Tasks:
### Visualization sketches of the graphs and maps in excel
  - [x] `Data Cleaning:` 
    - [x] Making language concise
    - [x] Only keeping columns:
        -  [x] Name in English
        - [x] Countries
        - [x] Country code iso639-6
        - [x] Degree of Endangerment
        - [x] Alternate name
        - [x] Number of speakers
        - [x] Lat and lon
          
  - [x] Put Data into database SQL

  - [x] Start analyzing/visualizations
      - [x] Map visualization: done in leaflet (add color, labels, hover feature)
      - [x] Bar chart of endangerment breakdown; make in pandas using for loop (include color, labels, etc)
      - [x] Chart showing number of speakers left per language
      - [x] Flask app to bring it all together since it’s a mix of pandas and js

   
## Idea for Visual

![MapImage](https://github.com/JessH09/Voices-at-Risk-Exploring-the-Crisis-of-Endangered-Languages-/assets/152751613/07f20bb2-a541-4124-a8d9-c2569a8feed9)

## Finding Data

[data.worldLinks to an external site.](https://data.world/)

[KaggleLinks to an external site.](https://www.kaggle.com/)

[Data.govLinks](https://data.gov/) 

[Awesome Public DatasetsLinks to an external site.](https://github.com/awesomedata/awesome-public-datasets)

[Public-APIsLinks to an external site.](https://github.com/Kikobeats/awesome-api)

[Awesome APILinks to an external site.](https://benjo-li.medium.com/a-curated-collection-of-over-150-apis-to-build-great-products-fdcfa0f361bc)

## Resources
[ https://bootstrap-flask.readthedocs.io/en/stable/](https://bootstrap-flask.readthedocs.io/en/stable/)

[https://www.postgresql.org/docs/current/sql.html](https://www.postgresql.org/docs/current/sql.html)

https://matplotlib.org/stable/index.html

https://flask.palletsprojects.com/en/3.0.x/

---

This README provides an overview of the project, setup instructions, and information about the versions of the programs used. Let me know if you need any further adjustments!
