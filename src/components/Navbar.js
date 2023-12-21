import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary " style={{display:'flex',justifyContent:'space-between'}}>
                <div class="container-fluid ms-5">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div>
                    <button className='btn btn-success me-5'>signIn</button>

                </div>
            </nav>
        </>
    )
}

export default Navbar