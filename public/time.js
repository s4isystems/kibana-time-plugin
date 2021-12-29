import 'ui/angular-bootstrap';
import 'plugins/kibana-time-plugin/bower_components/angular-bootstrap/ui-bootstrap-tpls.js';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/css/bootstrap-addons.css';
import 'plugins/kibana-time-plugin/bower_components/bootstrap-addons/dist/js/bootstrap-addons.js';
import 'plugins/kibana-time-plugin/time.less';
import 'plugins/kibana-time-plugin/timeController';
import { VisFactoryProvider } from 'ui/vis/vis_factory';
import { VisTypesRegistryProvider } from 'ui/registry/vis_types';
import visTemplate from 'plugins/kibana-time-plugin/time.html';
import optionsTemplate from 'plugins/kibana-time-plugin/timeOptions.html';

VisTypesRegistryProvider.register(TimeVisProvider);

function TimeVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);

  return VisFactory.createAngularVisualization({
    name: 'time',
    title: 'Time widget',
    icon: 'clock',
    description: 'Add time inputs to your dashboards.',
    visConfig: {
      template: visTemplate,
      defaults: {
          enable_quick: true,
          enable_relative: true,
          enable_absolut: true,
          enable_animation: true,
      }
    },
    editorConfig: {
      optionsTemplate: optionsTemplate
    },
    requestHandler: 'none',
    responseHandler: 'none'
  });
}
