const express=require('express');
const app=express();

app.use(express.static('public'));
let headers={'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI3ODIxOTMsImNvbXBhbnlOYW1lIjoiMjAwMDAzMDU1OCBUcmFpbiBDZW50cmFsIiwiY2xpZW50SUQiOiI1YmUxMDU5Yy01Y2QwLTQ4ZTMtOWNiOS01Mjk3ZjM5Y2JiMDAiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMjAwMDAzMDU1OCJ9.JRq0OMf7NtHfkhWGVzd85ZlEuSoI0W6XCirQdzNtOzw'};
//Trains sorded(Ascending) by price of sleeper class
app.get('/gettrainsleeperbyprice',function(req,res){
   
    
    let resp="hello world";
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop]["sleeper"] > b[prop]["sleeper"]) {    
                return 1;    
            } else if (a[prop]["sleeper"] < b[prop]["sleeper"]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    fetch('http://104.211.219.98/train/trains', { headers })
    .then(function(serverPromise){ 
        serverPromise.json()
          .then(function(j) { 
            console.log(j);
            resp=JSON.parse(JSON.stringify(j));
            console.log(typeof(resp));
            resp.sort(GetSortOrder("price"));
            console.log(resp);
            res.end(JSON.stringify(resp));
          }).catch(function(e){
            console.log(e);
          });
      })
      .catch(function(e){
          console.log(e);
        });
    
   
})

//Trains sorded(Ascending) by price of AC class
app.get('/gettrainacbyprice',function(req,res){
   
    let resp="hello world";
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop]["AC"] > b[prop]["AC"]) {    
                return 1;    
            } else if (a[prop]["AC"] < b[prop]["AC"]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    fetch('http://104.211.219.98/train/trains', { headers })
    .then(function(serverPromise){ 
        serverPromise.json()
          .then(function(j) { 
            
            resp=JSON.parse(JSON.stringify(j));
            resp.sort(GetSortOrder("price"));
            console.log(resp);
            res.end(JSON.stringify(resp));
          }).catch(function(e){
            console.log(e);
          });
      })
      .catch(function(e){
          console.log(e);
        });
    
   
})

//Trains sorded(Decending) by Seats Available of sleeper class
app.get('/gettrainsleeperbyseats',function(req,res){
   
    let resp="hello world";
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop]["sleeper"] < b[prop]["sleeper"]) {    
                return 1;    
            } else if (a[prop]["sleeper"] > b[prop]["sleeper"]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    fetch('http://104.211.219.98/train/trains', { headers })
    .then(function(serverPromise){ 
        serverPromise.json()
          .then(function(j) { 
            
            resp=JSON.parse(JSON.stringify(j));
            resp.sort(GetSortOrder("seatsAvailable"));
            console.log(resp);
            res.end(JSON.stringify(resp));
          }).catch(function(e){
            console.log(e);
          });
      })
      .catch(function(e){
          console.log(e);
        });
    
   
})

//Trains sorded(Decending) by Seats Available of AC class
app.get('/gettrainacbyseats',function(req,res){
   
    let resp="hello world";
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop]["AC"] < b[prop]["AC"]) {    
                return 1;    
            } else if (a[prop]["AC"] > b[prop]["AC"]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    fetch('http://104.211.219.98/train/trains', { headers })
    .then(function(serverPromise){ 
        serverPromise.json()
          .then(function(j) { 
            
            resp=JSON.parse(JSON.stringify(j));
            resp.sort(GetSortOrder("seatsAvailable"));
            console.log(resp);
            res.end(JSON.stringify(resp));
          }).catch(function(e){
            console.log(e);
          });
      })
      .catch(function(e){
          console.log(e);
        });
    
   
})

//Trains sorded(Decending) by Departuretime considering delay
app.get('/gettrainbydepart',function(req,res){
   
    let resp="hello world";
    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop]["Hours"]+a["delayedBy"] < b[prop]["Hours"]+b["delayedBy"]) {    
                return 1;    
            } else if (a[prop]["Hours"]+a["delayedBy"] > b[prop]["Hours"]+b["delayedBy"]) {    
                return -1;    
            }    
            return 0;    
        }    
    } 
    fetch('http://104.211.219.98/train/trains', { headers })
    .then(function(serverPromise){ 
        serverPromise.json()
          .then(function(j) { 
            console.log(j);
            resp=JSON.parse(JSON.stringify(j));
            resp.sort(GetSortOrder("departureTime"));
            console.log(resp);
            res.end(JSON.stringify(resp));
          }).catch(function(e){
            console.log(e);
          });
      })
      .catch(function(e){
          console.log(e);
        });
    
   
})

app.listen(8000);