ARG KIBANA_VERSION=latest
FROM kibana:${KIBANA_VERSION}

ARG PLUGIN_VERSION
RUN ./bin/kibana-plugin install file:///build/kibana-time-plugin-${PLUGIN_VERSION}.zip --no-optimize
RUN NODE_OPTIONS="--max-old-space-size=2048" ./bin/kibana --optimize --verbose
