import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): RowID;
declare function updateRow(id: RowID, row: RowElement): RowID;
declare function deleteRow(id: RowID): boolean;

