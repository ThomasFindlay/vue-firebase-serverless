import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

export const registerBaseComponents = () => {
  // Require base component context
  const requireComponent = require.context(
    './components/Base',
    false,
    /Base[\w-]+\.vue$/
  );
  requireComponent.keys().forEach(fileName => {
    // Get component config
    const componentConfig = requireComponent(fileName);
    // Convert component name to pascal case
    const componentName = upperFirst(
      camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, ''))
    );
    // Register component globally
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

