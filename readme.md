<!--9:35 5 minutes -->

<!--Hook: Today we will take our first dip into the back end.  Raise your hand if you can summarize our waiter/waitress analogy of APIs from week 1.  Today we will talk about that interface--how do we, on the front end, interact with the back end? -->

# API and JSON Intro

## Learning Objectives
- Explain the difference between synchronous and asynchronous program execution
- Explain why synchronous program execution is not conducive to the front-end.
- Perform POST, PUT, and DELETE requests to an API to modify data.

## Opening Framing

### PKI -
Let's list out some technologies we've learned in this class thus far.

That is a tremendous amount of stuff. In the first couple of weeks we learned how to style a semantically structured HTML site with the ability to manipulate the DOM. Now, we've been learning a lot about server-side requests and responses. Today we'll be tying these concepts together.

Think back to the first couple weeks of class, what's the difference between synchronous and asynchronous program execution? More importantly, what kind of things can we do with non-blocking asynchronous program execution?

<!--9:40 10 minutes -->

### T & T
Let's look at Google Maps. How would this site work with things not happening asynchronously?

Turn and talk to you neighbor, why might synchronous programming not be effective for the front end? Consider how http requests work within your rails application.

We don't want to sit around and wait for code to execute before we load the rest of our script. It would be really nice if we could just describe what we want to happen when the code finally does execute, in a callback.


### What is an API?

> Basically, an API is a service that provides raw data for public use.

API stands for "Application Program Interface" and technically applies to all of software design. The DOM and jQuery are actually examples of APIs! Since the explosion of information technology, however, the term now commonly refers to web URLs that can be accessed for raw data.

As we move into building single page applications, now is the perfect time to start understanding how to obtain data on the client side and then render it on the browser.

### What is Serialized Data? 

All data sent via HTTP are strings. Unfortunately, what we really want to pass between web applications is **structured data** (i.e., arrays and hashes). Thus, native data structures can be **serialized** into a string representation of the data. This string can be transmitted and then parsed back into data by another web agent.  

There are **two** major serialized data formats...  

#### JSON

**JSON** stands for "JavaScript Object Notation" and has become a universal standard for serializing native data structures for transmission. It is light-weight, easy to read and quick to parse.

```json
{
  "users": [
    {"name": "Bob", "id": 23},
    {"name": "Tim", "id": 72}
  ]
}
```
> Remember, JSON is a serialized format. While it may look like an object, it needs to be parsed so we can interact with it as a true Javascript object.

#### XML

**XML** stands for "eXtensible Markup Language" and is the granddaddy of serialized data formats (itself based on HTML). XML is fat, ugly and cumbersome to parse. It remains a major format, however, due to its legacy usage across the web. You'll probably always favor using a JSON API, if available.

```
<users>
  <user id="23">
    <name><![CDATA[Bob]]></name>
  </user>
  <user id="72">
    <name><![CDATA[Tim]]></name>
  </user>
</users>
```

<!--9:50 5 minutes -->

## Where Do We Find APIs?

APIs are published everywhere. Chances are good that most major content sources you follow online publish their data in some type of serialized format. Heck, [even Marvel publishes an API](http://developer.marvel.com/documentation/getting_started). Look around for a "Developers" section on major websites.

**That sounds hard. Can't you just give me a freebie?**

Try the [Programmable Web API Directory](http://www.programmableweb.com/apis/directory) or the [Public APIs Directory](http://www.publicapis.com/).

<!--9:55 5 minutes -->

## What Is An API Key?

While the majority of APIs are free to use, many of them require an API "key" that identifies the developer requesting data access. This is done to regulate usage and prevent abuse. Some APIs also rate-limit developers, meaning they have caps on the free data allowed during a given time period.

**Try hitting the [Giphy](https://api.giphy.com/) API...**

* No key: [http://api.giphy.com/v1/gifs/search?q=funny+cat](http://api.giphy.com/v1/gifs/search?q=funny+cat)

* With key: [http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC](http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC)

**It is very important that you not push your API keys to a public Github repo.**

> This is especially true when working with [Amazon Web Services (AWS)](https://aws.amazon.com/). Here's an example of a [stolen key horror story](https://wptavern.com/ryan-hellyers-aws-nightmare-leaked-access-keys-result-in-a-6000-bill-overnight).

For the first part of this lesson we'll be using the [Weather Underground API](http://www.wunderground.com/weather/api/d/docs). **Follow the link and sign up for a key.**

Once you're ready, follow this link. Check out the example in the middle of the page. You'll see a URL   that looks something like: `http://api.wunderground.com/api/your_key/conditions/q/CA/San_Francisco.json`
> Replace `your_key` with your actual key and visit that URL.
> If you're using the key provided in the lesson plan, we only have a rate limit of 500 so please don't over use!

You should see a really gigantic object/hash. It can be really intimidating at first. But let's just start clicking around till we find some information we might want to display.

Turns out, we can actually access this JSON object using Javascript!
> JSON stands for Javascript Object Notation. JSON can come in a bunch of different ways. But at the end of the day, it's just an object/hash.

<!--10:00 15 minutes -->

## Postman
One tool that you can use to test APIs is Postman. Postman gives you a GUI access to the power of ``curl``. It's often a bit 
overkill for GET requests but it provides a nice interface for POST and PUT requests.

### Installation
You can download a native Mac version of [here](https://www.getpostman.com/app/postman-osx?utm_source=site&utm_medium=homepage&utm_campaign=macapp).

To install just click the downloaded file to unzip it, click the file to open it and agree to install it.

### Using Postman
There are two main sections that you need to update in Postman, the headers section, and body section. 

The header represents the additional information that your request is sending. The main header we will need is ``Content-Type``. This tells the server what type of data we're sending. The main values we'll use in this class is ``application/json``. 

The body is the actual data your sending. I recommend using the raw option so that you completely understand what your sending. In 
the raw section you can type in your JSON directly. You can also use the form option if your JSON doesn't include objects or arrays.

### Collections
Another major advantage of Postman is that you can store groups of requests into collections. A collection can be imported using the import button at the top of the screen. Once you import the collection you can make the requests in the collection just by clicking a button.

## REST
REST is based around the concept of a Resource. A resource is just an object and a standardized set of URL routes for accessing 
information around those objects. Here are the RESTful routes:

Name	| Format				| Meaning |
--------|---------------------------------------|---------|------------------------|
Index	| GET resource/			| Return multiple, often all instances of the resource |
Show	| GET resource/:id		| Return a single resource with :id |
Create	| POST resource/		| Create a resource |
Update	| PUT resource/:id		| Update resource with :id | 
Delete	| DELETE resource/:id	| Delete resource with :id |
Edit	| GET resource/:id/edit	| Typically HTML only, form or information to update resource with :id |
New		| GET resource/:id/new	| Typically HTML only, form of information to create resource |

To say that an API is RESTful means that if the API implements functional that corresponds to a RESTful action it uses the RESTful 
route. A RESTful API may not use all of the routes but if a functionality is present then it is accessed with the RESTful route. 
There may be additional query parameters that help control the information that is returned.  REST APIs may have additional routes that are more specific to the resource if needed.

### Criminals Resource
Our basic resource for this lab is the criminal object. 

```javascript
{
  name: "Al Capone",
  location: "Chicago",
	status: "deceased"
}
```

<!--10:15 35-40 minutes -->

## Requirements
The goal for the lab is to run all of the requests listed above on the Criminals resource.

A basic starter code `criminals_api` has been included in this repo.  You need to start this endpoint by doing the following:

1. Clone this repo
2. Navigate inside the `criminals_api` folder
3. Run `npm install` (installs dependencies)
4. Run `mongod` (starts the database)
5. Run `node seed.js` (adds criminal data)
6. Run `node app.js` (starts the API)

Execute all the requests on the port indicated by the final `node` command above.

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

