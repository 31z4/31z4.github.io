all: format-check lint clean build validate

clean:
	rm -rf dist

build:
	npx @11ty/eleventy

serve:
	npx @11ty/eleventy --serve

lint:
	npx eslint
	npx stylelint src/styles

format-check:
	npx prettier --check src

validate:
	npx html-validate dist
