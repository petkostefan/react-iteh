import React from 'react'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <a className="navbar-brand" href="/">Steven's Blog</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="/">Home</a>
                    <a className="nav-item nav-link" href="/about">About</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
