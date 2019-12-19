const phin = require('phin');
let base = "https://botstemple.glitch.me/api";

class Client {
  constructor(token, id) {
    if(!token || !id) throw new TypeError("You must provide a valid token and bot id.")
    this._id = id;
    this.token = token;
  }
  
  postServers(count) {
    if(!count) throw new TypeError('You must provide the server count.')
    return new Promise((resolve, reject) => {
      phin.unpromisified({
        headers: {
          authorization: this.token
        },
        method: "POST",
        data: {
          servers: count
        },
        url: `${base}/stats/${this._id}`
      }, (err, res) => {
        if(err) throw new TypeError(err);
        else {
          if(JSON.parse(res.body.toString()).error) {
            reject(JSON.parse(res.body.toString()).error.message)
          } else {
            resolve(JSON.parse(res.body.toString()))
          }
        }
      })
    })
  }
  
  getBot(id) {
    if(!id) throw new TypeError('You must provide a bot id.')
    return new Promise((resolve, reject) => {
      phin.unpromisified({
        url: `${base}/getBot/${id}`,
        method: "GET"
      }, (err, res) => {
        if(err) throw new TypeError(err);
        if(JSON.parse(res.body.toString()).error) {
          reject(JSON.parse(res.body.toString()).error.message)
        } else {
          resolve(JSON.parse(res.body.toString()))
        }
      })
    })
  }
  
  getUser(id) {
    if(!id) throw new TypeError('You must provide a user id.')
    return new Promise((resolve, reject) => {
      phin.unpromisified({
        url: `${base}/getUser/${id}`,
        method: "GET"
      }, (err, res) => {
        if(err) throw new TypeError(err);
        if(JSON.parse(res.body.toString()).error) {
          reject(JSON.parse(res.body.toString()).error.message)
        } else {
          resolve(JSON.parse(res.body.toString()))
        }
      })
    })
  }
  
  getLikes(id) {
    if(!id) throw new TypeError('You must provide a bot id.')
    return new Promise((resolve, reject) => {
      phin.unpromisified({
        url: `${base}/getLikes/${id}`,
        method: "GET"
      }, (err, res) => {
        if(err) throw new TypeError(err);
        if(JSON.parse(res.body.toString()).error) {
          reject(JSON.parse(res.body.toString()).error.message)
        } else {
          resolve(JSON.parse(res.body.toString()))
        }
      })
    })
  }
  
}

module.exports = Client;
