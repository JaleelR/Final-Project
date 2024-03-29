import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

export class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;
  

  /* skeleton method for get calls  */
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    console.log("headers::::::", headers)
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /* Logs in a user */
  static async login(username, password) {
    let res = await this.request(`auth/token`, {username, password}, "post");
    this.token = res.token;
    console.log("login token,", res.token)
    return res.token;
  }

  /* registers a user */
  static async signup(username, password, firstName, lastName, email) {
    let res = await this.request(`auth/register`, { username, password, firstName, lastName, email }, "post");
    this.token = res.token;
    return res.token;
  }; 
  /* gets info on a user */
  static async getUserInfo(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }; 


/* Get All companies */
  static async getCompanies() {
    let res = await this.request(`companies`);
    return res.companies;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


/* Get All jobs */
  static async getJobs() {
    let res = await this.request(`jobs`);
    return res.jobs;
  }

  /** Get job by handle. */

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.company;
  }


  // static async signup (username, password, name, firstname, lastname, email) {
  //   let res = await this.request(`token`, { username, password, name, firstname, lastname, email }, "post" );
  //   return res;
  // }

  static async updateUser(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res;
  };

  static async applyToJob(username, jobId) {
 await this.request(`users/${username}/jobs/${jobId}`, {}, "post");
  };







  // obviously, you'll add a lot here ...
}

// for now, put token ("testuser" / "password" on class)


    