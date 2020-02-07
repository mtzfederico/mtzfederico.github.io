#!/usr/bin/env python3

#https://www.powercms.in/blog/how-get-json-data-remote-url-python-script

import urllib, json
import requests

def main():
    url = "https://mtzfederico.com/json/example5.json"
    response = requests.get(url)
    data = response.json()

    clientid = data["clientid"]
    ordersList =  data["ordersList"]

    print("Client ID: " + str(clientid))
    #print(ordersList)
    selectedItem = input("Enter the name of one of the following orders " + ordersList + ": ")
    print(data[selectedItem])

if __name__ == '__main__':
    main()
