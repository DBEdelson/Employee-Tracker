# Employee Tracker

# Description
Build a command line application to manage a company's employee database utilizing Node.js, Inquirer and MySQL. Ensure user is able to view all: employees, roles, departments, employee's by department and manager, department budget; be able to add/delete employee, role and department; update employee, employee role, and employee department.

# Table of Contents
* Usage
* Installation
* Credits
* License
* Badges
* Contribute

# Usage


EmployeeTracker

# Installation
To run via local environment:

1. Clone the repository

2. Open terminal, and navigate to the appropriate directory

3. From command line:

* npm init
* npm install

Install the following dependencies:

* mysql2 npm install --save mysql2
* inquirer npm install inquirer@8.2.4
* asciiart-logo npm i asciiart-logo
* console.table npm i console.table

Continue in command line:

* mysql -u root -p
* User will be prompted for password

Once mysql is running

* source db/schema.sql;
* source db/seeds.sql;

Proceed to quit

* quit;

4. Finally type node server.js

# Credits
Collab/debug: 

Shawn Tschoepe Github: https://github.com/shawn220a 

Github: https://github.com/Salissa4 


License
MIT License

Copyright (c) [2022] [DBEdelson]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
