import React from 'react';

const BuildEasyTableHeader = ({heading}) => {
    return(<thead>
      <tr>
          {heading.map((item, index) => {     
            return (<th key={`row-header-${index}`}>{item}</th>)
          })}
      </tr>
    </thead>);
}

const BuildEasyTableCaption = ({caption}) => {
    return(<caption>
       {caption}
    </caption>);
}

const BuildEasyTableCells = ({cells}) => {
    return(
        cells.map((item, index) => {   
          return (<td key={`rows-${index}`}>{item}</td>)
        })
    )
}

const BuildEasyTableBody = ({rows}) => {
    return(<tbody>
      {rows.map((items, index) => {          
        return (<tr key={`tr-${index}`}>
          <BuildEasyTableCells cells={items} key={`cell-${index}`}/>
        </tr>)         
      })}  
    </tbody>);
}

const BuildEasyTableFooter = ({footer}) => {
    return(<tfoot>
      <tr>
          {footer.map((item, index) => {     
            return (<td key={`row-footer-${index}`}>{item}</td>)
          })}
      </tr>
    </tfoot>);
}

export const EasyTable = (props) => {

    const {heading , rows, footer, className, caption} = props;

    // as we are not using any dependencies for validation
    if(heading && !Array.isArray(heading) || rows && !Array.isArray(rows) || footer && !Array.isArray(footer)){
        return 'One or more Values are not in Array format!';
    }

    return(<table className={className}>
        {caption &&
            <BuildEasyTableCaption caption={caption}/>
        }
        {heading &&
            <BuildEasyTableHeader heading={heading}/>
        }
        {rows &&
            <BuildEasyTableBody rows={rows}/>
        }
        {footer &&
            <BuildEasyTableFooter footer={footer}/>
        }   
    </table>
    );
}