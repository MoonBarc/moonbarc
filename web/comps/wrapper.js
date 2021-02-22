import { motion } from "framer-motion"
import { useState } from "react"

export default function Wrapper({children}) {
    const [ curtain, setCurtain ] = useState(false)

    const variants = {
        open: {
            height: "0%",
            top: 0
        },
        closed: {
            height: "100%",
        }
    }

    return <motion.div>
        <motion.div variants={variants} transition={
            {
                duration: 2
            }
        } style={
            {
                position: "absolute",
                backgroundColor: "red",
                width: "100%",
                zIndex: 1000
            }
        } initial="closed" animate={curtain ? "closed" : "open"}></motion.div>
        <motion.div variants={variants} transition={
            {
                duration: 2.1
            }
        } style={
            {
                position: "absolute",
                backgroundColor: "#89D2C4",
                width: "100%",
                zIndex: 500
            }
        } initial="closed" animate={curtain ? "closed" : "open"}></motion.div>
        {children}
    </motion.div>
}