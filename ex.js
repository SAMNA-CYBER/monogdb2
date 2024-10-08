Microsoft Windows [Version 10.0.22631.4169]
(c) Microsoft Corporation. All rights reserved.

C:\Users\samna>mongosh
Current Mongosh Log ID: 6704d9fde6a03df247c73bf7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1
Using MongoDB:          8.0.0
Using Mongosh:          2.3.1

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-10-08T11:55:13.510+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> use dbexample
switched to db dbexample
dbexample> db.employees.find()
[
  {
    _id: ObjectId('67010985649d30a0b1c4c672'),
    eid: 2,
    ename: 'Anjali',
    dept: 'HR',
    salary: 45000,
    yoj: 2017,
    address: { dno: 123, street: 3, locality: 'MG Road', city: 'Mumbai' },
    Designation: 'HR Manager'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c674'),
    eid: 4,
    ename: 'Neha',
    dept: 'Sales',
    salary: 28000,
    yoj: 2016,
    address: { dno: 210, street: 1, locality: 'Kormangala', city: 'Bangalore' },
    Designation: 'Sales Executive'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c676'),
    eid: 6,
    ename: 'Suman',
    dept: 'Production',
    salary: 42000,
    yoj: 2019,
    address: { dno: 564, street: 6, locality: 'Indiranagar', city: 'Bangalore' },
    Designation: 'Developer'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c677'),
    eid: 7,
    ename: 'Arjun',
    dept: 'Marketing',
    salary: 50000,
    yoj: 2012,
    address: { dno: 301, street: 4, locality: 'Viman Nagar', city: 'Pune' },
    Designation: 'Marketing Manager'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c678'),
    eid: 8,
    ename: 'Divya',
    dept: 'HR',
    salary: 32000,
    yoj: 2018,
    address: { dno: 432, street: 2, locality: 'Whitefield', city: 'Bangalore' },
    Designation: 'HR Executive'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c679'),
    eid: 9,
    ename: 'Sameer',
    dept: 'Finance',
    salary: 48000,
    yoj: 2015,
    address: { dno: 698, street: 5, locality: 'Powai', city: 'Mumbai' },
    Designation: 'Financial Analyst'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager'
  }
]
dbexample> db.employees.find({ename : "Priya"} , {$push : {hobbies : {$each : "reading" , "writing"}}})
Uncaught:
SyntaxError: Unexpected token (1:88)

> 1 | db.employees.find({ename : "Priya"} , {$push : {hobbies : {$each : "reading" , "writing"}}})
    |                                                                                         ^
  2 |

dbexample> db.employees.find({ename : "Priya"} , {$push : {hobbies : {$each : ["reading" , "writing"]}}})
MongoServerError[Location16410]: FieldPath field names may not start with '$'. Consider using $getField or $setField.
dbexample> db.employees.updateOne({ename : "Priya"} , {$push : {hobbies : {$each : ["reading" , "writing"]}}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'reading', 'writing' ]
  }
]
dbexample> db.employees.updateOne({ename : "Priya"} , {$addToSet : {hobbies : {$each : ["reading" , "singing"]}}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'reading', 'writing', 'singing' ]
  }
]
dbexample> db.employees.updateOne({ename : "Priya"} , {$push : {hobbies : {$each : ["reading" , "singing"]}}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'reading', 'writing', 'singing', 'reading', 'singing' ]
  }
]
dbexample> db.employees.updateOne({eid : 10} , {$pop : {hobbies : 1}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'reading', 'writing', 'singing', 'reading' ]
  }
]
dbexample> db.employees.updateOne({eid : 10} , {$pop : {hobbies : -1}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing', 'singing', 'reading' ]
  }
]
dbexample> db.employees.updateOne({eid : 10} , {$pop : {hobbies : 2}})
MongoServerError: $pop expects 1 or -1, found: 2
dbexample> db.employees.updateOne({ename : "Priya"} , {$pull : {hobbies : "swimming"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 0,
  upsertedCount: 0
}
dbexample> db.employees.updateOne({ename : "Priya"} , {$pull : {hobbies : "reading"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.updateOne({ename : "Priya"} , {$pullAll : {hobbies :[ "reading" , "singing"]}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({ename : "Priya"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ]
  }
]
dbexample> db.employees.insertOne(
... {
...   "_id": ObjectId("67010985649d30a0b1c4c671"),
...   "eid": 1,
...   "ename": "Rahul",
...   "projects": [
...     { "projectId": "p1", "status": "completed" },
...     { "projectId": "p2", "status": "ongoing" },
...     { "projectId": "p3", "status": "ongoing" }
...   ]
... }
... )
{
  acknowledged: true,
  insertedId: ObjectId('67010985649d30a0b1c4c671')
}
dbexample> db.employees.find({projects : {$elemMatch : {projectId : "p1" , status : "completed"}}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c671'),
    eid: 1,
    ename: 'Rahul',
    projects: [
      { projectId: 'p1', status: 'completed' },
      { projectId: 'p2', status: 'ongoing' },
      { projectId: 'p3', status: 'ongoing' }
    ]
  }
]
dbexample> db.employees.find({ename : {$regex : /rahul/i}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c671'),
    eid: 1,
    ename: 'Rahul',
    projects: [
      { projectId: 'p1', status: 'completed' },
      { projectId: 'p2', status: 'ongoing' },
      { projectId: 'p3', status: 'ongoing' }
    ]
  }
]
dbexample> db.employees.find({ename : {$regex : /^R/ }})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c671'),
    eid: 1,
    ename: 'Rahul',
    projects: [
      { projectId: 'p1', status: 'completed' },
      { projectId: 'p2', status: 'ongoing' },
      { projectId: 'p3', status: 'ongoing' }
    ]
  }
]
dbexample> db.employees.find({ename : {$regex :/h$/}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant'
  }
]
dbexample> db.employees.updateOne({eid : 5} , {$set : {emailid : "abc@gmail.com"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({emailid : {$regex : /@gmail\.com/}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant',
    emailid: 'abc@gmail.com'
  }
]
dbexample> db.employees.updateOne({ename : "Priya"} , {$set : {mobNo : "123456"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({mobNo : {$regex : /^\d{10}$/}})

dbexample> db.employees.updateOne({ename : "Priya"} , {$set : {mobNo : "1234567890"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
dbexample> db.employees.find({mobNo : {$regex : /^\d{10}$/}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ],
    mobNo: '1234567890'
  }
]
dbexample> db.employees.find({mobNo : {$exist : true}})
MongoServerError[BadValue]: unknown operator: $exist
dbexample> db.employees.find({mobNo : {$exists : true}})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ],
    mobNo: '1234567890'
  }
]
dbexample> db.employees.updateMany({mobNo : {exists : false }} , {$set : {mobNo : "not provided"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
dbexample> db.employees.updateMany(
...   { mobileNumber: { $exists: false } },
...   { $set: { mobileNumber: "Not Provided" } }
... )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 10,
  modifiedCount: 10,
  upsertedCount: 0
}
dbexample> db.employees.updateMany( { mobNo: { $exists: false } }, { $set: { mobNo: "Not Provided" } } )
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 9,
  modifiedCount: 9,
  upsertedCount: 0
}
dbexample> db.employees.updateMany({mobNo : {exists : false }} , {$set : {mobNo : "not provided"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
dbexample>

dbexample>

dbexample>

dbexample> db.employees.updateMany({mobNo : {$exists : false }} , {$set : {mobNo : "not provided"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 0,
  modifiedCount: 0,
  upsertedCount: 0
}
dbexample> db.employees.find({dept : "Production"})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c676'),
    eid: 6,
    ename: 'Suman',
    dept: 'Production',
    salary: 42000,
    yoj: 2019,
    address: { dno: 564, street: 6, locality: 'Indiranagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  }
]
dbexample> db.employees.aggregate([
... {$match : {dept : "Production"}}
... ])
[
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c676'),
    eid: 6,
    ename: 'Suman',
    dept: 'Production',
    salary: 42000,
    yoj: 2019,
    address: { dno: 564, street: 6, locality: 'Indiranagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  }
]
dbexample> db.employees.aggregate([
... {$group : {_id : "dept" , totalsalry : {$sum : "$salary"}}}
... ])
[ { _id: 'dept', totalsalry: 385000 } ]
dbexample> db.employees.aggregate([ { $group: { _id: "$dept", totalsalry: { $sum: "$salary" } } }] )
[
  { _id: 'Finance', totalsalry: 90000 },
  { _id: 'Sales', totalsalry: 81000 },
  { _id: 'Production', totalsalry: 87000 },
  { _id: 'Marketing', totalsalry: 50000 },
  { _id: null, totalsalry: 0 },
  { _id: 'HR', totalsalry: 77000 }
]
dbexample> db.employees.find({} , {ename : 1 , dept : 1 , _id : 0})
[
  { ename: 'Anjali', dept: 'HR' },
  { ename: 'Vikram', dept: 'Production' },
  { ename: 'Neha', dept: 'Sales' },
  { ename: 'Rajesh', dept: 'Finance' },
  { ename: 'Suman', dept: 'Production' },
  { ename: 'Arjun', dept: 'Marketing' },
  { ename: 'Divya', dept: 'HR' },
  { ename: 'Sameer', dept: 'Finance' },
  { ename: 'Priya', dept: 'Sales' },
  { ename: 'Rahul' }
]
dbexample> db.employees.aggregate([
... {$project : {ename : 1 , dept : 1 , _id : 0}}
... ])
[
  { ename: 'Anjali', dept: 'HR' },
  { ename: 'Vikram', dept: 'Production' },
  { ename: 'Neha', dept: 'Sales' },
  { ename: 'Rajesh', dept: 'Finance' },
  { ename: 'Suman', dept: 'Production' },
  { ename: 'Arjun', dept: 'Marketing' },
  { ename: 'Divya', dept: 'HR' },
  { ename: 'Sameer', dept: 'Finance' },
  { ename: 'Priya', dept: 'Sales' },
  { ename: 'Rahul' }
]
dbexample> db.employees.find().sort({salary : -1})
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ],
    mobNo: '1234567890',
    mobileNumber: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c677'),
    eid: 7,
    ename: 'Arjun',
    dept: 'Marketing',
    salary: 50000,
    yoj: 2012,
    address: { dno: 301, street: 4, locality: 'Viman Nagar', city: 'Pune' },
    Designation: 'Marketing Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c679'),
    eid: 9,
    ename: 'Sameer',
    dept: 'Finance',
    salary: 48000,
    yoj: 2015,
    address: { dno: 698, street: 5, locality: 'Powai', city: 'Mumbai' },
    Designation: 'Financial Analyst',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c672'),
    eid: 2,
    ename: 'Anjali',
    dept: 'HR',
    salary: 45000,
    yoj: 2017,
    address: { dno: 123, street: 3, locality: 'MG Road', city: 'Mumbai' },
    Designation: 'HR Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant',
    emailid: 'abc@gmail.com',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c676'),
    eid: 6,
    ename: 'Suman',
    dept: 'Production',
    salary: 42000,
    yoj: 2019,
    address: { dno: 564, street: 6, locality: 'Indiranagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c678'),
    eid: 8,
    ename: 'Divya',
    dept: 'HR',
    salary: 32000,
    yoj: 2018,
    address: { dno: 432, street: 2, locality: 'Whitefield', city: 'Bangalore' },
    Designation: 'HR Executive',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c674'),
    eid: 4,
    ename: 'Neha',
    dept: 'Sales',
    salary: 28000,
    yoj: 2016,
    address: { dno: 210, street: 1, locality: 'Kormangala', city: 'Bangalore' },
    Designation: 'Sales Executive',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c671'),
    eid: 1,
    ename: 'Rahul',
    projects: [
      { projectId: 'p1', status: 'completed' },
      { projectId: 'p2', status: 'ongoing' },
      { projectId: 'p3', status: 'ongoing' }
    ],
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  }
]
dbexample> db.employees.aggregate([
... {$sort : {salary : -1}}
... ])
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ],
    mobNo: '1234567890',
    mobileNumber: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c677'),
    eid: 7,
    ename: 'Arjun',
    dept: 'Marketing',
    salary: 50000,
    yoj: 2012,
    address: { dno: 301, street: 4, locality: 'Viman Nagar', city: 'Pune' },
    Designation: 'Marketing Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c679'),
    eid: 9,
    ename: 'Sameer',
    dept: 'Finance',
    salary: 48000,
    yoj: 2015,
    address: { dno: 698, street: 5, locality: 'Powai', city: 'Mumbai' },
    Designation: 'Financial Analyst',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c672'),
    eid: 2,
    ename: 'Anjali',
    dept: 'HR',
    salary: 45000,
    yoj: 2017,
    address: { dno: 123, street: 3, locality: 'MG Road', city: 'Mumbai' },
    Designation: 'HR Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c675'),
    eid: 5,
    ename: 'Rajesh',
    dept: 'Finance',
    salary: 42000,
    yoj: 2014,
    address: { dno: 178, street: 8, locality: 'Bandra', city: 'Mumbai' },
    Designation: 'Accountant',
    emailid: 'abc@gmail.com',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c676'),
    eid: 6,
    ename: 'Suman',
    dept: 'Production',
    salary: 42000,
    yoj: 2019,
    address: { dno: 564, street: 6, locality: 'Indiranagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c678'),
    eid: 8,
    ename: 'Divya',
    dept: 'HR',
    salary: 32000,
    yoj: 2018,
    address: { dno: 432, street: 2, locality: 'Whitefield', city: 'Bangalore' },
    Designation: 'HR Executive',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c674'),
    eid: 4,
    ename: 'Neha',
    dept: 'Sales',
    salary: 28000,
    yoj: 2016,
    address: { dno: 210, street: 1, locality: 'Kormangala', city: 'Bangalore' },
    Designation: 'Sales Executive',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c671'),
    eid: 1,
    ename: 'Rahul',
    projects: [
      { projectId: 'p1', status: 'completed' },
      { projectId: 'p2', status: 'ongoing' },
      { projectId: 'p3', status: 'ongoing' }
    ],
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  }
]
dbexample> db.employees.find({dept : "HR"}).count()
2
dbexample> db.employees.aggregate([
... {$match : {dept : "HR"}} , {sum : {$count : 1}} ])
MongoServerError[Location40324]: Unrecognized pipeline stage name: 'sum'
dbexample> db.employees.aggregate([
... {$match : {dept : "HR"}} , {$count : "HRcount"} ])
[ { HRcount: 2 } ]
dbexample> db.employees.aggregate([
... {$sort : {salary : -1}} ,
... {$limit : 5}
... ])
[
  {
    _id: ObjectId('67010985649d30a0b1c4c67a'),
    eid: 10,
    ename: 'Priya',
    dept: 'Sales',
    salary: 53000,
    yoj: 2011,
    address: { dno: 120, street: 1, locality: 'JP Nagar', city: 'Bangalore' },
    Designation: 'Sales Manager',
    hobbies: [ 'writing' ],
    mobNo: '1234567890',
    mobileNumber: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c677'),
    eid: 7,
    ename: 'Arjun',
    dept: 'Marketing',
    salary: 50000,
    yoj: 2012,
    address: { dno: 301, street: 4, locality: 'Viman Nagar', city: 'Pune' },
    Designation: 'Marketing Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c679'),
    eid: 9,
    ename: 'Sameer',
    dept: 'Finance',
    salary: 48000,
    yoj: 2015,
    address: { dno: 698, street: 5, locality: 'Powai', city: 'Mumbai' },
    Designation: 'Financial Analyst',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c673'),
    eid: 3,
    ename: 'Vikram',
    dept: 'Production',
    salary: 45000,
    yoj: 2018,
    address: { dno: 501, street: 5, locality: 'Jayanagar', city: 'Bangalore' },
    Designation: 'Developer',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  },
  {
    _id: ObjectId('67010985649d30a0b1c4c672'),
    eid: 2,
    ename: 'Anjali',
    dept: 'HR',
    salary: 45000,
    yoj: 2017,
    address: { dno: 123, street: 3, locality: 'MG Road', city: 'Mumbai' },
    Designation: 'HR Manager',
    mobileNumber: 'Not Provided',
    mobNo: 'Not Provided'
  }
]
dbexample> db.employees.find({} , {name : 1 , salary : 1 , _id : 0}).sort({salary : -1}).limit(5)
[
  { salary: 53000 },
  { salary: 50000 },
  { salary: 48000 },
  { salary: 45000 },
  { salary: 45000 }
]
dbexample> db.employees.find({} , {ename : 1 , salary : 1 , _id : 0}).sort({salary : -1}).limit(5)
[
  { ename: 'Priya', salary: 53000 },
  { ename: 'Arjun', salary: 50000 },
  { ename: 'Sameer', salary: 48000 },
  { ename: 'Vikram', salary: 45000 },
  { ename: 'Anjali', salary: 45000 }
]