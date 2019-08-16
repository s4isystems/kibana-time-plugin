FROM kibana:$KIBANA_VERSION

RUN ./bin/kibana-plugin install file:///build/*.zip --no-optimize
RUN NODE_OPTIONS="--max-old-space-size=2048" ./bin/kibana --optimize --verbose
