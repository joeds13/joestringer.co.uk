VERSION := $(shell git rev-parse --short=8 HEAD)
NAME := $(shell basename `pwd`)
ECR_REPO :=
CF_DIST_ID := $(shell aws-vault exec personal -- aws cloudfront list-distributions --query DistributionList.Items[].Id | jq -r .[0] )

build:
	docker build --build-arg version=${VERSION} -t ${NAME}:${VERSION} .

run: build
	docker run --rm -it -p 3000:3000 ${NAME}:${VERSION}

test:
	docker build -t ${NAME}:test --target=test .

tag: build
	docker tag ${NAME}:${VERSION} ${ECR_REPO}:${VERSION}

push: tag
	docker push ${ECR_REPO}:${VERSION}

prettier:
	yarn run prettier --write .

s3-sync:
	yarn build
	yarn export
	aws-vault exec personal -- aws s3 sync --delete out/ s3://www.joestringer.co.uk/

cloudfront-invalidate:
	aws-vault exec personal -- aws cloudfront create-invalidation --distribution-id ${CF_DIST_ID} --paths "/*"

deploy: s3-sync cloudfront-invalidate
