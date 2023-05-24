import { Box, Table } from '@mantine/core';
import { useStyles } from './table.styles';
import React, { Dispatch, SetStateAction } from 'react';
const ths = (
  <tr>
    {/* <th>Qabul qilingan arizalar</th>
    <th>Rad etilgan</th> */}
    <th>Kinoteatr nomi</th>
    <th>Barcha joylar</th>
    <th>Barcha chiptalar (bo'sh joylar)</th>
  </tr>
);
const elements = [1, 2, 3, 4, 5, 6];

interface TableProps {
  found: boolean;
  setFound: Dispatch<SetStateAction<boolean>>;
}

const TableStatistics = ({ found, setFound }: TableProps) => {
  const { classes } = useStyles();
  const randomNum1 = (num: number) => Math.ceil(Math.random() * num);
  const randomNum2 = (num: number) => Math.ceil(Math.random() * num) + 10;
  const randomNum3 = (num: number) => Math.ceil(Math.random() * num);
  const randomNum4 = (num: number) => Math.ceil(Math.random() * num);
  const randomNum5 = (num: number) => Math.ceil(Math.random() * num) + 3;

  const returnName = (num: number) => {
    switch (num) {
      case 0:
        return "Mega Cinema"
        break;
      case 1:
        return "G'uncha"
        break;
      case 2:
        return "Alisher Navoiy"
        break;
      case 3:
        return "Magic Cinema"
        break;
      case 4:
        return "Magic Cinema"
        break;
      case 5:
        return "Parus Cinema"
        break;
      case 6:
        return "Next Cinema"
        break;
      case 7:
        return "Royal Cinema"
        break;
      case 8:
        return "Drive Cinema"
        break;
      case 9:
        return "Yulduz Cinema"
        break;
      case 10:
        return "Asian Cinema"
        break;
      default:
        return "Cinema"
        break;
    }
  }

  const returnPlace = (num: number) => {
    switch (num) {
      case 0:
        return `${num} a`
        break;
      case 1:
        return `${num} b`
        break;
      case 2:
        return `${num} c`
        break;
      case 3:
        return `${num} d`
        break;
      case 4:
        return `${num} a`
        break;
      case 5:
        return `${num} f`
        break;
      case 6:
        return `${num} b`
        break;
      case 7:
        return `${num} m`
        break;
      case 8:
        return `${num} s`
        break;
      case 9:
        return `${num} e`
        break;
      case 10:
        return `${num} c`
        break;
      default:
        return "a"
        break;
    }
  }
  const rows = elements.map((element) => (
    <tr key={element}>
      {/* <td>{randomNum1(element)}</td>
      <td>{randomNum2(element)}</td> */}
      <td>{returnName(randomNum3(10))}</td>
      <td>{randomNum2(10)}</td>
      <td>Jami: {randomNum5(3)}ta; <span style={{ padding: 5, borderRadius: 4, backgroundColor: 'limegreen', color: 'white' }}>{returnPlace(randomNum4(10))}</span> <span style={{ padding: 5, borderRadius: 4, backgroundColor: 'limegreen', color: 'white' }}>{returnPlace(randomNum1(10))}</span> ...</td>
    </tr>
  ));

  return (
    <Box my={40} className={classes.wrapper}>
      <Table
        captionSide="bottom"
        striped
        highlightOnHover
        horizontalSpacing="xl"
        verticalSpacing="xl"
      >
        <thead>{ths}</thead>
        {found && <tbody>{rows}</tbody>}
        {/* <tfoot>{ths}</tfoot> */}
      </Table>
    </Box>
  );
};

export default TableStatistics;
