const changePage = (x) => {
        if(x === "next"){
            setPageNumber(pageNumber + 1);
            fetchFunction(pageNumber + 1);
        } else if(x === "previous") {
            setPageNumber(pageNumber - 1);
            fetchFunction(pageNumber - 1);
        }
    }

    const fetchFunction = (number) => {
        oceanapi.get(fetchApiLogs + userId + `pageNumber=${number ? number : pageNumber}`)
        .then((res) => {
            setLoading(false);
            if(res.data.code === 200){
                setResult(res.data.records);
                console.log(res)
                setTotalRecords(res.data.totalRecords);
            } else {
                setResult([]);
                setTotalRecords(0);
            }
        })
        .catch((error) => {
            setLoading(false);
            console.error(error);
        })
    }


                        <div className="pagination"> //this is the component 
                        {
                            pageNumber <= 1
                            ?<span className="fa fa-angle-left pagination-arrow-disabled"></span>
                            :<span className="fa fa-angle-left pagination-arrow" onClick={() => changePage("previous")}></span>
                        }
                        <span> {pageNumber} of {Math.ceil(totalRecords/50)} pages </span>
                        {
                            pageNumber === Math.ceil(totalRecords/50)
                            ?<span className="fa fa-angle-right pagination-arrow-disabled"></span>
                            :<span className="fa fa-angle-right pagination-arrow" onClick={() => changePage("next")}></span>
                        }
                        </div>
