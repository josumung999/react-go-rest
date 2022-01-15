import { Fragment } from "react"

const ListItem = (props) => {
  return (
    <Fragment>
      <div className="card mb-3" key={props.key}>
        <div className="row">
          <div className="col-4">
            <img className="h-100 img-fluid rounded-start" src="https://bidinnovacion.org/economiacreativa/wp-content/uploads/2014/10/speaker-3.jpg" alt="" style={{ objectFit: "cover" }} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title fs-6">
                {props.name.slice(0,20)} {' '}
                {props.status === "active" ? (
                  <span className="badge float-end rounded-pill bg-primary">
                    {props.status}
                  </span>

                ) : (
                  <span className="badge float-end rounded-pill bg-danger">
                    {props.status}
                  </span>
                )}
              </h5>
              <div className="card-text text-muted" style={{ fontSize: '0.8rem' }} >
                <i className="fa fa-envelope"></i> {props.email} <br />
                <i className="fa fa-user"></i> {props.gender}
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <small className="text-muted">
            User ID: {props.id}
          </small>
          <button className="btn btn-success mx-2">
            View Profile <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ListItem
