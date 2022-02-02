export default function Pagination(){
    return(
    <header className="navigation">
    <nav aria-label="Page navigation example">
       <ul className="pagination justify-content-end">
               <li className="page-item disabled">
                  <button className="btn page-link" tabIndex="-1" aria-disabled="true"><i className="bi bi-chevron-double-left"></i></button>
               </li>
               <li className="page-item">
               <button className="btn page-link"><i className="bi bi-chevron-double-right"></i></button>
               </li>
       </ul>
    </nav>
    </header>
    )
}
