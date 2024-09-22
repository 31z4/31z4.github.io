all: format-check lint build validate

build:
	npx @11ty/eleventy

serve:
	npx @11ty/eleventy --serve

lint:
	npx eslint

format-check:
	npx prettier --check src

validate:
	npx html-validate dist
