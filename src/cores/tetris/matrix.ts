import { ROWS, COLUMNS } from './const';

export class Matrix {
    cells: PIECE = [];

    public get display() {
        const mt = this;
        const dp: PIECE = [];

        for (let r = 0; r < ROWS; r++) {
            const row: CELL_STATE[] = mt.cells[r];
            const cloned: CELL_STATE[] = [];

            for (let c = 0; c < COLUMNS; c++) {
                cloned.push(row[c]);
            }

            dp.push(cloned);
        }

        return dp;
    }

    constructor() {
        const mt = this;

        mt.cells = mt.matrix;
    }

    reset() {
        const mt = this;

        mt.cells = mt.matrix;

        (function loop(i) {
            setTimeout(function () {
                if (i <= ROWS) {
                    mt.pop();
                } else {
                    mt.push(mt.rowFullFilled);
                }

                if (--i > 0) {
                    loop(i);
                }
            }, 100)
        })(ROWS * 2);
    }

    clone() {
        const mt = this;
        const cells: PIECE = [];

        for (let r = 0; r < ROWS; r++) {
            const row: CELL_STATE[] = [];

            for (let c = 0; c < COLUMNS; c++) {
                row.push(mt.cells[r][c]);
            }

            cells.push(row);
        }

        return cells;
    }

    push(row: CELL_STATE[]) {
        const vm = this;
        const cloned = vm.clone();

        cloned.unshift(row);

        vm.cells = cloned;
    }

    pop() {
        const mt = this;
        const cloned = mt.clone();

        cloned.shift();
        cloned.push(mt.rowZero);

        mt.cells = cloned;
    }

    public get matrix() {
        const mt = this;
        const rows: PIECE = [];

        for (let i = 0; i < ROWS; i++) {
            rows.push(mt.rowZero);
        }

        return rows;
    }

    fillRow(state: CELL_STATE) {
        const cells: CELL_STATE[] = [];

        for (let c = 0; c < COLUMNS; c++) {
            cells.push(state);
        }

        return cells;
    }

    public get rowZero(): CELL_STATE[] {
        const mt = this;

        return mt.fillRow(0);
    }

    public get rowFullFilled(): CELL_STATE[] {
        const mt = this;

        return mt.fillRow(1);
    }

}