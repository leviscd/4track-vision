import Logo4Track from './Logo4Track';

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/20 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo4Track />
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Suporte</a>
            <a href="#" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
          <p>© 2024 4Track. Todos os direitos reservados.</p>
          <p className="mt-2 text-xs">
            Tecnologia avançada de análise e cruzamento de dados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
