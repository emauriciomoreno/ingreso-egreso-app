import { Action } from '@ngrx/store';
import { IngresoEgreso } from './ingreso-egreso.model';
export const SET_ITEMS = '[INGRESO EGRESO] Set Items';
export const UNSET_ITEMS = '[INGRESO EGRESO] Unset Items';

export class SetItemsAction implements Action{
    readonly type = SET_ITEMS;

    constructor(public items: IngresoEgreso[]){}
}

export class UnSetItemsAction implements Action{
    readonly type = UNSET_ITEMS;
}

export type acciones = SetItemsAction | 
                        UnSetItemsAction;