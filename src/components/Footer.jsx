import { styles } from "../styles"
import { useTranslation } from "../i18n"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={`${styles.paddingX} w-full flex justify-center bg-primary text-xs py-2 text-secondary`}>
      &copy; {t('footer.copyright')}
    </footer>
  )
}

export default Footer