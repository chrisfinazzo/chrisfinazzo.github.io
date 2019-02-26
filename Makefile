.PHONY: styles server

styles:
	sass --sourcemap=none --watch scss:css

server:
	python3 -m http.server 8000

github:
	git push origin master
