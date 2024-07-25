// import express from "express"
require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
    "login": "devankitmishra",
    "id": 85403519,
    "node_id": "MDQ6VXNlcjg1NDAzNTE5",
    "avatar_url": "https://avatars.githubusercontent.com/u/85403519?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/devankitmishra",
    "html_url": "https://github.com/devankitmishra",
    "followers_url": "https://api.github.com/users/devankitmishra/followers",
    "following_url": "https://api.github.com/users/devankitmishra/following{/other_user}",
    "gists_url": "https://api.github.com/users/devankitmishra/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/devankitmishra/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/devankitmishra/subscriptions",
    "organizations_url": "https://api.github.com/users/devankitmishra/orgs",
    "repos_url": "https://api.github.com/users/devankitmishra/repos",
    "events_url": "https://api.github.com/users/devankitmishra/events{/privacy}",
    "received_events_url": "https://api.github.com/users/devankitmishra/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ankit Mishra",
    "company": null,
    "blog": "http://devankitmishra.github.io/",
    "location": "Puri,Odisha",
    "email": null,
    "hireable": null,
    "bio": "Exploring Something New Everyday",
    "twitter_username": "_ankit_ak_",
    "public_repos": 24,
    "public_gists": 0,
    "followers": 6,
    "following": 22,
    "created_at": "2021-06-05T14:41:37Z",
    "updated_at": "2024-07-22T07:40:38Z"
  }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req,res) =>{
    res.send('_ankit_ak_');
})

app.get("/login",(req,res) =>{
    res.send('<h1>please login at chai aur code </h1>')
})

app.get("/youtube",(req,res) =>{
    res.send('<h2>chai aur code </h2>')
})

app.get("/github",(req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`);
});
