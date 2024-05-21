const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className="image">
                    <img src="\images\chia-fruit-drink.jpg" alt="chia fruit shake" />
                </div>

                <div className="image-text">
                    Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk">Unsplash</a>
                </div>    
                           
                <div className="button">
                    <a href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </div>

            </main>
        </Def>
    )
}

module.exports = home

