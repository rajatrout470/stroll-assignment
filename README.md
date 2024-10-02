# stroll-assignment

# I have decided to create 4 tables, cycle, region, questions, assignments

Region:- This table will contain the different countries or states or cities
{
    "id": "",
    "name": "SINGAPORE,
}

Cycle:- This will contain the start time and duration of the cycle for particular region
{
    "id": "",
    "startTime": "",
    "duration": "",
    "regionId": ""
}

Questions:- This will contain the questios region wise
{
    "id": "",
    "questions": "",
    "regionId": ""
}

Assignment:- This table will have the actual assignment data, according to the cycle and questions and region

{
    "id": "",
    "region": "",
    "cycle": "",
    "question": ""
}

# I have implemented a cron job that will run on every Monday 7 PM, will will assign the questions region wise and as per durations

# Logic behind to get the questions is:-
1. We will get all the question of particular region
2. We will fetch the cycle by region and whose start time is less that or equal to current   time
3. Now we need to get the question as per the cycle, 
    => First we will find the difference between current time and start time
    => Then we will get the duration of the cycle
    => We will devide the difference by duration then we will get one index out of it
    => We will find the modulus with the answer and then take that particular index from the fetched questions array.