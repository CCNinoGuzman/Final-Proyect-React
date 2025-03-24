import { motion } from "framer-motion"

let WelcomeText = ()=>{
    return(
        <motion.section
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={{
            x: [-1200, 0, 1200],
            transition: { ease: ["easeIn", "easeOut"], opacity: { ease: "linear" },duration: 9, repeat: Infinity},
            opacity:1,
            transitionEnd: {
                x: [1200, 200, -1200],
                opacity: 0
            },
        }}
        className="Section1 p-5 text-center">
            <h2>¡Bienvenidos! a la mejor Tienda Online de Tecnología</h2>
        </motion.section>
    )
}

export default WelcomeText;