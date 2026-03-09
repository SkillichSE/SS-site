import { useLanguage } from '../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="py-12 px-6 text-center border-t border-accent-cyan/10 relative z-10">
      <p className="text-gray-500 font-mono text-sm">
        {t.footer.text}
      </p>
    </footer>
  )
}

export default Footer
