import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {ButtonExtension} from "./button";

/**
 * Initialization data for the button extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'button:plugin',
  description: 'testing',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension button is activated!');

    let buttonExtension = new ButtonExtension();
    app.docRegistry.addWidgetExtension('Notebook', buttonExtension);
      
  }
};

export default plugin;
