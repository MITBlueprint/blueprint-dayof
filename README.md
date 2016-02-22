HackMIT Day Of Page
===================

This website will provide information to the hackers on the day of the event.

[Here's a link to the spec.](https://docs.google.com/document/d/1xEZLT9MSWjcQTHy2KZhYpfmOLor7_GTu2MUJFIHvKPs/edit)

---

Git Flow
--------

For this page we're using a modified git flow, since the `gh-pages` branch represents production.

Feature branches will come and go from `master`, and for deploys `master` will be merged into `gh-pages`

Testing
-------

1. Make sure you have node installed.

2. Install packages
	- `cd` into the root directory of the project and run `npm install`

3. Compile templates
	- `cd` into the root directory of the project and run `make compile`

4. Run an HTTP Server
	- Python 2: `cd` into the root directory of the project and run `python -m SimpleHTTPServer`.
	- Python 3: `cd` into the root directory of the project and run `python3 -m http.server`.

5. Direct your browser to `http://localhost:8000/` to see the site.

Before pushing
--------------

If you want to remove all files created by the `make compile` command
	- `cd` into the root directory of the project and run `make rmCompiled`