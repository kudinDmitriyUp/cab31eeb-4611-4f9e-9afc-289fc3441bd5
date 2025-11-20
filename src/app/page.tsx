"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Heart, Sparkles, Briefcase, Waves, Crown, Calendar, Instagram, Facebook, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {"name":"Inicio","id":"hero"},
            {"name":"Habitaciones","id":"rooms"},
            {"name":"Restaurante","id":"dining"},
            {"name":"Experiencias","id":"experiences"},
            {"name":"Contacto","id":"contact"}
          ]}
          brandName="Idanzito"
          button={{
            "text":"Reservar",
            "href":"contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="IDANZITO"
          description="Experiencia culinaria excepcional en el corazón de España. Donde la tradición gastronómica se encuentra con la elegancia moderna."
          buttons={[
            {"text":"Reservar Mesa","href":"contact"},
            {"text":"Ver Menú","href":"dining"}
          ]}
          slides={[
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634212129-m6i16krc.jpg","imageAlt":"Restaurante Idanzito interior elegante"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634212886-lr2j0cm4.jpg","imageAlt":"Suite de lujo Hotel Idanzito"},
            {"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634213540-93kimcps.jpg","imageAlt":"Terraza restaurante Idanzito España"}
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Nuestra Historia"
          description="En Idanzito, cada plato cuenta una historia de tradición culinaria española, donde los sabores auténticos se fusionan con técnicas gastronómicas innovadoras para crear experiencias inolvidables en un ambiente de lujo incomparable."
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Nuestras Habitaciones"
          description="Suites y habitaciones de lujo diseñadas para ofrecer la máxima comodidad y elegancia"
          tag="Alojamiento"
          products={[
            {"id":"1","name":"Suite Imperial","price":"€450/noche","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634214080-d90a332l.jpg","imageAlt":"Suite Imperial de lujo"},
            {"id":"2","name":"Habitación Deluxe","price":"€280/noche","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634214864-49pcwjpl.jpg","imageAlt":"Habitación Deluxe elegante"},
            {"id":"3","name":"Suite Presidencial","price":"€750/noche","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634215380-9po5ddm0.jpg","imageAlt":"Suite Presidencial de lujo"}
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="dining" data-section="dining">
        <FeatureCardEight
          title="Experiencias Gastronómicas"
          description="Descubre nuestras propuestas culinarias únicas"
          tag="Gastronomía"
          features={[
            {"id":1,"title":"Alta Cocina","description":"Menú degustación con ingredientes selectos y presentación artística que celebra la gastronomía española contemporánea","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634215901-ws86jd8i.jpg","imageAlt":"Platos de alta cocina española"},
            {"id":2,"title":"Terraza Panorámica","description":"Cenas al aire libre con vistas espectaculares y ambiente romántico bajo las estrellas españolas","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634216633-az3lwjor.jpg","imageAlt":"Terraza restaurante con vistas"},
            {"id":3,"title":"Bar de Cócteles","description":"Selección exclusiva de cócteles artesanales y los mejores vinos españoles en ambiente sofisticado","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634217344-ex7myydt.jpg","imageAlt":"Bar lounge elegante"}
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="experiences" data-section="experiences">
        <FeatureCardTwo
          title="Servicios Premium"
          description="Servicios exclusivos para una estancia inolvidable"
          tag="Experiencias"
          features={[
            {"title":"Spa & Wellness","description":"Centro de bienestar con tratamientos exclusivos y terapias relajantes","icon":Sparkles},
            {"title":"Piscina Rooftop","description":"Piscina en la azotea con vistas panorámicas de la ciudad","icon":Waves},
            {"title":"Servicio Concierge","description":"Asistencia personalizada las 24 horas para todas sus necesidades","icon":Crown},
            {"title":"Eventos Privados","description":"Espacios exclusivos para celebraciones y reuniones corporativas","icon":Calendar}
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Nuestra Excelencia"
          description="Números que reflejan nuestro compromiso con la calidad"
          tag="Logros"
          metrics={[
            {"id":"1","value":"15+","description":"Años de experiencia culinaria"},
            {"id":"2","value":"98%","description":"Satisfacción de huéspedes"},
            {"id":"3","value":"50+","description":"Platos únicos en carta"},
            {"id":"4","value":"24/7","description":"Servicio de concierge"}
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="scale-rotate"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Nuestro Equipo"
          description="Profesionales apasionados dedicados a crear experiencias únicas"
          tag="Equipo"
          members={[
            {"id":"1","name":"Carlos Mendoza","role":"Chef Ejecutivo","description":"Especialista en cocina española contemporánea con más de 20 años de experiencia en restaurantes Michelin","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634226041-atpnpffi.jpg","imageAlt":"Carlos Mendoza Chef Ejecutivo"},
            {"id":"2","name":"Ana Martínez","role":"Directora de Hotel","description":"Experta en hospitalidad de lujo, garantiza que cada huésped viva una experiencia inolvidable","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634226952-kezn8c6v.jpg","imageAlt":"Ana Martínez Directora de Hotel"},
            {"id":"3","name":"Miguel Rodríguez","role":"Sommelier Principal","description":"Sommelier certificado especializado en vinos españoles y maridajes gastronómicos excepcionales","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634227633-5t89n304.jpg","imageAlt":"Miguel Rodríguez Sommelier"},
            {"id":"4","name":"Isabel González","role":"Jefa de Concierge","description":"Especialista en crear experiencias personalizadas y servicios exclusivos para nuestros huéspedes","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634228146-2fb9k3lx.jpg","imageAlt":"Isabel González Jefa de Concierge"}
          ]}
          gridVariant="four-items-2x2-equal-grid"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Experiencias Únicas"
          description="Lo que dicen nuestros huéspedes sobre su estancia en Idanzito"
          tag="Testimonios"
          testimonials={[
            {"id":"1","name":"María Carmen López","role":"Directora, Grupo Empresarial","company":"Madrid","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634220743-ygqj97hx.jpg","imageAlt":"María Carmen López huésped satisfecha"},
            {"id":"2","name":"Jean-Pierre Dubois","role":"Sommelier Profesional","company":"Francia","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634221894-p6hfk8cy.jpg","imageAlt":"Jean-Pierre Dubois huésped satisfecho"},
            {"id":"3","name":"Elena & Antonio Morales","role":"Celebración de Aniversario","company":"Valencia","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634222964-rq63cxei.jpg","imageAlt":"Elena y Antonio Morales pareja satisfecha"},
            {"id":"4","name":"Sarah Mitchell","role":"Travel Blogger","company":"Reino Unido","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634223706-sgxkt702.jpg","imageAlt":"Sarah Mitchell blogger satisfecha"},
            {"id":"5","name":"Roberto Silva","role":"Ejecutivo Corporativo","company":"Barcelona","rating":5,"imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634224238-o4gbbeaq.jpg","imageAlt":"Roberto Silva ejecutivo satisfecho"}
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Descubre Más"
          description="Artículos exclusivos sobre gastronomía, viajes y experiencias de lujo"
          tag="Blog"
          blogs={[
            {"id":"1","category":"Gastronomía","title":"Los Secretos de la Cocina Española Moderna","excerpt":"Descubre las técnicas culinarias que han revolucionado la gastronomía española contemporánea","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634229036-vl4d2ocp.jpg","imageAlt":"Cocina española moderna","authorName":"Chef Carlos Mendoza","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634226041-atpnpffi.jpg","date":"15 Ene 2025"},
            {"id":"2","category":"Bienestar","title":"Rituales de Relajación: El Arte del Spa","excerpt":"Una guía completa sobre tratamientos de spa y terapias de relajación para el cuerpo y la mente","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634229620-a4l9zr6x.jpg","imageAlt":"Tratamientos de spa relajantes","authorName":"Ana Martínez","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634226952-kezn8c6v.jpg","date":"12 Ene 2025"},
            {"id":"3","category":"Viajes","title":"Guía de Lujo: Lo Mejor de España","excerpt":"Destinos imprescindibles y experiencias únicas para el viajero exigente en tierras españolas","imageSrc":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634230473-nfnpqmw9.jpg","imageAlt":"Destinos de lujo en España","authorName":"Isabel González","authorAvatar":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634228146-2fb9k3lx.jpg","date":"8 Ene 2025"}
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservas"
          title="Reserve su Mesa o Habitación"
          description="Contacte con nosotros para reservar su experiencia gastronómica o estancia de lujo. Nuestro equipo está disponible para atender todas sus necesidades."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763634231310-gp1cadmw.jpg"
          imageAlt="Hotel Idanzito exterior elegante"
          mediaPosition="right"
          inputPlaceholder="Su correo electrónico"
          buttonText="Enviar Solicitud"
          termsText="Al enviar esta solicitud, acepta recibir comunicaciones sobre nuestros servicios y ofertas exclusivas."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Idanzito"
          columns={[
            {"title":"Hotel","items":[{"label":"Habitaciones","href":"rooms"},{"label":"Servicios","href":"experiences"},{"label":"Reservas","href":"contact"}]},
            {"title":"Restaurante","items":[{"label":"Menú","href":"dining"},{"label":"Carta de Vinos","href":"dining"},{"label":"Eventos","href":"experiences"}]},
            {"title":"Información","items":[{"label":"Sobre Nosotros","href":"about"},{"label":"Blog","href":"blog"},{"label":"Contacto","href":"contact"}]}
          ]}
          socialLinks={[
            {"icon":Instagram,"href":"https://instagram.com/idanzito","ariaLabel":"Síguenos en Instagram"},
            {"icon":Facebook,"href":"https://facebook.com/idanzito","ariaLabel":"Síguenos en Facebook"},
            {"icon":Twitter,"href":"https://twitter.com/idanzito","ariaLabel":"Síguenos en Twitter"}
          ]}
          copyrightText="© 2025 Hotel Idanzito. Todos los derechos reservados."
        />
      </div>
    </ThemeProvider>
  );
}