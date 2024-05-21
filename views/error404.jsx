const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div className="image">
                    <img src="\images\website-page-not-found-error-404-oops-worried-robot.jpg" alt="404 robot image" />
                    <div>
                        
                    </div>
                </div>
            </main>
        </Def>
    )
}


module.exports = error404
