compile:
	node bundlebar/generate.js

rmCompiled:
	node bundlebar/rm_generated.js

gsparse:
	node bundlebar/gsparse_run.js

all:
	make gsparse
	make compile

dir:
	node bundlebar/make_dir.js $(d)