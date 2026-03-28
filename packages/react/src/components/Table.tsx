import * as React from 'react';
import clsx from 'clsx';

// ─── Table Root ────────────────────────────────────────────────────────────────
type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
    striped?: boolean;
    hoverable?: boolean;
    compact?: boolean;
};

const TableRoot = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className, striped, hoverable = true, compact, children, ...props }, ref) => (
        <div className="pix-table-wrapper">
            <table
                ref={ref}
                className={clsx(
                    'pix-table',
                    {
                        'pix-table--striped': striped,
                        'pix-table--hoverable': hoverable,
                        'pix-table--compact': compact,
                    },
                    className
                )}
                {...props}
            >
                {children}
            </table>
        </div>
    )
);
TableRoot.displayName = 'Table';

// ─── Table Head ────────────────────────────────────────────────────────────────
type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
    ({ className, ...props }, ref) => (
        <thead ref={ref} className={clsx('pix-table__head', className)} {...props} />
    )
);
TableHead.displayName = 'TableHead';

// ─── Table Body ────────────────────────────────────────────────────────────────
type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
    ({ className, ...props }, ref) => (
        <tbody ref={ref} className={clsx('pix-table__body', className)} {...props} />
    )
);
TableBody.displayName = 'TableBody';

// ─── Table Footer ──────────────────────────────────────────────────────────────
type TableFooterProps = React.HTMLAttributes<HTMLTableSectionElement>;
const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
    ({ className, ...props }, ref) => (
        <tfoot ref={ref} className={clsx('pix-table__foot', className)} {...props} />
    )
);
TableFooter.displayName = 'TableFooter';

// ─── Table Row ─────────────────────────────────────────────────────────────────
type TableRowProps = React.HTMLAttributes<HTMLTableRowElement> & {
    selected?: boolean;
};
const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
    ({ className, selected, ...props }, ref) => (
        <tr
            ref={ref}
            className={clsx('pix-table__row', { 'pix-table__row--selected': selected }, className)}
            {...props}
        />
    )
);
TableRow.displayName = 'TableRow';

// ─── Table Header Cell ─────────────────────────────────────────────────────────
type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
    sortable?: boolean;
    sortDirection?: 'asc' | 'desc' | null;
    onSort?: () => void;
};
const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
    ({ className, sortable, sortDirection, onSort, children, ...props }, ref) => (
        <th
            ref={ref}
            className={clsx(
                'pix-table__th',
                { 'pix-table__th--sortable': sortable },
                className
            )}
            onClick={sortable ? onSort : undefined}
            {...props}
        >
            <span className="pix-table__th-content">
                {children}
                {sortable && (
                    <span className="pix-table__sort-icon">
                        {sortDirection === 'asc' ? ' ▲' : sortDirection === 'desc' ? ' ▼' : ' ⇅'}
                    </span>
                )}
            </span>
        </th>
    )
);
TableHeaderCell.displayName = 'TableHeaderCell';

// ─── Table Cell ────────────────────────────────────────────────────────────────
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
    truncate?: boolean;
};
const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
    ({ className, truncate, ...props }, ref) => (
        <td
            ref={ref}
            className={clsx('pix-table__td', { 'pix-table__td--truncate': truncate }, className)}
            {...props}
        />
    )
);
TableCell.displayName = 'TableCell';

// ─── Compound Export ───────────────────────────────────────────────────────────
export const Table = Object.assign(TableRoot, {
    Head: TableHead,
    Body: TableBody,
    Footer: TableFooter,
    Row: TableRow,
    HeaderCell: TableHeaderCell,
    Cell: TableCell,
});
