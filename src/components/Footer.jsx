import { styles } from "../styles"

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex justify-center bg-primary text-xs py-2 text-secondary`}>
        &copy;kor1k all rights reserved
    </footer>
  )
}

export default Footer