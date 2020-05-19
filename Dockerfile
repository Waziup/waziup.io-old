FROM nginx as build

ENV HUGO_VERSION 0.59.1
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit.tar.gz

# Install Hugo
RUN set -x 
RUN apt-get update 
RUN apt-get install -y wget ca-certificates 
#texlive-latex-base texlive-latex-extra texlive-latex-recommended texlive-fonts-recommended 
#texlive-fonts-extra
RUN wget https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY} && \
    tar xzf ${HUGO_BINARY} && \
    rm -r ${HUGO_BINARY} && \
    mv hugo /usr/bin

RUN wget https://github.com/jgm/pandoc/releases/download/2.8.0.1/pandoc-2.8.0.1-1-amd64.deb && \
    dpkg -i pandoc-2.8.0.1-1-amd64.deb

COPY ./ /site

WORKDIR /site

# Create PDF docs
#RUN ./makeDocs.sh

# Create the website
RUN /usr/bin/hugo


# deploy stage
FROM nginx:alpine

ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /site/public /var/www/

WORKDIR /var/www/site

