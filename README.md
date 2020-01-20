# react-easy-table

![npm](https://img.shields.io/npm/v/@markdijkstra/react-easy-table)
![NPM](https://img.shields.io/npm/l/@markdijkstra/react-easy-table)
![GitHub issues](https://img.shields.io/github/issues/MarkDijkstra/react-easy-table)
![CircleCI](https://img.shields.io/circleci/build/github/MarkDijkstra/react-easy-table)


Basic react table component. This component will return a very basic and easy to use table.

### How install


```npm
npm i @markdijkstra/react-easy-table
```


### How to use


```jsx
import {EasyTable} from 'react-easy-table'

const TableHeading = [
   'First cell heading',
   'Second cell heading',
   'First cell heading'
];

const TableCaption = 'Caption message';

const TableRows = [
    [
        'First cell, first row',
        'Second cell, first row',
        'Third cell, first row'
    ],
    [
        'First cell, second row',
        'Second cell, second row',
        'Third cell, second row'
    ],
    [
        'First cell, last row',
        'Second cell, last row',
        'Third cell, last row'
    ],
];

const TableHeading = [
   'First cell footer',
   'Second cell footer',
   'Third cellfooter'
];



<EasyTable caption={TableHeading} rows={TableRows} footer={TableFooter} className="table_class" />

```


### Output HTML

```html

<table>
    <caption>Caption message</caption>
    <thead>
        <tr>
            <th>First cell heading<th>
            <th>Second cell heading<th>
            <th>Third cell heading<th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>First cell, first row<td>
            <td>Second cell, first row<td>
            <td>Third cell, first row<td>
        </tr>
        <tr>
            <td>First cell, second row<td>
            <td>Second cell, second row<td>
            <td>Third cell, second row<td>
        </tr>
        <tr>
            <td>First cell, last row<td>
            <td>Second cell, last row<td>
            <td>Third cell, last row<td>
        </tr>
    <tbody>    
    <tfoot>
        <tr>
            <td>First cell footer<td>
            <td>Second cell footer<td>
            <td>Third cell footer<td>
        </tr>
    <tfoot>  
</table>

```


