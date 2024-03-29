import {ToolbarButton} from "@jupyterlab/apputils";
import {DocumentRegistry} from "@jupyterlab/docregistry";
import {INotebookModel, NotebookPanel} from "@jupyterlab/notebook";
import {IDisposable} from "@lumino/disposable";

export class ButtonExtension implements DocumentRegistry.IWidgetExtension<NotebookPanel, INotebookModel> {
    createNew(panel: NotebookPanel, context: DocumentRegistry.IContext<INotebookModel>): IDisposable {
        //create the toolbar button
        let mybutton = new ToolbarButton ({
            label: 'My Button',
            onClick: () => alert('Hello World!')
        });
        //add the tool bar button to the notebook
        panel.toolbar.insertItem(9, 'mybutton', mybutton);

        // The ToolbarButton class implements 'IDisposable', so the
        //button is the extension for the purpose of this method 
        return mybutton;
    }
}
