import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ItemModel } from '@syncfusion/ej2-navigations';

/**
 * `ItemDirective` directive represent a column of the react Toolbar. 
 * It must be contained in a Toolbar component(`Toolbar`). 
 * ```tsx
 * <ToolbarComponent 
 * <ItemsDirective>
 * <ItemDirective text='Cut'></e-item>
 * <ItemDirective text='Copy'></e-item>
 * <ItemsDirective>
 * </Toolbar>
 * ```
 */
export class ItemDirective extends ComplexBase<ItemModel, ItemModel> {
    public static moduleName: string = 'item';
}

export class ItemsDirective extends ComplexBase<{}, {}> {
    public static propertyName: string = 'items';
    public static moduleName: string = 'items';
}