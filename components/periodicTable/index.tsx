import Square from "./square";
import TopBar from "./topBar";
import style from './periodicTable.module.scss';
import { elements } from "../../database";

export default function PeriodicTable() { 
    const colors = {
        red: '#BF616A',
        orange: '#D08770',
        yellow: '#EBCB8B',
        green: '#A3BE8C',
        purple: '#B48EAD',
        blueGreen: '#8FBCBB',
        cyan: '#88C0D0',
        lightBlue: '#81A1C1',
        blue: '#5E81AC',
        moreblue: '#81A1C1'
    }

    let table = Array(9).fill(undefined).map(() => Array(18))
    let rows: JSX.Element[][] = [];
    let ii = 0;
    let iii = 71;
    let iiii = 103;

    function getColor(x: number, y: number): string {
        if ((x == 0 && (y == 0)) || 
            (x == 1 && (y > 12 && y < 16)) ||
            (x == 2 && (y > 13 && y < 16)) ||
            (x == 3 && y == 15)) 
            return colors.green;
        else if (y == 0 && x > 0) 
            return colors.orange;
        else if (y == 1 && x > 0) 
            return colors.yellow;
        else if ((x > 2 && x < 7) && (y > 1 && y < 12)) 
            return colors.red;
        else if (x == 7) 
            return colors.lightBlue;
        else if (x == 8) 
            return colors.purple;
        else if (x < 7 && y == 17) 
            return colors.blue;
        else if (x < 7 && y == 16) 
            return colors.cyan;
        else if ((x > 1 && x < 7) && (y == 12) ||
            (x > 3 && x < 7) && (y == 13) ||
            (x > 4 && x < 7) && (y == 14) ||
            (x > 5 && x < 7) && (y == 15)) 
            return colors.blueGreen;
        else return colors.moreblue;
    }

    for (let x = 0; x < table.length; x++) {
        let ell: JSX.Element[] = [];
        for (let y = 0; y < 18; y++) {
            switch (x) {
                case 0: 
                    if (y == 0 || y == 17) {
                        ell.push(<Square el={elements[ii]} filled='true' color={getColor(x, y)} />);
                        ii++;
                    }
                    else ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    break;
                
                case 1:
                case 2:
                    if (y > 1 && y < 12) ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    else {
                        ell.push(<Square el={elements[ii]} filled='true' color={getColor(x, y)} />);
                        ii++;
                    }
                    break;
                
                case 3: 
                case 4:
                    ell.push(<Square el={elements[ii]} filled='true' color={getColor(x, y)} />);
                    ii++;
                    break;

                case 5:
                    if (y != 2) {
                        if (y > 2) {
                            ell.push(<Square el={elements[iii]} filled='true' color={getColor(x, y)} />);
                            iii++;
                        } else {
                            ell.push(<Square el={elements[ii]} filled='true' color={getColor(x, y)} />);
                            ii++
                        }
                    } else {
                        ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    }
                    break;

                case 6:
                    if (y != 2) {
                        if (y > 2) {
                            ell.push(<Square el={elements[iiii]} filled='true' color={getColor(x, y)} />);
                            iiii++;
                        } else {
                            ell.push(<Square el={elements[iii]} filled='true' color={getColor(x, y)} />);
                            iii++
                        }
                    } else {
                        ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    }
                    break;

                case 7:
                    if (y > 2) {
                        ell.push(<Square el={elements[ii]} filled='true' color={getColor(x, y)} />);
                        ii++;
                    } 
                    else ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    break;
                case 8:
                    if (y > 2) {
                        ell.push(<Square el={elements[iii]} filled='true' color={getColor(x, y)} />);
                        iii++;
                    } 
                    else ell.push(<Square el={elements[ii]} filled='false' color={getColor(x, y)} />);
                    break;
            }
        }

        if (x == 7) {
            rows.push([
                <div className={style.row7} id={style.rowName}>
                    { ell }
                </div>
            ]);
        } else {
            rows.push([
                <div className={style.row} id={style.rowName}>
                    { ell }
                </div>
            ]);
        }
    }


    return (
        <div className={style.periodicTable}>
            <TopBar />
            <div className={style.tableContent}>
                {rows}
            </div>
        </div>
    );
}