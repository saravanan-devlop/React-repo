import React from "react";
import { Link } from "react-router-dom"

export function Menu() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top navbarScroll bg-info ">
                <div class="container">
                    <a class="navbar-brand" href="#">Banner</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Hello World</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cards">Congrats Card</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/technologies">Technologies</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/social">Social Button</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/member">member login</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/hooks">usestate</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/counter">counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/feedback">feedback</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/thank">thank</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/date">date</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/json">Json</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/product">product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/milestone">milestone</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}