type TableColumnConfig = {
	title: string;
	hideTitle: boolean;
	width?: string;
};

type TableContext = {
	register: (column: TableColumnConfig) => void;
	columns: TableColumnConfig[];
	getColumns: () => TableColumnConfig[];
};

export { TableContext, TableColumnConfig };
