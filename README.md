# CSV TO JSON - Google Spreadsheet to JSON API [![Travis](https://api.travis-ci.org/AlmostSuvajit/csv-to-json.svg?branch=master)](https://travis-ci.org/AlmostSuvajit/csv-to-json)

## Install

- Run `npm install` or `yarn install`
- Run `node app.js`

## Usage

First, you must publish your spreadsheet to the web, using `File > Publish To Web` in your Google Spreadsheet.

You can then access your readable JSON API using the `/api` endpoint. You can change this in app.js.

```
http://localhost/api?id=SPREADSHEET_ID&sheet=SHEET_NUMBER
```

This will update live with changes to the spreadsheet.

### Parameters

**`id` (required):** The ID of your document. This is the big long aplha-numeric code in the middle of your document URL. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM)

**`sheet` (optional):** The number of the individual sheet you want to get data from. Your first sheet is 1, your second sheet is 2, etc. If no sheet is entered then 1 is the default. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&sheet=2)

**`q` (optional):** A simple query string. This is case insensitive and will add any row containing the string in any cell to the filtered result. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&q=suvajit)

**`int` (optional - default: true)**: Setting `integers` to false will return numbers as a string. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&int=false)

**`rows` (optional - default: true)**: Setting `rows` to false will return only column data. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&rows=false)

**`columns` (optional - default: true)**: Setting `columns` to false will return only row data. [Visit](https://csv-to-json-api.herokuapp.com/api?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&columns=false)

## Example Response

There are two sections to the returned data - Columns (containing the names of each column), and Rows (containing each row of data as an object.

```
{
    "columns":{
        "name":["Jack","Robert","Suvajit"],
        "roll":[1,2,3],
        "marks":[80,85,82]
    },
    "rows":[
        {
            "name":"Jack",
            "roll":1,
            "marks":80
        },
        {
            "name":"Robert",
            "roll":2,
            "marks":85
        },
        {
            "name":"Suvajit",
            "roll":3,
            "marks":82
        }
    ]
}

```