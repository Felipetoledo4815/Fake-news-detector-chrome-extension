# fake_news_detector_chrome_extension

A browser extension that detects fake news based on the titles of the tabs. Note that detecting if a news is fake or real based on the title is even hard for humans. In further work, we are planning to get the entire text of the news and update our machine learning classifier to make the predictions. For training the classifier we used the ["Fake and real news dataset"](https://www.kaggle.com/clmentbisaillon/fake-and-real-news-dataset) from kaggle.


## Setup

### Server
Make sure you have the following python packages installed

- Flask - 1.1.2
- Scikit-learn - 0.24.1


### Extension
Load extension into google chrome with the following steps:

1. Open the extension manager
2. Activate the "Developer mode" in the top right corner
3. Click on "Load unpacked" and select the "extension" folder in the repository.

## Run program

1. Start server by executing the following command in your terminal:
    ```
    python server.py
    ```
2. Open your chrome browser and open a news you want to read
3. Click on the extension icon to see if the news is real or fake.