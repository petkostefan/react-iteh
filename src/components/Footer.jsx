import React from 'react'

function Footer({likeCount}) {
    return (
        <footer className="bg-light text-center mt-4 text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-12 col-md-12 mb-12 mb-md-0">
                        <h5 className="text-uppercase">{likeCount === 0 ? "" : "Total likes"}</h5>
                        <h3>
                            {likeCount === 0 ? "" : likeCount}
                        </h3>
                    </div>

                </div>
            </div>
            <div className="text-center p-3">
                © 2020 Copyright: 
                <a className="text-dark" href="#"> StevensBlog.com</a>
            </div>
        </footer>
    )
}

export default Footer
