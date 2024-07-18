"use client"
import React from 'react'

const Loading = () => {
    return (
        <div className="preloader">
            <dotlottie-player
                src="https://lottie.host/d851f1dc-6ef5-40be-8ca8-bbffcd018276/wutdxEizj0.json"
                background="#04000A"
                speed="1"
                style={{width: "100%", height: "100%"}}
                direction="1"
                mode="normal"
                loop
                autoplay>
            </dotlottie-player>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        </div>
    )
}

export default Loading