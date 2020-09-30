# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer:
    Instance variables are declared with @. They're local variables that only exist within the scope of the method they're created in. 
  Researched answer:
    Class variables are shared between a class and all its subclasses, while class instance variables only belong to one specific class. Thus class variablescan be seen as global variables.


2. What is a block in Ruby?

  Your answer:
    A Ruby block is an anonymous function. It can be created as a single line  with curly bfackets or with do/end. 
  Researched answer:
    Ruby blocks are performed on variables but don't have assignments themselves. These are portions of code passed to a method. The braces syntax has a higher precedence than the do..end syntax.


3. Ruby has an implicit return. What does that mean?

  Your answer:
    This means that the last line of any method or block will automatically be executed, so writing "return" is not necessary,
  Researched answer:
    Any statement in Ruby returns the value of the last evaluated expression. Ruby always returns the last evaluated expression


4. What is object-oriented programming? How is it different than functional programming?

  Your answer:
    In object-oriented programming, everything is an object, or an instance of class. Objects are intersections of data and behavior, as methods. I'm not very sure how functional programming works, but I can find out for you.
  Researched answer:
    Functional programming utilizes pure functions, mutable data, and side-effets. Functional code tends to be more concise, predictable, and easier to test.


5. What is the difference between a class and an object?

  Your answer:
    A class is a blueprint of what to make. When a class is instantiated, a new object is created. A class can create objects with many similar properties and methods, but each object is separate from one another and unique.
  Researched answer:
    Objects are any piece of data. Classes are what kind of data it is. Ruby separates everything into classes, like integers, floats and strings. 



6. STRETCH: What is `attr_accessor`?

  Your answer:
    I'm not sure what that is, but I can find out for you.
  Researched answer:
    attr_accessor is a Ruby method that sets up getters ans setters for instance variables.


## Looking Ahead: Terms for Next Week
- PostgreSQL
    PostgresSql is a stable database management system that is used as the primary data store warehouse for may web, mobile, geospatial, and analytics applications.
- API
    An API is a computing ingerface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, how the data formats should be used, and the conventions to follow.
- CRUD
    CRUD stands for Create, Read, Update and Delete and these are four basic functions to manipulate data in a database.
- Ruby on Rails
    A server-sde web application framework written in Ruby. It's used to build websites and applications.
- ORM
    ORM stands for object-relatinal mapping. It's a programming technique for converting data between incompatible type systems using object-oriented programming languages. 
- Active Record
    Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.