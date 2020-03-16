This is a basic implementation of REST APIs using Sequelize ORM

It is using sqlite as the database, but it can substituted with any other database like PostgreSQL, MySQL

# Project Entites

**Item - This is like a task**

Fields/columns:

- id
- content

**Project - This is a collection of items**

Fields/columns:

- id
- name

_One project has many items. One item belongs to a single project._
