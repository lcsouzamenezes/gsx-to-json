# CSV TO JSON - Google Spreadsheet to JSON API [![Travis](https://travis-ci.org/almostSuvajit/CSV-TO-JSON.svg?branch=master)](https://travis-ci.org/almostSuvajit/CSV-TO-JSON)

## Install

- Run `npm install` or `yarn install`
- Run `node index.js`

## Usage

First, you must publish your spreadsheet to the web, using `File > Publish To Web` in your Google Spreadsheet.

You can then access your readable JSON API using the `/api` endpoint. You can change this in app.js.

```
http://localhost/api?id=SPREADSHEET_ID&sheet=SHEET_NUMBER
```

This will update live with changes to the [spreadsheet](https://docs.google.com/spreadsheets/d/1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM/edit?usp=sharing).

### Parameters

**`id` (required):** The ID of your document. This is the big long aplha-numeric code in the middle of your document URL. [View](https://almostsuvajit.xyz/gsxapi?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM)

**`sheet` (optional):** The number of the individual sheet you want to get data from. Your first sheet is 1, your second sheet is 2, etc. If no sheet is entered then 1 is the default. [View](https://almostsuvajit.xyz/gsxapi?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&sheet=2)

**`q` (optional):** A simple query string. This is case insensitive and will add any row containing the string in any cell to the filtered result. [View](https://almostsuvajit.xyz/gsxapi?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&q=suvajit)

**`int` (optional - default: true)**: Setting `integers` to false will return numbers as a string. [View](https://almostsuvajit.xyz/gsxapi/?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&int=false)

**`rows` (optional - default: true)**: Setting `rows` to false will return only column data. [View](https://almostsuvajit.xyz/gsxapi?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&rows=false)

**`columns` (optional - default: true)**: Setting `columns` to false will return only row data. [View](https://almostsuvajit.xyz/gsxapi?id=1hY2zD8b0uK7fGEhZMMzUsfDNyKYud3MYae3d2jEQihM&columns=false)

## Example Response

There are two sections to the returned data - Columns (containing the names of each column), and Rows (containing each row of data as an object.

```json
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