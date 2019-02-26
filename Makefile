.PHONY: styles server github

styles:
	sass --sourcemap=none --watch scss:css

server:
	python3 -m http.server 8000

github:
	git push origin master
